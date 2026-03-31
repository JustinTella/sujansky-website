import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

function ServiceCard({ title, items }: { title: string; items: ReactNode[] }) {
  return (
    <motion.div
      className="h-full border border-navy/70 border-t-[3px] border-t-steely-blue bg-white p-6 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="mb-4 border-b border-gray-200 pb-3 text-xl font-bold text-navy">{title}</h3>
      <ul className="space-y-4 text-[16px] text-foreground/95">
        {items.map((item, index) => (
          item === '__SUBHEAD_AS_WELL_AS__' ? (
            <li key={index} className="pl-5 pt-1 text-[16px] font-bold text-foreground/95">
              As well as:
            </li>
          ) : (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1 text-gold">•</span>
              <span className="leading-8 font-medium">{item}</span>
            </li>
          )
        ))}
      </ul>
    </motion.div>
  );
}

export default ServiceCard;
