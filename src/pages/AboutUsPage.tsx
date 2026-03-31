import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import PageSectionHeader from '@/components/PageSectionHeader';
import drPortrait from '@/assets/Rika+in+brown+blouse (1).webp';
import kimPortrait from '@/assets/Kim (1).webp';
import shawnaImage from '@/assets/image-asset (4).webp';
import yelpReviewImage from '@/assets/Screenshot 2026-03-30 022824.png';
import googleReviewImage from '@/assets/Screenshot 2026-03-30 023815.png';
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
  const [marqueeOffset, setMarqueeOffset] = useState(0);
  const marqueeViewportRef = useRef<HTMLDivElement | null>(null);
  const marqueeTrackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement[]>>({});
  const marqueeOffsetRef = useRef(0);

  const teamMembers = [
    { name: 'Ulrike Sujansky', title: 'M.D., FACP', image: drPortrait, cta: 'Meet Dr. Sujansky', linkTo: '/dr-sujansky' },
    { name: 'Shawna Guzman', title: 'Office Manager', image: shawnaImage, cta: 'Learn More' },
    { name: 'Kim J.', title: 'Medical Assistant', image: kimPortrait, cta: 'Learn More' },
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
    { id: 'professionals', label: 'Busy professionals in their 30s and 40s who want direct access and preventive care', highlightName: 'Susan W.' },
    { id: 'families', label: 'Parents and families balancing demanding schedules and long-term wellness', highlightName: 'Edwina T.' },
    { id: 'executives', label: 'Executives, consultants, and business owners seeking more personalized medicine', highlightName: 'Philip G.' },
    { id: 'retirees', label: 'Retirees in their 60s, 70s, and beyond who value continuity and close follow-up', highlightName: 'Margaret R.' },
    { id: 'active', label: 'Athletes and highly active patients focused on optimization and recovery', highlightName: 'Dale B.' },
    { id: 'specialist-care', label: 'Patients navigating specialist care who want strong coordination and advocacy', highlightName: 'Harumi N.' },
  ];

  const selectedRange = clientRanges.find((range) => range.id === selectedRangeId) ?? null;
  const activeTestimonialName = selectedTestimonialName ?? selectedRange?.highlightName ?? null;
  const scrollingTestimonials = [...testimonials, ...testimonials];
  const marqueeStyle = useMemo(
    () => ({
      transform: `translateX(${marqueeOffset}px)`,
      transition: activeTestimonialName ? 'transform 1100ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
    }),
    [activeTestimonialName, marqueeOffset]
  );

  useEffect(() => {
    marqueeOffsetRef.current = marqueeOffset;
  }, [marqueeOffset]);

  useEffect(() => {
    if (activeTestimonialName) return;

    let frameId = 0;
    let lastTime = 0;
    const speed = 24;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const track = marqueeTrackRef.current;
      const halfWidth = track ? track.scrollWidth / 2 : 0;

      let nextOffset = marqueeOffsetRef.current - speed * delta;
      if (halfWidth > 0 && Math.abs(nextOffset) >= halfWidth) {
        nextOffset += halfWidth;
      }

      marqueeOffsetRef.current = nextOffset;
      setMarqueeOffset(nextOffset);
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [activeTestimonialName]);

  useEffect(() => {
    if (!activeTestimonialName) {
      return;
    }

    const viewport = marqueeViewportRef.current;
    const matches = cardRefs.current[activeTestimonialName];
    if (!viewport || !matches?.length) return;

    const viewportCenter = viewport.clientWidth / 2;
    const targetCard = matches.reduce((closest, card) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2 + marqueeOffsetRef.current;
      const closestCenter = closest.offsetLeft + closest.offsetWidth / 2 + marqueeOffsetRef.current;
      return Math.abs(cardCenter - viewportCenter) < Math.abs(closestCenter - viewportCenter) ? card : closest;
    }, matches[0]);

    const desiredOffset = viewportCenter - (targetCard.offsetLeft + targetCard.offsetWidth / 2);
    marqueeOffsetRef.current = desiredOffset;
    setMarqueeOffset(desiredOffset);
  }, [activeTestimonialName]);

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
                    <img src={member.image} alt={`${member.name}, ${member.title}`} className={`w-full object-cover object-top ${index === 0 ? 'h-[350px]' : 'h-72'}`} />
                  </div>
                  <p className="font-bold text-navy text-lg mb-0.5">{member.name}</p>
                  <p className="text-sm text-steely-blue font-medium mb-4">{member.title}</p>
                  {member.linkTo ? (
                    <Button asChild className="bg-navy text-white hover:bg-steely-blue transition-colors duration-200 active:scale-[0.98] shadow-sm px-6 py-2 text-sm rounded-none uppercase tracking-wide">
                      <Link to={member.linkTo}>{member.cta}</Link>
                    </Button>
                  ) : (
                    <div className="h-10" aria-hidden="true" />
                  )}
                </motion.div>
              ))}
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
              <div ref={marqueeViewportRef} className="overflow-hidden">
                <div
                  ref={marqueeTrackRef}
                  className="flex w-max gap-6 pr-6"
                  style={marqueeStyle}
                >
                {scrollingTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.name}-${index}`}
                    className="w-[20rem] shrink-0"
                    ref={(node) => {
                      if (!node) return;
                      if (!cardRefs.current[testimonial.name]) {
                        cardRefs.current[testimonial.name] = [];
                      }
                      cardRefs.current[testimonial.name][index < testimonials.length ? 0 : 1] = node;
                    }}
                  >
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
                      }}
                      className={
                        activeTestimonialName === testimonial.name
                          ? 'border-gold bg-[#fffaf0] shadow-[0_16px_40px_rgba(191,150,70,0.22)] cursor-pointer'
                          : 'cursor-pointer hover:border-navy/40'
                      }
                    />
                  </div>
                ))}
                </div>
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
                <h3 className="text-2xl font-bold tracking-tight text-navy">Our Patients Range From</h3>
                <div className="mt-3 h-1 w-16 bg-gold" />
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-300">
                  <div className="mb-2 text-[1.45rem] font-semibold tracking-tight" aria-label="Google">
                    <span style={{ color: '#4285F4' }}>G</span>
                    <span style={{ color: '#EA4335' }}>o</span>
                    <span style={{ color: '#FBBC05' }}>o</span>
                    <span style={{ color: '#4285F4' }}>g</span>
                    <span style={{ color: '#34A853' }}>l</span>
                    <span style={{ color: '#EA4335' }}>e</span>
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-lg font-bold text-navy">4.5</span>
                    <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}</div>
                  </div>
                  <a href="https://www.google.com/maps/place/Ulrike+Sujansky,+MD/@37.568004,-122.3289013,796m/data=!3m1!1e3!4m8!3m7!1s0x808f9e76eab22fc9:0x16272bd44374ea91!8m2!3d37.568004!4d-122.326321!9m1!1b1!16s%2Fg%2F11bv33mb38?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 bg-navy text-white font-medium hover:bg-steely-blue transition-colors duration-200 w-full text-sm uppercase tracking-wide active:scale-[0.98]">Review Us on Google</a>
                  <div className="mt-5 flex h-[220px] items-center justify-center overflow-hidden border border-gray-200 bg-white shadow-sm">
                    <img src={googleReviewImage} alt="Google review screenshot" className="max-h-full w-auto object-contain" />
                  </div>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-300">
                  <div className="mb-2 flex h-10 items-center justify-center" aria-label="Yelp">
                    <img src={yelpLogoImage} alt="Yelp" className="h-full w-auto object-contain" />
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-lg font-bold text-navy">4.3</span>
                    <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}</div>
                  </div>
                  <a href="https://www.yelp.com/biz/ulrike-sujansky-md-san-mateo?osq=Ulrike+Sujansky+MD" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 bg-navy text-white font-medium hover:bg-steely-blue transition-colors duration-200 w-full text-sm uppercase tracking-wide active:scale-[0.98]">Review Us on Yelp</a>
                  <div className="mt-5 flex h-[220px] items-center justify-center overflow-hidden border border-gray-200 bg-white shadow-sm">
                    <img src={yelpReviewImage} alt="Yelp review screenshot" className="max-h-full w-auto object-contain" />
                  </div>
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
