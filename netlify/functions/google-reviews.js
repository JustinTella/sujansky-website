const DEFAULT_PLACE_ID = 'ChIJyS-y6naej4ARkep0Q9QrJxY';
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export async function handler(event) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      headers: DEFAULT_HEADERS,
      body: JSON.stringify({ error: 'missing-google-places-api-key' }),
    };
  }

  const placeId = event.queryStringParameters?.placeId || DEFAULT_PLACE_ID;
  const endpoint = `https://places.googleapis.com/v1/places/${placeId}?languageCode=en`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews',
      },
    });

    const data = await response.json().catch(() => null);

    if (!response.ok || !data) {
      return {
        statusCode: response.status || 500,
        headers: DEFAULT_HEADERS,
        body: JSON.stringify({
          error: 'google-places-request-failed',
          details: data,
        }),
      };
    }

    const reviews = (data.reviews || [])
      .map((review) => ({
        author: review.authorAttribution?.displayName || 'Google reviewer',
        profilePhoto: review.authorAttribution?.photoUri || '',
        rating: review.rating || 0,
        relativeTime: review.relativePublishTimeDescription || '',
        publishTime: review.publishTime || '',
        text:
          review.originalText?.text ||
          review.text?.text ||
          '',
      }))
      .filter((review) => review.rating >= 4 && review.text)
      .sort((a, b) => {
        const aTime = new Date(a.publishTime || 0).getTime();
        const bTime = new Date(b.publishTime || 0).getTime();
        return bTime - aTime;
      });

    return {
      statusCode: 200,
      headers: {
        ...DEFAULT_HEADERS,
        'Cache-Control': 'public, max-age=1800',
      },
      body: JSON.stringify({
        placeName: data.displayName?.text || 'Google Reviews',
        rating: data.rating || null,
        userRatingCount: data.userRatingCount || null,
        reviews,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: DEFAULT_HEADERS,
      body: JSON.stringify({
        error: 'google-places-fetch-error',
        message: error instanceof Error ? error.message : 'unknown-error',
      }),
    };
  }
}
