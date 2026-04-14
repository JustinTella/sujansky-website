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
        <section className="pb-16">
          <div className="relative mb-12 overflow-hidden border-y border-navy/20 bg-[linear-gradient(120deg,#f7f3ec_0%,#fefaf4_55%,#f3efe6_100%)]">
            <div className="max-w-7xl mx-auto">
              <div className="grid min-h-[175px] grid-cols-1 lg:min-h-[220px] lg:grid-cols-[1.08fr_0.92fr]">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="z-10 flex items-end px-6 pb-6 pt-7 sm:px-8 lg:px-12 lg:pb-7"
                >
                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold md:text-base">Meet</p>
                    <div className="mb-3 h-0.5 w-20 bg-navy/70" />
                    <h2 className="text-balance text-[2.1rem] font-semibold leading-[1.02] tracking-tight text-navy md:text-[3.1rem] lg:text-[3.7rem]">
                      Doctor Ulrike Sujansky
                    </h2>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative flex min-h-[220px] items-stretch justify-end overflow-hidden lg:min-h-[220px]"
                >
                  <img
                    src={drHero}
                    alt="Dr. Ulrike Sujansky"
                    className="h-full w-full object-cover object-top lg:w-[48%]"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <h3 className="text-3xl font-bold text-navy mb-8 tracking-tight border-b border-gray-300 pb-3">
                  Ulrike Sujansky, M.D., FACP
                </h3>
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-navy mb-3 uppercase tracking-wide">Experience</h4>
                  <ul className="space-y-3 text-[18px] text-foreground/90 leading-9">
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> In practice in San Mateo for over 25 years</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Chair of Department of Medicine at Peninsula Hospital (2015-2019)</li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-navy mb-3 uppercase tracking-wide">Education</h4>
                  <ul className="space-y-3 text-[18px] text-foreground/90 leading-9">
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Completed undergrad at Harvard graduating summa cum laude</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Passed Stanford School of Medicine</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Completed internal medicine residency at Stanford</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy mb-3 uppercase tracking-wide">Professional Associations</h4>
                  <ul className="space-y-3 text-[18px] text-foreground/90 leading-9">
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> American College of Physicians</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> San Mateo County Medical Association</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> California Medical Association</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> American Academy of Medical Acupuncture</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Board Certified by American Board of Internal Medicine in 1997, recertified in 2017</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Nominated as a Fellow of the American College of Physicians in 2019</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="space-y-10">
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-gold">
                  <h4 className="text-lg font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">Certifications</h4>
                  <p className="mt-3 text-[18px] text-foreground/90 leading-9">
                    Board Certified by the American Board of Internal Medicine in 1997, recertified in 2017.
                  </p>
                  <p className="mt-3 text-[18px] text-foreground/90 leading-9">
                    Nominated as a Fellow of the American College of Physicians in 2019.
                  </p>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-steely-blue">
                  <h4 className="text-lg font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">Family Life</h4>
                  <p className="mt-3 text-[18px] text-foreground/90 leading-9">
                    Dr. Sujansky is married and has two sons. She loves to spend her free time with skiing, hiking, knitting, and reading. She enjoys traveling and sharing a good meal with friends and family.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SHAWNA G. */}
        <section className="pb-16">
          <div className="relative mb-12 overflow-hidden border-y border-navy/20 bg-[linear-gradient(120deg,#f0f4f8_0%,#f8fafc_55%,#edf2f7_100%)]">
            <div className="max-w-7xl mx-auto">
              <div className="grid min-h-[175px] grid-cols-1 lg:min-h-[220px] lg:grid-cols-[1.08fr_0.92fr]">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="z-10 flex items-end px-6 pb-6 pt-7 sm:px-8 lg:px-12 lg:pb-7"
                >
                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-steely-blue md:text-base">Meet</p>
                    <div className="mb-3 h-0.5 w-20 bg-navy/70" />
                    <h2 className="text-balance text-[2.1rem] font-semibold leading-[1.02] tracking-tight text-navy md:text-[3.1rem] lg:text-[3.7rem]">
                      Shawna G.
                    </h2>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative flex min-h-[220px] items-stretch justify-end overflow-hidden lg:min-h-[220px]"
                >
                  <img
                    src={shawnaPortrait}
                    alt="Shawna G., Office Manager"
                    className="h-full w-full object-cover object-top lg:w-[48%]"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <h3 className="text-3xl font-bold text-navy mb-8 tracking-tight border-b border-gray-300 pb-3">
                  Shawna G.
                </h3>
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-navy mb-3 uppercase tracking-wide">Role</h4>
                  <ul className="space-y-3 text-[18px] text-foreground/90 leading-9">
                    <li className="flex items-start gap-2"><span className="text-steely-blue mt-0.5">•</span> Office Manager</li>
                    <li className="flex items-start gap-2"><span className="text-steely-blue mt-0.5">•</span> Patient Membership Coordinator</li>
                    <li className="flex items-start gap-2"><span className="text-steely-blue mt-0.5">•</span> With the practice since 2004</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="space-y-10">
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-steely-blue">
                  <h4 className="text-lg font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">About Shawna</h4>
                  <p className="mt-3 text-[18px] text-foreground/90 leading-9">
                    Shawna was born and raised in the Bay Area. She has been working with the practice as a medical assistant and office manager since 2004. A self-described soccer mom and baseball mom, she spends much of her free time with her two children. She cheers on the Giants and 49ers, and spends many vacations at Disneyland.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* KIM J. */}
        <section className="pb-16">
          <div className="relative mb-12 overflow-hidden border-y border-navy/20 bg-[linear-gradient(120deg,#f7f3ec_0%,#fefaf4_55%,#f3efe6_100%)]">
            <div className="max-w-7xl mx-auto">
              <div className="grid min-h-[175px] grid-cols-1 lg:min-h-[220px] lg:grid-cols-[1.08fr_0.92fr]">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="z-10 flex items-end px-6 pb-6 pt-7 sm:px-8 lg:px-12 lg:pb-7"
                >
                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold md:text-base">Meet</p>
                    <div className="mb-3 h-0.5 w-20 bg-navy/70" />
                    <h2 className="text-balance text-[2.1rem] font-semibold leading-[1.02] tracking-tight text-navy md:text-[3.1rem] lg:text-[3.7rem]">
                      Kim J.
                    </h2>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative flex min-h-[220px] items-stretch justify-end overflow-hidden lg:min-h-[220px]"
                >
                  <img
                    src={kimPortrait}
                    alt="Kim J., Medical Assistant"
                    className="h-full w-full object-cover object-top lg:w-[48%]"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <h3 className="text-3xl font-bold text-navy mb-8 tracking-tight border-b border-gray-300 pb-3">
                  Kim J.
                </h3>
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-navy mb-3 uppercase tracking-wide">Role</h4>
                  <ul className="space-y-3 text-[18px] text-foreground/90 leading-9">
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Medical Assistant</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Joined the practice in 2021</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="space-y-10">
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-gold">
                  <h4 className="text-lg font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">About Kim</h4>
                  <p className="mt-3 text-[18px] text-foreground/90 leading-9">
                    Kim joined the team as a medical assistant in 2021. A Bay Area native, Kim spends her free time hiking and enjoying time at the beach. She loves to travel and hopes to do more of this in the future.
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
