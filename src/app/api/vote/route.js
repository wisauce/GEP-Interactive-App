import { Redis } from '@upstash/redis';

// Initialize Upstash Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body || !body.artworkName) {
      return new Response(JSON.stringify({ message: 'Artwork name is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Increment vote count
    await redis.incr(body.artworkName);

    return new Response(JSON.stringify({ message: 'Vote recorded successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error recording vote:', error);
    return new Response(JSON.stringify({ message: 'Failed to record vote' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
