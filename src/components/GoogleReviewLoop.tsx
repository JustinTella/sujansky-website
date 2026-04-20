import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

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
const LIVE_SITE_FUNCTION = 'https://sujansky.netlify.app/.netlify/functions/google-reviews';
const FALLBACK_GOOGLE_REVIEWS: GoogleReviewResponse = {
  placeName: 'Ulrike Sujansky, MD',
  rating: 4.5,
  userRatingCount: 16,
  reviews: [
    {
      author: 'rak s',
      profilePhoto:
        'https://lh3.googleusercontent.com/a-/ALV-UjXme_6VzxwffcJTbtnQ5yq7pxKeo0TIJiASyc_A-6-27KBoYv06jw=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relativeTime: '5 years ago',
      publishTime: '2020-10-01T17:28:50.457877Z',
      text:
        'All I can say, is Dr. Sujansky is one in a million. She provides my disabled brother with excellent care. She and her office manager Shauna are incredibly patient and kind to him.',
    },
    {
      author: 'Lindy Hewitt',
      profilePhoto:
        'https://lh3.googleusercontent.com/a/ACg8ocJmTC3462kBSSzaEjQ5FfXpTYp64wh7ZABRbBcCu7UYOCPdLQ=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relativeTime: '5 years ago',
      publishTime: '2020-08-28T16:16:52.602849Z',
      text:
        'My first visit with Dr. Sujansky was great. She and her staff made me feel that they had all the time in the world to answer my questions. She is very personable.',
    },
    {
      author: 'Nanci Nishimura',
      profilePhoto:
        'https://lh3.googleusercontent.com/a/ACg8ocJ8SxuaUtLHmAVD64Y5TLOLMZ--LwCKI9m7WYJQmEnpvJWiBw=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relativeTime: '6 years ago',
      publishTime: '2020-03-04T19:56:15.268716Z',
      text: 'Very attentive and responsive.',
    },
    {
      author: 'David Jackson',
      profilePhoto:
        'https://lh3.googleusercontent.com/a/ACg8ocIkwQNjax4ELkkS16GjFNw56EiNPX2jL5NbnnmGEKPkNxeKMw=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relativeTime: '6 years ago',
      publishTime: '2019-09-17T20:23:10.487599Z',
      text:
        'I am a new patient of Dr. Sujansky and have found her extremely accessible for my needs. She has a caring attitude and is very competent. Highly recommended.',
    },
  ],
};

function GoogleReviewLoop() {
  const [data, setData] = useState<GoogleReviewResponse | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function loadReviews() {
      try {
        const isLocal =
          window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
        const baseUrl = isLocal ? LIVE_SITE_FUNCTION : '/.netlify/functions/google-reviews';
        const response = await fetch(`${baseUrl}?placeId=${PLACE_ID}`);
        const payload = (await response.json()) as GoogleReviewResponse | { error?: string };

        if (!response.ok || 'error' in payload) {
          throw new Error('google-review-load-failed');
        }

        if (!cancelled) {
          setData(payload);
        }
      } catch {
        if (!cancelled) {
          setData(FALLBACK_GOOGLE_REVIEWS);
        }
      }
    }

    loadReviews();
    return () => {
      cancelled = true;
    };
  }, []);

  const reviews = useMemo(() => data?.reviews ?? [], [data]);
  const visibleCount = 3;
  const visibleReviews = useMemo(
    () =>
      reviews.length
        ? Array.from({ length: visibleCount }, (_, i) => reviews[(index + i) % reviews.length])
        : [],
    [reviews, index]
  );

  if (!data) {
    return (
      <div className="mt-5 border border-gray-200 bg-white p-5 text-left text-sm leading-7 text-foreground/70 shadow-sm">
        Loading live Google reviews...
      </div>
    );
  }

  return (
    <div className="mt-5 w-full">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
          className="hidden h-9 w-9 items-center justify-center border border-navy/30 text-navy transition-colors duration-200 hover:bg-navy hover:text-white md:flex"
          aria-label="Previous Google review"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex flex-1 justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center gap-4"
            >
              {visibleReviews.map((review) => (
                <article
                  key={`${review.author}-${review.publishTime ?? review.text}`}
                  className="flex min-h-[198px] w-[15rem] shrink-0 flex-col border border-gray-200 bg-[#fbfaf6] p-4 text-left shadow-[0_8px_24px_rgba(20,36,74,0.05)]"
                >
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      {review.profilePhoto ? (
                        <img
                          src={review.profilePhoto}
                          alt={review.author}
                          referrerPolicy="no-referrer"
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 text-sm font-semibold text-navy">
                          {review.author.charAt(0)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-navy">{review.author}</p>
                        <div className="mt-0.5 flex items-center gap-2">
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
                        </div>
                      </div>
                    </div>
                    <p className="line-clamp-5 text-[14px] leading-6.5 text-navy/82">{review.text}</p>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev + 1) % reviews.length)}
          className="hidden h-9 w-9 items-center justify-center border border-navy/30 text-navy transition-colors duration-200 hover:bg-navy hover:text-white md:flex"
          aria-label="Next Google review"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default GoogleReviewLoop;
