import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    const placeId = Deno.env.get('GOOGLE_PLACE_ID');

    if (!apiKey || !placeId) {
      throw new Error('Missing Google API credentials');
    }

    // Fetch place details including reviews
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=it`
    );

    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google API error: ${data.status}`);
    }

    // Transform Google reviews to our format
    const reviews = data.result.reviews?.map((review: any, index: number) => ({
      id: `google-${index + 1}`,
      name: review.author_name,
      role: "Cliente",
      location: "Assemini, CA",
      rating: review.rating,
      text: review.text,
      date: new Date(review.time * 1000).toLocaleDateString('it-IT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      avatar: review.profile_photo_url || `https://api.dicebear.com/7.x/initials/svg?seed=${review.author_name}`,
      service: "Servizio Google My Business"
    })) || [];

    return new Response(
      JSON.stringify({
        reviews,
        aggregateRating: data.result.rating,
        totalReviews: data.result.user_ratings_total
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
