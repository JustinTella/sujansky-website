import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import PageSectionHeader from '@/components/PageSectionHeader';
import GoogleReviewLoop from '@/components/GoogleReviewLoop';
import YelpReviewLoop from '@/components/YelpReviewLoop';
import drPortrait from '@/assets/Rika+in+brown+blouse (1).webp';
import kimPortrait from '@/assets/Kim (1).webp';
import shawnaImage from '@/assets/image-asset (4).webp';
import yelpLogoImage from '@/assets/Yelp_Logo.svg.png';

type Testimonial = {
  quote: string;
  name: string;
  profession: string;
  yearJoined: string;
  rangeId: string;
};

function AboutUsPage() {
  const [selectedRangeId, setSelectedRangeId] = useState<string | null>(null);
  const [selectedTestimonialName, setSelectedTestimonialName] = useState<string | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const teamMembers = [
    { name: 'Ulrike Sujansky', title: 'M.D., FACP', image: drPortrait },
    { name: 'Shawna G.', title: 'Office Manager', image: shawnaImage },
    { name: 'Kim J.', title: 'Medical Assistant', image: kimPortrait },
  ];

  const testimonials: Testimonial[] = [
    { quote: 'Dr. Sujansky has served our family with candor, realistic individualized guidance with a comprehensive focus on our long-term health for over a decade. Her staff is professional and congenial.', name: 'Susan W.', profession: 'Corporate Attorney', yearJoined: '2011', rangeId: 'professionals' },
    { quote: 'Professional with great recommendations to address present and future needs.', name: 'David J.', profession: 'Wealth Advisor', yearJoined: '2019', rangeId: 'executives' },
    { quote: 'Personally encouraged with the nature of our interactions and communications. I describe her as "a presence"; she is authentic. Her style is straightforward with the focus on the patient, not on the clock nor on the next patient.', name: 'William H.', profession: 'Principal Architect', yearJoined: '2016', rangeId: 'professionals' },
    { quote: 'I was pleased to update my medications with Dr. Sujansky. It is a reassuring feeling when your blood work does not show anything shocking. Dr. Sujansky is on top of my health issues.', name: 'Kathleen N.', profession: 'Retired Hospital Administrator', yearJoined: '2018', rangeId: 'retirees' },
    { quote: 'Dr. Sujansky is the best of the best. She really listens, she is realistic while also being positive, and she really cares. She does not rush through your appointment and makes you feel seen and heard, which is rare in the medical field.', name: 'Michaela B.', profession: 'UX Design Director', yearJoined: '2020', rangeId: 'professionals' },
    { quote: 'Dr. Sujansky is an excellent physician and a beautiful human being. She has been my physician for over 20 years. I moved from San Mateo to San Jose, but I continue to travel to San Mateo to have her as my wife\'s and my physician.', name: 'Jose (Joe) A.', profession: 'Semiconductor Engineer', yearJoined: '2004', rangeId: 'families' },
    { quote: 'Have never spent so much time with a doctor. I felt that I was heard and cared for.', name: 'Joan S.', profession: 'Retired Estate Planning Attorney', yearJoined: '2021', rangeId: 'retirees' },
    { quote: 'A checkup and EKG for my wife went very well. We also had a great discussion on her various prescriptions.', name: 'Charles T.', profession: 'Small Business Owner', yearJoined: '2017', rangeId: 'families' },
    { quote: 'Dr. Sujansky is very thorough and conscientious. She called me to say we had not met in a while and wanted to do a checkup, even though I was not due for a complete physical until after the first of the year.', name: 'Linda Z.', profession: 'Biotech Executive', yearJoined: '2013', rangeId: 'executives' },
    { quote: 'My first visit was better than I expected. My previous doctor was awesome, and Dr. Sujansky upped the game.', name: 'Philip G.', profession: 'Product Strategy Consultant', yearJoined: '2022', rangeId: 'executives' },
    { quote: 'My visit was very professional. Everything worked according to schedule. I feel very comfortable with Dr. Sujansky. She answers all my questions and I leave the office very satisfied and feeling extremely healthy.', name: 'Margaret R.', profession: 'Retired Nurse', yearJoined: '2015', rangeId: 'retirees' },
    { quote: 'Always easy to get an appointment on short notice. I always feel like Dr. S. provides a lot of time and care with every visit.', name: 'Michael R.', profession: 'Operations Director', yearJoined: '2018', rangeId: 'professionals' },
    { quote: 'Dr. Sujansky is a true professional. She is kind, compassionate, and listens without judgment. She works diligently to serve her clients\' needs. Moving to concierge care with Dr. Sujansky was by far the best decision I made for my family.', name: 'Edwina T.', profession: 'Chief People Officer', yearJoined: '2021', rangeId: 'families' },
    { quote: 'A caring, personal experience that is also efficient and convenient to my location.', name: 'Robert P.', profession: 'Commercial Real Estate Broker', yearJoined: '2019', rangeId: 'executives' },
    { quote: 'I usually have a pleasant visit with Dr. Sujansky. I have been her patient for about 12 years now. She is a caring person and does the best for her patients.', name: 'Donna R.', profession: 'Retired CPA', yearJoined: '2012', rangeId: 'retirees' },
    { quote: 'Dr. Sujansky has been precisely aware of the needs of my husband and me while treating an unknown virus. It was first-rate care and truly appreciated.', name: 'Jane J.', profession: 'Private Wealth Manager', yearJoined: '2016', rangeId: 'families' },
    { quote: 'Dr. Sujansky is great. Very engaged during our appointments and knowledgeable about all my healthcare maintenance issues. Highly recommend Dr. Sujansky for personalized healthcare.', name: 'Vicky H.', profession: 'Program Manager', yearJoined: '2020', rangeId: 'professionals' },
    { quote: 'Dr. Sujansky takes the time to listen to patients and give proper advice. She is very kind.', name: 'Dale B.', profession: 'Retired Venture Capital Partner', yearJoined: '2017', rangeId: 'active' },
    { quote: 'I am very happy to get answers to my concerns right away every time. The office visit always goes smoothly. No complaints.', name: 'Harumi N.', profession: 'Luxury Residential Designer', yearJoined: '2019', rangeId: 'specialist-care' },
    { quote: 'The office staff are sweet and friendly, and Dr. Sujansky is the best.', name: 'Lily C.', profession: 'Independent College Consultant', yearJoined: '2022', rangeId: 'families' },
  ];

  const clientRanges = [
    {
      id: 'professionals',
      label: 'Busy professionals who want direct access, preventive care, and more time with their physician',
      highlightName: 'Susan W.',
    },
    {
      id: 'families',
      label: 'Families and couples balancing long-term wellness, scheduling demands, and coordinated care',
      highlightName: 'Edwina T.',
    },
    {
      id: 'executives',
      label: 'Executives, consultants, and business owners seeking a more personalized, concierge-style experience',
      highlightName: 'Philip G.',
    },
    {
      id: 'retirees',
      label: 'Retirees who value continuity, close follow-up, thoughtful guidance, and lasting physician relationships',
      highlightName: 'Margaret R.',
    },
  ];

  const selectedRange = clientRanges.find((range) => range.id === selectedRangeId) ?? null;
  const activeTestimonialName = selectedTestimonialName ?? selectedRange?.highlightName ?? null;
  const visibleCount = 3;
  const visibleTestimonials = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, i) =>
        testimonials[(testimonialIndex + i + testimonials.length) % testimonials.length]
      ),
    [testimonialIndex, testimonials]
  );
  const highlightedIndex = activeTestimonialName
    ? testimonials.findIndex((t) => t.name === activeTestimonialName)
    : -1;
  const jumpToTestimonial = (name: string | null) => {
    if (!name) return;
    const idx = testimonials.findIndex((t) => t.name === name);
    if (idx === -1) return;
    const startIndex = (idx - 1 + testimonials.length) % testimonials.length;
    setTestimonialIndex(startIndex);
  };

  return (
    <>
      <Header />
      <main className="bg-light-gray">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageSectionHeader title="About Us" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-end">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`text-center flex flex-col items-center ${index === 0 ? 'md:scale-105 z-10' : ''}`}
                >
                  <div
                    className="mb-4 w-full overflow-hidden border border-gray-300 bg-white p-2 shadow-[0_8px_24px_rgba(20,36,74,0.06)]"
                  >
                    <img src={member.image} alt={`${member.name}, ${member.title}`} className="h-[350px] w-full object-cover object-top" />
                  </div>
                  <p className="font-bold text-navy text-lg mb-0.5">{member.name}</p>
                  <p className="text-sm text-steely-blue font-medium">{member.title}</p>
                </motion.div>
              ))}
            </div>
            <div className="mb-12 text-center">
              <Button asChild className="rounded-none bg-navy px-10 py-6 text-base font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition-colors duration-200 hover:bg-steely-blue active:scale-[0.98]">
                <Link to="/team">Learn More About the Practice</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="pb-12 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-8 md:mb-10"
            >
              <p className="text-lg text-navy font-medium mb-2">Proud to highlight our</p>
              <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">Patient Testimonials</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12 overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="hidden h-10 w-10 items-center justify-center border border-navy/30 text-navy transition-colors duration-200 hover:bg-navy hover:text-white md:flex"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex flex-1 justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={testimonialIndex}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="flex justify-center gap-6"
                    >
                      {visibleTestimonials.map((testimonial) => (
                        <div key={testimonial.name} className="w-[20rem] shrink-0">
                          <TestimonialCard
                            quote={testimonial.quote}
                            name={testimonial.name}
                            profession={testimonial.profession}
                            yearJoined={testimonial.yearJoined}
                            onClick={() => {
                              if (activeTestimonialName === testimonial.name) {
                                setSelectedRangeId(null);
                                setSelectedTestimonialName(null);
                                return;
                              }

                              setSelectedRangeId(null);
                              setSelectedTestimonialName(testimonial.name);
                              jumpToTestimonial(testimonial.name);
                            }}
                            className={
                              activeTestimonialName === testimonial.name
                                ? 'border-gold bg-[#fffaf0] shadow-[0_16px_40px_rgba(191,150,70,0.22)] cursor-pointer'
                                : 'cursor-pointer hover:border-navy/40'
                            }
                          />
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <button
                  type="button"
                  onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                  className="hidden h-10 w-10 items-center justify-center border border-navy/30 text-navy transition-colors duration-200 hover:bg-navy hover:text-white md:flex"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12 border border-gray-300 bg-white p-8 shadow-sm"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold tracking-tight text-navy">Who Are Our Patients</h3>
                <div className="mt-3 h-1 w-16 bg-gold" />
                <p className="mt-4 text-[15px] leading-7 text-foreground/75">
                  Click the filter that best reflects you and hear from current patients with similar lifestyles and needs.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {clientRanges.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      if (selectedRangeId === item.id) {
                        setSelectedRangeId(null);
                        setSelectedTestimonialName(null);
                        return;
                      }

                      setSelectedRangeId(item.id);
                      setSelectedTestimonialName(item.highlightName);
                      jumpToTestimonial(item.highlightName);
                    }}
                    className={`border px-5 py-4 text-left transition-all duration-200 ${
                      selectedRange?.id === item.id
                        ? 'border-gold bg-[#fbf6ea] shadow-[0_10px_24px_rgba(191,150,70,0.16)]'
                        : 'border-gray-200 bg-light-gray hover:border-navy/30 hover:bg-white'
                    }`}
                  >
                    <p className="text-[15px] leading-relaxed text-foreground/80">{item.label}</p>
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 md:p-10 shadow-sm border border-gray-300"
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4 tracking-tight">Find More Reviews On</h3>
                <div className="w-12 h-1 bg-gold mx-auto" />
              </div>
              <div className="mx-auto flex max-w-4xl flex-col gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-300">
                  <div className="mb-2 text-[1.45rem] font-semibold tracking-tight" aria-label="Google">
                    <span style={{ color: '#4285F4' }}>G</span>
                    <span style={{ color: '#EA4335' }}>o</span>
                    <span style={{ color: '#FBBC05' }}>o</span>
                    <span style={{ color: '#4285F4' }}>g</span>
                    <span style={{ color: '#34A853' }}>l</span>
                    <span style={{ color: '#EA4335' }}>e</span>
                  </div>
                  <div className="mb-5 flex items-center gap-2">
                    <span className="text-lg font-bold text-navy">4.5</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                  <div className="w-full">
                    <GoogleReviewLoop />
                  </div>
                  <a href="https://www.google.com/maps/place/Ulrike+Sujansky,+MD/@37.568004,-122.3289013,796m/data=!3m1!1e3!4m8!3m7!1s0x808f9e76eab22fc9:0x16272bd44374ea91!8m2!3d37.568004!4d-122.326321!9m1!1b1!16s%2Fg%2F11bv33mb38?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center px-6 py-2.5 bg-navy text-white font-medium hover:bg-steely-blue transition-colors duration-200 w-full text-sm uppercase tracking-wide active:scale-[0.98]">Review Us on Google</a>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-300">
                  <div className="mb-2 flex h-10 items-center justify-center" aria-label="Yelp">
                    <img src={yelpLogoImage} alt="Yelp" className="h-full w-auto object-contain" />
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-lg font-bold text-navy">4.3</span>
                    <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}</div>
                  </div>
                  <div className="w-full">
                    <YelpReviewLoop />
                  </div>
                  <a href="https://www.yelp.com/biz/ulrike-sujansky-md-san-mateo?osq=Ulrike+Sujansky+MD" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center px-6 py-2.5 bg-navy text-white font-medium hover:bg-steely-blue transition-colors duration-200 w-full text-sm uppercase tracking-wide active:scale-[0.98]">Review Us on Yelp</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AboutUsPage;
