import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSectionHeader from '@/components/PageSectionHeader';
import { toast } from '@/components/ui/sonner';
import { submitNetlifyForm } from '@/lib/netlifyForms';

function MembershipPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', phone: '' });

  const slides = [
    {
      title: 'What is Concierge Medicine?',
      content: (
        <>
          Concierge medicine comes with an annual fee that is irrespective of the number of times each patient sees or calls the doctor. It allows for more direct care that is above and beyond what patients may pay for with health insurance alone.
        </>
      ),
    },
    {
      title: 'What does the Membership Program include?',
      content: (
        <ul className="mx-auto max-w-2xl list-disc space-y-2.5 pl-5 text-left">
          <li>Annual physical examinations</li>
          <li>Consultations including examination and management as needed throughout the year</li>
          <li>Detailed illness and disease prevention planning</li>
          <li>Comprehensive liaison and coordination of inpatient, specialty, and convalescent care</li>
          <li>Prompt personal communication via telephone and/or email</li>
        </ul>
      ),
    },
    {
      title: 'Access and Communication',
      content: (
        <>
          Members receive prompt personal communication via telephone and/or email, plus 24 hour coverage by your physician or on-call associate in the same practice. This structure makes it easier to get timely support when questions or urgent needs come up.
        </>
      ),
    },
    {
      title: 'Included Preventive Services',
      content: (
        <>
          Membership also includes annual flu vaccine, annual EKG, Zio patch as medically indicated, Vitamin B12 injections as medically indicated, and rapid Strep, Influenza and Covid testing on site.
        </>
      ),
    },
    {
      title: 'Time, Flexibility, and Home Visits',
      content: (
        <>
          The program is designed around longer and more flexible appointments where all of your health education issues and concerns are addressed. For those who live within a 10 mile radius and are unable to travel, home visits are available.
        </>
      ),
    },
  ];
  const faqItems = [
    {
      question: 'What is "Private Medicine"?',
      answer:
        '“Private” medicine (also known as “membership medicine” or “concierge medicine”) is a form of medical practice that emphasizes wellness and disease prevention. Patients have direct contact to the physician via email and cell phone communication to allow for expedited and enhanced communication. This also allows for many problems to be addressed on the phone and can often decrease the need for office visits and possibly prevent hospitalizations. The physician sees fewer patients and can therefore concentrate more fully on the issues of each individual patient. Private medicine restores the direct connection and relationship between the physician and their patient.',
    },
    {
      question: 'How is this different from traditional medicine?',
      answer:
        'In a typical primary care practice, the doctor has a patient panel of thousands of patients. This translates into long wait times and shorter office visits for patients. Dr. Sujansky has also noticed that the emphasis on electronic medical records systems places even more demands on the physician and even less time is left for directly caring for the patient. Time and reimbursement pressures have therefore eroded the physician/patient relationship. In membership medicine, on the other hand, all of these external pressures have been stripped away and we are back to the way medicine was meant to be practiced. Dr. Sujansky is free to spend as much time with a patient as she may need.',
    },
    {
      question: 'What does the Membership Program include?',
      answer:
        'Easy direct communication with Dr. Sujansky via her personal cell phone after hours as well as same day/next day email communication. Limited practice size, which allows you to have more time with the doctor. Expedited call-backs and same day/next day appointment availability. Physician-level communication with your other consulting specialists that will allow a timely resolutions of any concerns or issues you may have. Enhanced communication with hospital physicians and staff will help ensure that you have a seamless transition between the hospital and your outpatient care. Home visits for those who live within a 10 mile radius and who are unable to travel to the office. Longer and more flexible appointments where all of your health education issues and concerns are addressed. A routine annual executive physical including a thorough review of your personal and family history, physical exam, and screening tests data. Follow-up communications that often helps guide health care decisions. Biannual state-of-the art evaluation of body composition with analysis of muscle vs fat mass in trunk and individual limbs. This allows for more individualized dietary and exercise counseling.',
    },
    {
      question: 'How do I become a member?',
      answer:
        'Please call our office and ask for the Patient Membership Agreement. Then complete and sign the Agreement and send it on to our office. 34 North San Mateo Drive, Suite #1 San Mateo, CA 94401.',
    },
    {
      question: 'Will my private insurance reimburse my annual concierge fee?',
      answer:
        'It is unlikely that the annual fee will be reimbursable. Please consult your tax advisors or human resources representative at your place of employment.',
    },
    {
      question: 'Are you a Participating Provider for Medicare?',
      answer:
        'Yes, Dr. Sujansky is a Participating Provider with Medicare and will bill Medicare on your behalf, as required by law.',
    },
    {
      question: 'Do you bill Medicare for the annual concierge fee?',
      answer:
        'The annual concierge fee only includes services that are not covered by Medicare and, as such, cannot be paid for or reimbursed by Medicare. Dr. Sujansky will bill Medicare for your sick visits and for any additional services performed at her practice that ARE covered by Medicare.',
    },
    {
      question: 'Do I need to have health insurance?',
      answer:
        'Yes. Private Medical Practices do not take the place of general health insurance coverage. The overall goal is for our Private Medicine practice to improve and maintain your health, and for your insurance plan to cover necessary and more complex medical intervention when needed. By providing you with extraordinary and connected primary care, your plan utilization can often be reduced.',
    },
    {
      question: 'What about lab, x-ray, specialists’ fees and hospitalization?',
      answer:
        'Procedures and services not performed in our office are usually covered by your insurance.',
    },
    {
      question: 'What if I need to see a specialist or a surgeon?',
      answer:
        'Dr. Sujansky is available to help you decide what specialists to see and to coordinate such consultations. In this way the most appropriate resource is used, the earliest arrangements are made, and your applicable medical information is sent in advance of your specialist visit.',
    },
    {
      question: 'What if I need to be hospitalized?',
      answer:
        'Dr. Sujansky has privileges at Mills-Peninsula Hospital. If you are hospitalized there, Dr. Sujansky will visit you, be your advocate in treatment decisions, and help better coordinate care with the hospital physicians. The hospital physicians will continue to be the primary physicians on site to handle your hospitalization.',
    },
    {
      question: 'Will I still benefit from this Membership Program if I don’t need frequent medical attention?',
      answer:
        'Yes. Our practice focuses on wellness and disease prevention, which are important factors throughout your life. In addition, the small practice size will assure that calls will be answered quickly, you will be seen when you want to be seen, and you will have more time during your office visits. Moreover, as you can easily reach Dr. Sujansky directly via phone or email, you may often get your questions answered easily and without the need for coming into the office. Oftentimes, even trips to the emergency department can be prevented by getting in touch with Dr. Sujansky in an easy and timely fashion!',
    },
    {
      question: 'How do I get in touch with Dr. Sujansky?',
      answer:
        'Once you join our Membership Practice, you will be given Dr. Sujansky’s email and personal cell phone number. Our office is open from 8:30 am to 5:00 pm. During office hours we ask that you call the office first. Our staff will relay the message to Dr. Sujansky and she will personally return your call. After hours, Dr. Sujansky answers calls or returns calls promptly. You can also email with non-urgent questions any time and Dr. Sujansky will respond within one day.',
    },
    {
      question: 'What happens when Dr. Sujansky is on vacation?',
      answer:
        'On the infrequent occasions when Dr. Sujansky is out of town or otherwise unavailable, she will have another quality physician cover for her. Even while out of town, she will often be available by phone to you and to covering physicians.',
    },
    {
      question: 'What if I have more questions?',
      answer:
        'Please call our office at 650 393-5851 to speak with our staff. Shawna, our office manager and Private Medicine coordinator, can discuss details of our new practice concept with you. Also, Dr. Sujansky would also be happy to talk to you personally on the phone if you have questions.',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitNetlifyForm({
        "form-name": "membership-request",
        ...formData,
        subject: "Website Membership Request",
        message: "Interested in receiving membership information.",
      });

      toast.success("Thank you for submitting. We’ll be in touch soon.");
      setFormData({ first_name: '', last_name: '', email: '', phone: '' });
    } catch {
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="py-12 bg-light-gray min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageSectionHeader title="Membership Information" />

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white shadow-sm p-6 md:p-10 mb-16 border border-gray-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-navy/15">
              <div className="h-full bg-gold transition-all duration-500 ease-out" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
            </div>
            <div className="flex items-center justify-between min-h-[250px] mt-4">
              <button onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))} className="w-10 h-10 bg-white border border-gray-300 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors duration-200 active:scale-95 shrink-0" aria-label="Previous slide">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex-1 mx-6 md:mx-12 text-center">
                <AnimatePresence mode="wait">
                  <motion.div key={currentSlide} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 text-balance tracking-tight">{slides[currentSlide].title}</h2>
                    <div className="text-base leading-relaxed text-foreground">{slides[currentSlide].content}</div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <button onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))} className="w-10 h-10 bg-white border border-gray-300 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors duration-200 active:scale-95 shrink-0" aria-label="Next slide">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {slides.map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-sm transition-all duration-300 ${index === currentSlide ? 'bg-navy w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'}`} aria-label={`Go to slide ${index + 1}`} />
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16 bg-white shadow-sm p-6 md:p-10 relative overflow-hidden border border-gray-300">
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3 text-balance tracking-tight">Begin Your Membership Conversation</h2>
                <div className="mx-auto mb-4 h-1 w-16 bg-gold" />
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">Interested in joining our practice? Fill out the form below and we'll contact you with more information about membership options and availability.</p>
              </div>
              <form
                name="membership-request"
                method="POST"
                action="/"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="max-w-2xl mx-auto space-y-5 bg-white p-6 md:p-8 shadow-sm border border-gray-200"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="membership-request" />
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="subject" value="Website Membership Request" />
                <input type="hidden" name="message" value="Interested in receiving membership information." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="first_name" className="text-navy font-medium">First Name <span className="text-destructive">*</span></Label>
                    <Input id="first_name" name="first_name" type="text" value={formData.first_name} onChange={handleChange} required className="mt-1 rounded-none bg-white text-gray-900 border-gray-300" />
                  </div>
                  <div>
                    <Label htmlFor="last_name" className="text-navy font-medium">Last Name <span className="text-destructive">*</span></Label>
                    <Input id="last_name" name="last_name" type="text" value={formData.last_name} onChange={handleChange} required className="mt-1 rounded-none bg-white text-gray-900 border-gray-300" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-navy font-medium">Email Address <span className="text-destructive">*</span></Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1 rounded-none bg-white text-gray-900 border-gray-300" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-navy font-medium">Phone Number <span className="text-destructive">*</span></Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="mt-1 rounded-none bg-white text-gray-900 border-gray-300" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="mt-2 w-full rounded-none bg-navy text-white uppercase font-medium transition-colors duration-200 hover:bg-navy/90 active:scale-[0.98] disabled:opacity-70">
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
              </form>
              <div className="mt-6 border-t border-gray-200 pt-6 text-center">
                <p className="text-xl md:text-2xl font-bold tracking-tight text-navy">Questions or Ready to Schedule?</p>
                <p className="mt-2 text-base leading-relaxed text-foreground/80">
                  Please call <span className="font-semibold text-navy">(650) 393-5851</span> if you have any more questions or would like to schedule an initial appointment.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-16 bg-white shadow-sm border border-gray-300 p-6 md:p-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">Frequently Asked Questions</h2>
              <div className="mt-3 h-1 w-16 bg-gold" />
            </div>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="overflow-hidden border border-gray-200 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex((current) => (current === index ? null : index))}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-navy">{item.question}</h3>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-navy transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                      >
                        <div className="border-t border-gray-200 px-5 py-4 md:px-6">
                          <p className="text-[15px] leading-relaxed text-foreground/80">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MembershipPage;
