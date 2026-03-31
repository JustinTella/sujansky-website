import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

function ContactForm() {
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      name="contact"
      method="POST"
      action="/thank-you.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="first_name" className="text-navy font-medium">First Name <span className="text-destructive">*</span></Label>
          <Input id="first_name" name="first_name" type="text" value={formData.first_name} onChange={handleChange} required className="mt-1 bg-white text-gray-900 border-gray-300" />
        </div>
        <div>
          <Label htmlFor="last_name" className="text-navy font-medium">Last Name <span className="text-destructive">*</span></Label>
          <Input id="last_name" name="last_name" type="text" value={formData.last_name} onChange={handleChange} required className="mt-1 bg-white text-gray-900 border-gray-300" />
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
      <Button type="submit" className="w-full bg-navy text-white hover:bg-navy/90 transition-colors duration-200 active:scale-[0.98] uppercase font-medium">
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
