import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Allowed origins for CORS - production domain and Lovable preview domains
const ALLOWED_ORIGINS = [
  'https://giolabriparazioni.it',
  'https://www.giolabriparazioni.it',
];

// Check if origin is allowed (includes Lovable preview domains)
function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  // Allow Lovable preview domains
  if (origin.includes('.lovable.app')) return true;
  return false;
}

// Get CORS headers with validated origin
function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowedOrigin = isAllowedOrigin(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowedOrigin!,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };
}

// Cache in memoria
let cachedReviews: any = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minuti

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const MAX_REQUESTS_PER_WINDOW = 30; // max 30 richieste per minuto
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Funzione per ottenere l'IP del client
function getClientIP(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
         req.headers.get('x-real-ip') || 
         'unknown';
}

// Funzione per verificare il rate limit
function checkRateLimit(clientIP: string): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const clientData = rateLimitMap.get(clientIP);
  
  // Pulisci entries scadute ogni tanto
  if (rateLimitMap.size > 1000) {
    for (const [ip, data] of rateLimitMap.entries()) {
      if (now > data.resetTime) {
        rateLimitMap.delete(ip);
      }
    }
  }
  
  if (!clientData || now > clientData.resetTime) {
    // Nuova finestra temporale
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1, resetIn: RATE_LIMIT_WINDOW };
  }
  
  if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
    // Rate limit superato
    return { allowed: false, remaining: 0, resetIn: clientData.resetTime - now };
  }
  
  // Incrementa contatore
  clientData.count++;
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - clientData.count, resetIn: clientData.resetTime - now };
}

// Funzione per fetch con retry
async function fetchWithRetry(url: string, maxRetries: number = 2): Promise<any> {
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempt ${attempt + 1}/${maxRetries + 1} - Fetching Google API...`);
      const response = await fetch(url);
      const data = await response.json();
      
      console.log('Google API Response Status:', data.status);
      console.log('Reviews count:', data.result?.reviews?.length || 0);
      
      if (data.status === 'OK' && data.result?.reviews && data.result.reviews.length > 0) {
        return data;
      }
      
      // Se status OK ma nessuna review, log dettagliato
      if (data.status === 'OK') {
        console.log('API OK but no reviews. Result:', JSON.stringify(data.result, null, 2));
      }
      
      lastError = new Error(`Google API returned: ${data.status}, reviews: ${data.result?.reviews?.length || 0}`);
      
      // Attendi prima del retry
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
      }
    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed:`, error);
      lastError = error as Error;
      
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
      }
    }
  }
  
  throw lastError || new Error('Failed to fetch reviews after retries');
}

serve(async (req) => {
  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);
  
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = getClientIP(req);
    const rateLimit = checkRateLimit(clientIP);
    
    if (!rateLimit.allowed) {
      console.log(`⛔ Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
            'Retry-After': Math.ceil(rateLimit.resetIn / 1000).toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': Math.ceil(rateLimit.resetIn / 1000).toString(),
          },
        }
      );
    }

    const now = Date.now();
    
    // Controlla se abbiamo dati in cache validi
    if (cachedReviews && (now - cacheTimestamp) < CACHE_DURATION) {
      console.log('✅ Returning cached reviews (age:', Math.round((now - cacheTimestamp) / 1000), 'seconds)');
      return new Response(
        JSON.stringify(cachedReviews),
        { 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          } 
        }
      );
    }

    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    const placeId = Deno.env.get('GOOGLE_PLACE_ID');

    console.log('🔄 Fetching fresh reviews from Google API...');
    console.log('API Key present:', !!apiKey);
    console.log('Place ID:', placeId);

    if (!apiKey || !placeId) {
      throw new Error('Missing Google API credentials');
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=it`;

    const data = await fetchWithRetry(url, 2);

    if (data.status !== 'OK') {
      throw new Error(`Google API error: ${data.status}${data.error_message ? ' - ' + data.error_message : ''}`);
    }

    // Transform Google reviews to our format - filter only 5-star reviews
    const allReviews = data.result.reviews?.map((review: any, index: number) => ({
      id: `google-${index + 1}`,
      name: review.author_name,
      role: "Cliente Google",
      location: "Assemini, CA",
      rating: review.rating,
      text: review.text,
      date: new Date(review.time * 1000).toLocaleDateString('it-IT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      avatar: review.profile_photo_url || `https://api.dicebear.com/7.x/initials/svg?seed=${review.author_name}`,
      service: "Recensione Google"
    })) || [];
    
    // Show only 5-star reviews
    const reviews = allReviews.filter((review: any) => review.rating === 5);

    const result = {
      reviews,
      aggregateRating: data.result.rating,
      totalReviews: data.result.user_ratings_total
    };

    // Salva in cache solo se abbiamo reviews
    if (reviews.length > 0) {
      cachedReviews = result;
      cacheTimestamp = now;
      console.log('✅ Reviews cached successfully:', reviews.length, 'reviews');
    } else {
      console.log('⚠️ No reviews to cache');
    }

    return new Response(
      JSON.stringify(result),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('❌ Error fetching Google reviews:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Se abbiamo cache (anche scaduta), usala come fallback
    if (cachedReviews) {
      console.log('⚠️ Returning stale cache as fallback');
      return new Response(
        JSON.stringify(cachedReviews),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
