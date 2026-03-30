import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import PageSectionHeader from '@/components/PageSectionHeader';
import primaryImage from '@/assets/image-asset (5).webp';
import preventativeImage from '@/assets/this one.webp';
import travelImage from '@/assets/backround.jpg';

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

  const conciergeServices = [
    'Annual Physical Examinations',
    'Consultations including examination and management as needed throughout the year',
    'Detailed illness and disease prevention planning',
    'Comprehensive liaison and coordination of inpatient, specialty, and convalescent care',
    'Prompt personal communication via telephone and/or email',
    '24 hour coverage by your physician or on-call associate in the same practice',
    'Annual flu vaccine',
    'Annual EKG',
    'Zio patch as medically indicated',
    'Vitamin B12 injections as medically indicated',
    'Rapid Strep, Influenza and Covid testing on site',
  ];

  const primaryCareServices = [
    ...conciergeServices,
    'Access to our Travel Medicine program (see Additional Services below)',
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
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-6 text-3xl font-semibold tracking-tight text-navy">Comprehensive Care</h3>
                <p className="mb-10 text-[17px] leading-relaxed text-foreground/80">
                  Our standard Primary Care offering represents the core of our concierge program - comprehensive, relationship-based medicine that goes far beyond what a traditional practice can provide.
                </p>
                <div className="overflow-hidden border border-navy/70 bg-white shadow-sm">
                  <img
                    src={primaryImage}
                    alt="Doctor and patient consultation"
                    className="h-72 w-full object-cover md:h-80"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <ServiceCard title="What We Offer" items={primaryCareServices} />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="wellness" className="scroll-mt-24 border-t border-navy/10 pt-14 md:pt-16">
          <ServiceSectionHeader title="Preventative Care" />
          <div className="max-w-7xl mx-auto mb-24 px-4 sm:px-6 lg:px-8 md:mb-32">
            <div className="grid grid-cols-1 items-start gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-6 text-3xl font-semibold tracking-tight text-navy">A More Proactive Approach</h3>
                <p className="mb-10 text-[17px] leading-relaxed text-foreground/80">
                  Our Preventative Care offering is an enhanced program designed for patients who want to take a proactive approach to their long-term health. It focuses on advanced diagnostics and early detection to help you stay ahead of potential health concerns.
                </p>
                <div className="overflow-hidden border border-navy/70 bg-white shadow-sm">
                  <img
                    src={preventativeImage}
                    alt="Preventative care"
                    className="h-72 w-full object-cover md:h-80"
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

        <section id="additional-services" className="scroll-mt-24 border-t border-navy/10 pt-14 md:pt-16">
          <ServiceSectionHeader title="Additional Services" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-14 scroll-mt-32"
            >
              <h3 className="mb-6 text-3xl font-semibold tracking-tight text-navy">Travel Kits</h3>
              <div className="grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
                <p className="text-[17px] leading-relaxed text-foreground/80">
                  Our Travel Medicine program prepares you for international travel with personalized health planning, destination-specific vaccinations, prescription medications, and a curated travel health kit.
                </p>
                <div className="overflow-hidden border border-navy/70 bg-white shadow-sm">
                  <img
                    src={travelImage}
                    alt="Travel medicine kit"
                    className="h-64 w-full object-cover"
                  />
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
