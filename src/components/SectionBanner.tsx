import { motion } from 'framer-motion';

function SectionBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      className="w-full bg-navy py-6 px-6 mb-8 border-y border-navy/90"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-2">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && (
          <>
            <span className="hidden md:inline-block text-white/50 mx-2">|</span>
            <span className="inline-block text-sm text-gold font-medium uppercase tracking-wider">{subtitle}</span>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default SectionBanner;
