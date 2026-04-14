import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

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
  const [index, setIndex] = useState(0);
  const reviews = useMemo(() => YELP_REVIEWS, []);
  const visibleCount = 3;
  const visibleReviews = useMemo(
    () =>
      reviews.length
        ? Array.from({ length: visibleCount }, (_, i) => reviews[(index + i) % reviews.length])
        : [],
    [reviews, index]
  );

  return (
    <div className="mt-5 w-full min-h-[230px]">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
          className="hidden h-9 w-9 items-center justify-center border border-navy/30 text-navy transition-colors duration-200 hover:bg-navy hover:text-white md:flex"
          aria-label="Previous Yelp review"
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
                  key={`${review.author}-${review.text}`}
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
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev + 1) % reviews.length)}
          className="hidden h-9 w-9 items-center justify-center border border-navy/30 text-navy transition-colors duration-200 hover:bg-navy hover:text-white md:flex"
          aria-label="Next Yelp review"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default YelpReviewLoop;
