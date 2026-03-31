import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import PageSectionHeader from '@/components/PageSectionHeader';

function TestimonialsPage() {
  const placeholderTestimonials = [
    { quote: 'The level of care and attention I receive is unmatched. Dr. Sujansky takes the time to really understand my health concerns.', name: 'Michael Chen', profession: 'Software Engineer', yearJoined: '2018' },
    { quote: 'Having direct access to my doctor has been life-changing. No more waiting weeks for appointments or feeling rushed during visits.', name: 'Patricia Martinez', profession: 'Retired Teacher', yearJoined: '2015' },
    { quote: 'The preventative care approach has helped me stay healthy and catch potential issues early. Worth every penny.', name: 'David Thompson', profession: 'Business Owner', yearJoined: '2019' },
    { quote: 'Dr. Sujansky coordinated my care seamlessly when I needed specialist consultations. She truly advocates for her patients.', name: 'Jennifer Lee', profession: 'Marketing Director', yearJoined: '2017' },
    { quote: 'The travel medicine program prepared me perfectly for my trip to Southeast Asia. I felt confident and protected.', name: 'Robert Anderson', profession: 'Consultant', yearJoined: '2020' },
    { quote: 'As an athlete, the wellness program with advanced diagnostics helps me optimize my performance and recovery.', name: 'Sarah Kim', profession: 'Professional Athlete', yearJoined: '2021' }
  ];

  return (
    <>
      <Header />
      <main className="bg-light-gray min-h-screen pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <PageSectionHeader title="Patient Testimonials" />

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-base text-center text-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Our patients come from all walks of life — busy professionals, growing families, active retirees, and health-conscious young adults. Here's what they have to say.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-12">
            <div className="bg-navy p-8 md:p-10 shadow-sm border border-steely-blue/30 relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-24 h-24 text-white/5 rotate-180" />
              <blockquote className="text-white text-xl md:text-2xl italic leading-relaxed mb-8 relative z-10 max-w-4xl font-light">
                "Dr. Sujansky has served our family with candor, realistic individualized guidance with a comprehensive focus on our long term health for over a decade. Her staff is professional and congenial."
              </blockquote>
              <div className="flex items-center gap-4 relative z-10 border-t border-steely-blue/30 pt-4">
                <div className="w-12 h-12 bg-gold flex items-center justify-center text-navy font-bold text-xl shadow-sm">S</div>
                <div>
                  <p className="text-gold font-bold text-base">Susan W.</p>
                  <p className="text-white/80 text-sm">Lawyer • Joined in 2011</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placeholderTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white p-8 md:p-10 shadow-sm border border-gray-300">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 tracking-tight">Find More Reviews On</h2>
              <div className="w-12 h-1 bg-gold mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-300">
                <div className="w-16 h-16 bg-white flex items-center justify-center shadow-sm border border-gray-200 mb-4">
                  <span className="text-3xl font-bold" style={{ color: '#4285F4' }}>G</span>
                </div>
                <h3 className="font-bold text-navy text-xl mb-2">Google</h3>
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-lg font-bold text-navy">4.9</span>
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}</div>
                </div>
                <a href="https://www.google.com/maps/place/Ulrike+Sujansky,+MD/@37.568004,-122.3289013,796m/data=!3m1!1e3!4m8!3m7!1s0x808f9e76eab22fc9:0x16272bd44374ea91!8m2!3d37.568004!4d-122.326321!9m1!1b1!16s%2Fg%2F11bv33mb38?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 bg-navy text-white font-medium hover:bg-steely-blue transition-colors duration-200 w-full text-sm uppercase tracking-wide">Review us on Google</a>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-300">
                <div className="w-16 h-16 flex items-center justify-center shadow-sm mb-4" style={{ backgroundColor: '#FF1A1A' }}>
                  <span className="text-3xl font-bold text-white">Y</span>
                </div>
                <h3 className="font-bold text-navy text-xl mb-2">Yelp</h3>
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-lg font-bold text-navy">4.8</span>
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}</div>
                </div>
                <a href="https://www.yelp.com/biz/ulrike-sujansky-md-san-mateo?osq=Ulrike+Sujansky+MD" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 border border-navy text-navy font-medium hover:bg-navy hover:text-white transition-colors duration-200 w-full text-sm uppercase tracking-wide">View Yelp Reviews</a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-navy text-xl mb-6 flex items-center gap-3 border-b border-gray-200 pb-2">
                Recent Google Reviews
                <span className="text-xs font-medium text-steely-blue bg-steely-blue/10 px-3 py-1 uppercase tracking-wide">Verified Patients</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { initials: 'JR', name: 'James R.', time: '2 weeks ago', color: 'bg-steely-blue', text: '"Exceptional care and attention. Dr. Sujansky is thorough, knowledgeable, and genuinely cares about her patients\' wellbeing."' },
                  { initials: 'MG', name: 'Maria G.', time: '1 month ago', color: 'bg-gold', text: '"The best medical experience I\'ve had. Same-day appointments, no rushing, and a doctor who actually listens."' },
                  { initials: 'TB', name: 'Thomas B.', time: '3 months ago', color: 'bg-navy', text: '"Worth every penny. The peace of mind knowing I can reach my doctor directly is invaluable."' }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-6 shadow-sm border border-gray-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 ${review.color} text-white flex items-center justify-center font-bold text-sm`}>{review.initials}</div>
                      <div>
                        <p className="font-bold text-navy text-sm">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />)}</div>
                    <p className="text-sm text-foreground leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TestimonialsPage;
