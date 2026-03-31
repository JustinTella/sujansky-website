import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import PageSectionHeader from '@/components/PageSectionHeader';
import primaryImage from '@/assets/image-asset (5).webp';
import preventativeImage from '@/assets/notttwide.jpg';

function ServiceSectionHeader({ title }: { title: string }) {
  return (
    <div className="max-w-7xl mx-auto mb-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy">{title}</h2>
      <div className="mt-3 h-1 w-16 bg-gold" />
    </div>
  );
}

function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const primaryCareServices = [
    <>
      <strong>Direct communication</strong> by personal phone support after hours and same-day or next-day email support
    </>,
    <>
      <strong>Limited size</strong> that allows for <strong>longer appointments</strong> and expedited scheduling
    </>,
    <>
      <strong>Executive-style</strong> physical with <strong>thorough guidance</strong> through history review, screening data, and follow-up
    </>,
    <>
      <strong>EKG screening</strong> and <strong>concise individualized</strong> body composition evaluation for more tailored counseling
    </>,
    <>
      <strong>Preventive planning</strong>, routine immunizations, travel medicine, and well-woman care as appropriate
    </>,
    <>
      <strong>In-office testing</strong> including urinalysis, rapid strep testing, and tuberculosis screening when indicated
    </>,
    <>
      <strong>Specialist</strong> and <strong>hospital coordination</strong> to support <strong>seamless</strong> transitions in care
    </>,
    <>
      <strong>Home visits</strong> within 10 miles for patients who are unable to travel to the office
    </>,
    <>
      Access to our <strong>Travel Medicine</strong> program (see Additional Services below)
    </>,
  ];

  const wellnessServices = [
    'Everything included in the Primary Care package',
    '__SUBHEAD_AS_WELL_AS__',
    'Polygenic DNA tests and risk scores',
    'Pulmonary function test',
    'Microbiome diagnostic',
    'Complimentary home IV therapy (2x per year)',
  ];

  return (
    <>
      <Header />
      <main className="bg-light-gray pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <PageSectionHeader title="Services" />
        </div>

        <section id="primary-care" className="scroll-mt-24">
          <ServiceSectionHeader title="Primary Care" />
          <div className="max-w-7xl mx-auto mb-24 px-4 sm:px-6 lg:px-8 md:mb-32">
            <div className="grid grid-cols-1 items-start gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-10 border border-gray-300 bg-white p-8 shadow-sm">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Core Offering</p>
                  <h3 className="mb-5 text-3xl font-semibold tracking-tight text-navy">Comprehensive Care</h3>
                  <p className="text-[17px] leading-8 text-foreground/80">
                    Our Primary Care offering reflects the core of Dr. Sujansky&apos;s membership practice: direct communication, longer visits, preventive planning, and close coordination that support more personalized and responsive care.
                  </p>
                </div>
                <div className="overflow-hidden border border-navy/70 bg-white shadow-sm">
                  <img
                    src={primaryImage}
                    alt="Doctor and patient consultation"
                    className="h-72 w-full object-cover md:h-80"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <ServiceCard title="What We Offer" items={primaryCareServices} />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="wellness" className="scroll-mt-24 border-t border-navy/15 bg-[linear-gradient(to_bottom,rgba(20,36,74,0.03),rgba(20,36,74,0)_120px)] pt-16 md:pt-20">
          <ServiceSectionHeader title="Preventative Care" />
          <div className="max-w-7xl mx-auto mb-24 px-4 sm:px-6 lg:px-8 md:mb-32">
            <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6 border border-gray-300 bg-white p-7 shadow-sm">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Advanced Prevention</p>
                  <h3 className="mb-5 text-3xl font-semibold tracking-tight text-navy">A More Proactive Approach</h3>
                  <p className="text-[17px] leading-8 text-foreground/80">
                    Our Preventative Care offering is an enhanced program designed for patients who want to take a proactive approach to their long-term health. It focuses on advanced diagnostics and early detection to help you stay ahead of potential health concerns.
                  </p>
                </div>
                <div className="flex items-center justify-center overflow-hidden border border-navy/70 bg-white shadow-sm mx-auto w-fit">
                  <img
                    src={preventativeImage}
                    alt="Preventative care"
                    className="h-72 w-auto object-cover object-center md:h-80"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <ServiceCard title="What We Offer" items={wellnessServices} />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="additional-services" className="scroll-mt-24 border-t border-navy/15 bg-[linear-gradient(to_bottom,rgba(20,36,74,0.03),rgba(20,36,74,0)_120px)] pt-16 md:pt-20">
          <ServiceSectionHeader title="Additional Services" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-14 scroll-mt-32"
            >
              <div className="grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
                <div className="border border-gray-300 bg-white p-8 shadow-sm">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Travel Support</p>
                  <h3 className="mb-5 text-3xl font-semibold tracking-tight text-navy">Travel Kits</h3>
                  <p className="text-[17px] leading-8 text-foreground/80">
                    Our Travel Medicine program prepares you for international travel with personalized health planning, destination-specific vaccinations, prescription medications, and a curated travel health kit.
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="border border-gray-300 bg-white p-7 shadow-sm">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Additional Care</p>
                    <h3 className="mb-5 text-3xl font-semibold tracking-tight text-navy">On-Demand Nursing Services</h3>
                    <p className="text-[17px] leading-8 text-foreground/80">
                      Additional nursing support can be arranged when extra hands-on care, monitoring, or short-term assistance is needed.
                    </p>
                  </div>
                  <div className="border border-gray-300 bg-white p-7 shadow-sm">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Connected Resources</p>
                    <h3 className="mb-5 text-3xl font-semibold tracking-tight text-navy">Partnerships</h3>
                    <p className="text-[17px] leading-8 text-foreground/80">
                      We can help connect patients with trusted specialists, allied health professionals, and other supportive care partners as needed.
                    </p>
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

export default ServicesPage;
