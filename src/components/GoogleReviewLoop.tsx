import { useEffect, useMemo, useRef, useState } from 'react';
import { Star } from 'lucide-react';

type GoogleReview = {
  author: string;
  profilePhoto?: string;
  rating: number;
  relativeTime?: string;
  publishTime?: string;
  text: string;
};

type GoogleReviewResponse = {
  placeName: string;
  rating: number | null;
  userRatingCount: number | null;
  reviews: GoogleReview[];
};

const PLACE_ID = 'ChIJyS-y6naej4ARkep0Q9QrJxY';

function GoogleReviewLoop() {
  const [data, setData] = useState<GoogleReviewResponse | null>(null);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);

  useEffect(() => {
    let cancelled = false;

    async function loadReviews() {
      try {
        const response = await fetch(`/.netlify/functions/google-reviews?placeId=${PLACE_ID}`);
        const payload = (await response.json()) as GoogleReviewResponse | { error?: string };

        if (!response.ok || 'error' in payload) {
          throw new Error('google-review-load-failed');
        }

        if (!cancelled) {
          setData(payload);
        }
      } catch {
        if (!cancelled) {
          setError(true);
        }
      }
    }

    loadReviews();
    return () => {
      cancelled = true;
    };
  }, []);

  const reviews = useMemo(() => {
    if (!data?.reviews?.length) return [];
    return [...data.reviews, ...data.reviews];
  }, [data]);

  useEffect(() => {
    if (!reviews.length) return;

    let frameId = 0;
    let lastTime = 0;
    const speed = 18;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const track = trackRef.current;
      const halfWidth = track ? track.scrollWidth / 2 : 0;

      let nextOffset = offsetRef.current - speed * delta;
      if (halfWidth > 0 && Math.abs(nextOffset) >= halfWidth) {
        nextOffset += halfWidth;
      }

      offsetRef.current = nextOffset;
      setOffset(nextOffset);
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [reviews.length]);

  if (error) {
    return (
      <div className="mt-5 border border-gray-200 bg-white p-5 text-left text-sm leading-7 text-foreground/70 shadow-sm">
        Live Google reviews will appear here once the Google Places API key is added to your live site environment.
      </div>
    );
  }

  if (!data) {
    return (
      <div className="mt-5 border border-gray-200 bg-white p-5 text-left text-sm leading-7 text-foreground/70 shadow-sm">
        Loading live Google reviews...
      </div>
    );
  }

  return (
    <div className="mt-5 border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-gray-100 pb-3">
        <div className="min-w-0 text-left">
          <p className="truncate text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            Live Google Reviews
          </p>
          <p className="truncate text-sm text-navy/70">{data.placeName}</p>
        </div>
        <div className="shrink-0 text-right">
          <div className="flex items-center justify-end gap-2">
            <span className="text-lg font-bold text-navy">{data.rating?.toFixed(1) ?? '—'}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
          </div>
          {data.userRatingCount ? (
            <p className="text-xs text-foreground/55">{data.userRatingCount} Google ratings</p>
          ) : null}
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max gap-4 pr-4"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {reviews.map((review, index) => (
            <article
              key={`${review.author}-${index}`}
              className="flex min-h-[205px] w-[19rem] shrink-0 flex-col justify-between border border-gray-200 bg-[#fbfaf6] p-5 text-left"
            >
              <div>
                <div className="mb-3 flex items-center gap-3">
                  {review.profilePhoto ? (
                    <img
                      src={review.profilePhoto}
                      alt={review.author}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 text-sm font-semibold text-navy">
                      {review.author.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-navy">{review.author}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3.5 w-3.5 ${
                              i < review.rating ? 'fill-gold text-gold' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      {review.relativeTime ? (
                        <span className="text-xs text-foreground/55">{review.relativeTime}</span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <p className="line-clamp-6 text-[15px] leading-7 text-navy/82">{review.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GoogleReviewLoop;
