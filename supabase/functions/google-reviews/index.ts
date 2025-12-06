import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Cache in memoria
let cachedReviews: any = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minuti

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
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const now = Date.now();
    
    // Controlla se abbiamo dati in cache validi
    if (cachedReviews && (now - cacheTimestamp) < CACHE_DURATION) {
      console.log('✅ Returning cached reviews (age:', Math.round((now - cacheTimestamp) / 1000), 'seconds)');
      return new Response(
        JSON.stringify(cachedReviews),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
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

    // Transform Google reviews to our format
    const reviews = data.result.reviews?.map((review: any, index: number) => ({
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
