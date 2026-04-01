import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSectionHeader from '@/components/PageSectionHeader';
import drHero from '@/assets/Picture1.png';

function TeamPage() {
  return (
    <>
      <Header />
      <main className="bg-light-gray">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageSectionHeader title="Dr. Sujansky" />
          </div>
        </section>

        <section className="pb-12">
          <div className="relative mb-12 overflow-hidden border-y border-navy/90 bg-navy">
            <div className="max-w-7xl mx-auto">
              <div className="grid min-h-[175px] grid-cols-1 lg:min-h-[220px] lg:grid-cols-[1.08fr_0.92fr]">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="z-10 flex items-end px-6 pb-5 pt-6 sm:px-8 lg:px-12 lg:pb-5"
                >
                  <div>
                    <p className="mb-2 text-xl font-medium text-white/90 md:text-[1.65rem]">Meet</p>
                    <h2 className="text-balance text-[2rem] font-bold leading-[0.98] tracking-tight text-white md:text-[3.25rem] lg:text-[3.8rem]">
                      Doctor Ulrike Sujansky
                    </h2>
                    <div className="mt-4 h-1 w-16 bg-gold" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative flex min-h-[145px] items-end justify-end overflow-hidden px-5 pt-3 sm:px-8 lg:min-h-[220px] lg:px-10 lg:pt-4"
                >
                  <img
                    src={drHero}
                    alt="Dr. Ulrike Sujansky"
                    className="h-[190px] w-auto object-contain object-bottom sm:h-[235px] lg:h-[285px]"
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
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> In practice in San Mateo for 30 years</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Chair of Department of Medicine at Peninsula Hospital (2015-2019)</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Founded the Private Doctors of the Peninsula</li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-navy mb-3 uppercase tracking-wide">Education</h4>
                  <ul className="space-y-3 text-[18px] text-foreground/90 leading-9">
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Completed undergrad at Harvard graduating summa cum laude</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Attended medical school at Stanford</li>
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
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Private Practice Doctors of the Peninsula (founding member)</li>
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
                    Dr. Sujansky is married and has two sons, born in 2000 and 2003. She loves to spend her free time by skiing at Kirkwood, sharing good meals with friends and family, and trying desperately to keep up with her two growing boys.
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
