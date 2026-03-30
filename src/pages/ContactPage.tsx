import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import PageSectionHeader from '@/components/PageSectionHeader';
import officePhoto from '@/assets/image-asset (5).webp';

function ContactPage() {
  return (
    <>
      <Header />
      <main className="py-12 bg-light-gray min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageSectionHeader title="Contact Us" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-6 lg:col-span-1">
              <div className="overflow-hidden shadow-sm border border-gray-300 bg-white">
                <img src={officePhoto} alt="Dr. Sujansky and team with laptop open" className="w-full h-56 object-cover" />
              </div>
              <div className="h-[350px] overflow-hidden shadow-sm border border-gray-300 bg-white">
                <MapEmbed />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-1">
              <div className="bg-white p-6 md:p-8 shadow-sm h-full border border-gray-300">
                <h2 className="text-2xl font-bold text-navy mb-2 tracking-tight">Send a Message</h2>
                <p className="text-muted-foreground mb-6 text-sm">Fill out the form below and our team will get back to you shortly.</p>
                <ContactForm />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="space-y-6 lg:col-span-1">
              <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-navy">
                <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2 border-b border-gray-200 pb-2"><MapPin className="w-5 h-5 text-gold" /> Location</h3>
                <p className="text-sm leading-relaxed text-foreground mb-6">34 North San Mateo Drive<br />Suite 1<br />San Mateo, CA 94401</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center"><Phone className="w-4 h-4 text-steely-blue" /></div>
                    <p className="text-sm text-foreground"><span className="font-bold text-navy">Phone:</span> (650) 393-5851</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center"><Mail className="w-4 h-4 text-steely-blue" /></div>
                    <p className="text-sm text-foreground"><span className="font-bold text-navy">Fax:</span> (650) 393-5871</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-steely-blue">
                <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2 border-b border-gray-200 pb-2"><Clock className="w-5 h-5 text-gold" /> Office Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="font-bold text-navy">Mon - Fri</span><span className="text-foreground">9:00am - 5:00pm</span></div>
                  <div className="flex justify-between items-center pt-1"><span className="font-bold text-navy">Sat - Sun</span><span className="text-muted-foreground">Closed</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;
