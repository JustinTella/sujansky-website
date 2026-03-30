import { motion } from 'framer-motion';

interface PageSectionHeaderProps {
  title: string;
}

function PageSectionHeader({ title }: PageSectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h1 className="mb-5 text-4xl font-semibold tracking-tight text-navy md:text-5xl lg:text-6xl">
        {title}
      </h1>
      <div className="mx-auto h-1 w-24 bg-gold" />
    </motion.div>
  );
}

export default PageSectionHeader;
