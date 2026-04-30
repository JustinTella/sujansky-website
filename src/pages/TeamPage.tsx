import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSectionHeader from '@/components/PageSectionHeader';
import drHero from '@/assets/poo.png';
import shawnaPortrait from '@/assets/1864.png';
import kimPortrait from '@/assets/Kim (1).webp';

function TeamPage() {
  return (
    <>
      <Header />
      <main className="bg-light-gray">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageSectionHeader title="Meet the Office" />
          </div>
        </section>

        {/* DR. SUJANSKY */}
        <section id="ulrike" className="pb-16 scroll-mt-28">
          <div className="mb-12 border-y border-navy/10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 items-center lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="py-8 lg:py-10"
                >
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold md:text-base">Meet</p>
                  <div className="mb-3 h-0.5 w-20 bg-navy/70" />
                  <h2 className="text-balance text-[2.1rem] font-semibold leading-[1.02] tracking-tight text-navy md:text-[3.1rem] lg:text-[3.7rem]">
                    Doctor Ulrike Sujansky, M.D., FACP
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex justify-end py-6"
                >
                  <div className="h-44 w-44 overflow-hidden rounded-full border-2 border-navy/15 shadow-md">
                    <img src={drHero} alt="Dr. Ulrike Sujansky" className="h-full w-full object-cover object-top" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <div className="mb-8">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide">Experience</h4>
                  <ul className="space-y-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> In practice in San Mateo for over 25 years</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Chair of Department of Medicine at Peninsula Hospital (2015-2019)</li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide">Education</h4>
                  <ul className="space-y-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Completed undergrad at Harvard graduating summa cum laude</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Graduated from Stanford School of Medicine</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Completed internal medicine residency at Stanford</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide">Professional Associations</h4>
                  <ul className="space-y-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> American College of Physicians</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> San Mateo County Medical Association</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> California Medical Association</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> American Academy of Medical Acupuncture</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Board Certified by American Board of Internal Medicine in 1997, recertified in 2017</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Elected as a Fellow of the American College of Physicians in 2019</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="space-y-8">
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-gold">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">Certifications</h4>
                  <p className="mt-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    Board Certified by the American Board of Internal Medicine in 1997, recertified in 2017.
                  </p>
                  <p className="mt-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    Elected as a Fellow of the American College of Physicians in 2019.
                  </p>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-steely-blue">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">Family Life</h4>
                  <p className="mt-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    Dr. Sujansky is married and has two sons and will be glad to talk about them anytime, anywhere. She loves to spend her free time with skiing (and apres-skiing!), hiking, knitting, and reading. She enjoys traveling to exotic places. At home, she looks forward to sharing good meal of pasta carbonara with friends and family.
                  </p>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-gold">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">Why I Practice</h4>
                  <p className="mt-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    "I've wanted to be a doctor since I was a small child and I still love my job. I feel privileged to be able to spend more time with my patients so that I can care about them, not just care for them. I try to combine this time-honored doctor-patient relationships with modern medical advances."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SHAWNA G. */}
        <section id="shawna" className="border-t border-navy/15 py-14 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[200px_1fr] lg:gap-14 items-start">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-4 lg:items-start"
              >
                <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-navy/15 shadow-md">
                  <img src={shawnaPortrait} alt="Shawna G." className="h-full w-full object-cover object-top" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xl font-semibold text-navy">Shawna G.</p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wider text-steely-blue whitespace-nowrap">Office Manager</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-steely-blue">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">About Shawna</h4>
                  <p className="mt-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    Shawna was born and raised in the Bay Area. She is a sports mom who loves nothing more than spending time with her kids and cheering on their teams. Also, as a Bay Area local, she's a fan of all the teams whose homes are here. Shawna is the Office Manager and has been with the practice since 2004.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* KIM J. */}
        <section id="kim" className="border-t border-navy/15 py-14 pb-20 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[200px_1fr] lg:gap-14 items-start">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-4 lg:items-start"
              >
                <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-navy/15 shadow-md">
                  <img src={kimPortrait} alt="Kim J." className="h-full w-full object-cover object-top" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xl font-semibold text-navy">Kim J.</p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wider text-gold">Medical Assistant</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-gold">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">About Kim</h4>
                  <p className="mt-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    Kim is a Bay Area native who spends her free time hiking and enjoying time at the beach. She loves to travel and hopes to do more of this in the future. Kim is the Medical Assistant and has been with the practice since 2021.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TeamPage;
