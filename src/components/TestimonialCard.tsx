import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  profession: string;
  yearJoined?: string;
  featured?: boolean;
  className?: string;
  onClick?: () => void;
}

function TestimonialCard({ quote, name, profession, yearJoined, featured = false, className = '', onClick }: TestimonialCardProps) {
  return (
    <motion.div
      className={`flex h-full min-h-[16rem] flex-col justify-between border border-gray-300 bg-white p-6 shadow-sm ${featured ? 'md:col-span-2 lg:col-span-3' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick();
        }
      } : undefined}
    >
      <blockquote className="mb-5 text-base italic leading-8 text-navy">"{quote}"</blockquote>
      <div className="border-t border-gray-200 pt-3">
        <p className="text-sm font-bold text-navy">{name}</p>
        <p className="text-xs text-foreground/60">{profession}</p>
        {yearJoined && <p className="text-xs text-gold">Joined in {yearJoined}</p>}
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
