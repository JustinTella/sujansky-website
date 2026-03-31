import { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPostCardProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  likes: number;
  onSelect?: () => void;
  isActive?: boolean;
}

function BlogPostCard({ title, date, category, excerpt, likes, onSelect, isActive = false }: BlogPostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => prev + (liked ? -1 : 1));
  };

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      className={`w-full bg-white p-5 border shadow-sm text-left transition-all duration-200 hover:shadow-md hover:border-gold/70 ${
        isActive ? 'border-gold/80 shadow-md' : 'border-navy/70'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-navy font-bold text-sm uppercase mb-2 text-balance tracking-wide">{title}</h3>
      <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
        <span>{date}</span>
        <span className="px-2 py-0.5 bg-white border border-navy/50 text-steely-blue font-medium">{category}</span>
      </div>
      <p className="text-sm text-foreground leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleLike();
        }}
        className="flex items-center gap-1.5 border-t border-gray-100 pt-3 text-xs font-medium text-gold transition-colors duration-200 hover:text-navy"
      >
        <Heart className={`h-3.5 w-3.5 ${liked ? 'fill-current' : ''}`} />
        <span>{likeCount}</span>
      </button>
    </motion.button>
  );
}

export default BlogPostCard;
