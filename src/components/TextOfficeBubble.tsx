import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function TextOfficeBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Hello, I would like to get in touch with your office.');

  const smsLink = `sms:+18055584277?&body=${encodeURIComponent(message)}`;

  return (
    <div
      className="flex flex-col items-end"
      style={{ position: 'fixed', right: '16px', bottom: '52px', zIndex: 60 }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 w-[340px] origin-bottom-right overflow-hidden rounded-[24px] border border-navy/12 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
          >
            <div className="border-b border-navy/8 bg-[#fbf8f1] px-4 py-3.5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-navy/45">Text Portal</p>
                <p className="text-[16px] font-semibold text-navy">Message Our Office</p>
              </div>
            </div>

            <div className="bg-[#f7f4ee] px-4 py-4">
              <div className="space-y-3 rounded-[22px] bg-white px-3 py-3 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)]">
                <div className="flex justify-start">
                  <div className="max-w-[82%] rounded-[18px] rounded-bl-[6px] bg-[#eef2f7] px-3 py-2 text-[13px] leading-5 text-navy/78">
                    Hi there. You can text our front office directly at (805) 558-4277.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[82%] rounded-[18px] rounded-bl-[6px] bg-[#eef2f7] px-3 py-2 text-[13px] leading-5 text-navy/78">
                    Type your message below and tap send to open your texting app.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[82%] rounded-[18px] rounded-br-[6px] bg-navy px-3 py-2 text-[13px] leading-5 text-white">
                    {message || 'Your message will appear here.'}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-end gap-2 rounded-[22px] border border-navy/12 bg-white p-2">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={2}
                  className="min-h-[46px] flex-1 resize-none rounded-[16px] border-0 bg-transparent px-3 py-2 text-[14px] leading-5 text-navy outline-none"
                  placeholder="Type your message..."
                />

                <a
                  href={smsLink}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-colors duration-200 hover:bg-navy/92"
                  aria-label="Send text message"
                >
                  <Send className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex items-center gap-2 rounded-full border-2 border-navy/25 bg-white px-4 py-2.5 text-[14px] font-semibold text-navy shadow-[0_14px_28px_rgba(15,23,42,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fffdfa]"
        aria-label="Text us directly"
      >
        <MessageCircle className="h-4 w-4 shrink-0 text-gold" />
        <span>Text with Us Directly</span>
      </button>
    </div>
  );
}

export default TextOfficeBubble;
