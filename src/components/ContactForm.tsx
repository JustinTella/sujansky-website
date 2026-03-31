import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { submitWebsiteForm } from '@/lib/formSubmit';

function ContactForm() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setIsSubmitting(true);
    try {
      await submitWebsiteForm(
        'contact',
        {
        subject: `Website Contact: ${formData.subject}`,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        }
      );
      toast.success('Message sent successfully');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" className="text-navy font-medium">First Name <span className="text-destructive">*</span></Label>
          <Input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} required className="mt-1 bg-white text-gray-900 border-gray-300" />
        </div>
        <div>
          <Label htmlFor="lastName" className="text-navy font-medium">Last Name <span className="text-destructive">*</span></Label>
          <Input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} required className="mt-1 bg-white text-gray-900 border-gray-300" />
        </div>
      </div>
      <div>
        <Label htmlFor="email" className="text-navy font-medium">Email Address <span className="text-destructive">*</span></Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1 bg-white text-gray-900 border-gray-300" />
      </div>
      <div>
        <Label htmlFor="phone" className="text-navy font-medium">Phone Number <span className="text-destructive">*</span></Label>
        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="mt-1 bg-white text-gray-900 border-gray-300" />
      </div>
      <div>
        <Label htmlFor="subject" className="text-navy font-medium">Subject <span className="text-destructive">*</span></Label>
        <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} required className="mt-1 bg-white text-gray-900 border-gray-300" />
      </div>
      <div>
        <Label htmlFor="message" className="text-navy font-medium">Message <span className="text-destructive">*</span></Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="mt-1 bg-white text-gray-900 border-gray-300" />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full bg-navy text-white hover:bg-navy/90 transition-colors duration-200 active:scale-[0.98] uppercase font-medium">
        {isSubmitting ? 'Sending...' : 'Submit'}
      </Button>
    </form>
  );
}

export default ContactForm;
