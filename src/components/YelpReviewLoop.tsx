import { useEffect, useMemo, useRef, useState } from 'react';
import { Star } from 'lucide-react';

type YelpReview = {
  author: string;
  text: string;
  rating: number;
};

const YELP_REVIEWS: YelpReview[] = [
  {
    author: 'Patricia P.',
    rating: 5,
    text:
      'I think Dr. Sujansky is the greatest doctor. She is smart, kind, and caring, and my family has trusted her care for years.',
  },
  {
    author: 'Andrea M.',
    rating: 5,
    text:
      'Dr. Sujansky is the best doctor I have ever been to. She takes the time to listen to your concerns and never makes you feel rushed.',
  },
  {
    author: 'Brendan F.',
    rating: 5,
    text:
      'I have been seeing Dr. Sujansky for years and would not imagine seeing any other doctor. She takes the time to explain conditions clearly and thoughtfully.',
  },
  {
    author: 'Patricia P.',
    rating: 5,
    text:
      'Her practice feels deeply personal and attentive, and that consistency is exactly why I continue to recommend her care.',
  },
];

function YelpReviewLoop() {
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);

  const reviews = useMemo(() => [...YELP_REVIEWS, ...YELP_REVIEWS, ...YELP_REVIEWS], []);

  useEffect(() => {
    let frameId = 0;
    let lastTime = 0;
    const speed = 20;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const track = trackRef.current;
      const halfWidth = track ? track.scrollWidth / 3 : 0;

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
  }, []);

  return (
    <div className="mt-5 w-full min-h-[230px] overflow-hidden">
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max gap-4 pr-4 will-change-transform"
          style={{ transform: `translate3d(${offset}px, 0, 0)` }}
        >
          {reviews.map((review, index) => (
            <article
              key={`${review.author}-${index}`}
              className="flex min-h-[198px] w-[15rem] shrink-0 flex-col border border-gray-200 bg-[#fbfaf6] p-4 text-left shadow-[0_8px_24px_rgba(20,36,74,0.05)]"
            >
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c7421d] text-sm font-semibold text-white">
                    {review.author.charAt(0)}
                  </div>
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
        </div>
      </div>
    </div>
  );
}

export default YelpReviewLoop;
