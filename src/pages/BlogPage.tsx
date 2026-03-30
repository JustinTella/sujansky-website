import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ChevronDown, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';
import logoImage from '@/assets/Gemini_Generated_Image_4y0qxk4y0qxk4y0q.png';
import PageSectionHeader from '@/components/PageSectionHeader';

function BlogPage() {
  const categories = ['All Content', 'The Doctors', 'Thoughts', 'Practice Updates', 'Promising New Treatments', 'Patient Stories'];
  const [selectedCategory, setSelectedCategory] = useState('All Content');

  const blogPosts = [
    { title: 'UNDERSTANDING PREVENTATIVE CARE', date: 'March 15, 2026', category: 'Thoughts', excerpt: 'Why investing in your health today pays dividends tomorrow.', likes: 47 },
    { title: 'NEW WELLNESS PROGRAM LAUNCH', date: 'March 10, 2026', category: 'Practice Updates', excerpt: 'We are excited to announce our enhanced wellness program with advanced diagnostics.', likes: 62 },
    { title: 'TRAVEL MEDICINE ESSENTIALS', date: 'March 5, 2026', category: 'The Doctors', excerpt: 'Dr. Sujansky shares her top recommendations for staying healthy while traveling.', likes: 38 },
    { title: 'BREAKTHROUGH IN LONGEVITY RESEARCH', date: 'February 28, 2026', category: 'Promising New Treatments', excerpt: 'Recent studies show promising results in cellular aging interventions.', likes: 91 },
    { title: 'A PATIENT SUCCESS STORY', date: 'February 22, 2026', category: 'Patient Stories', excerpt: 'How early detection and personalized care helped one patient.', likes: 54 },
    { title: 'OFFICE HOURS EXPANSION', date: 'February 18, 2026', category: 'Practice Updates', excerpt: 'Starting next month, we will be offering extended hours on Thursdays.', likes: 29 },
    { title: 'THE ROLE OF GENETICS IN HEALTH', date: 'February 12, 2026', category: 'Thoughts', excerpt: 'Understanding your genetic predispositions can help guide prevention strategies.', likes: 73 },
    { title: 'MICROBIOME AND IMMUNITY', date: 'February 5, 2026', category: 'Promising New Treatments', excerpt: 'New research reveals the critical connection between gut health and immune function.', likes: 86 },
    { title: 'MEET OUR NEW MEDICAL ASSISTANT', date: 'January 30, 2026', category: 'Practice Updates', excerpt: 'We are thrilled to welcome Kim J. to our team.', likes: 41 }
  ];

  const filteredPosts = useMemo(
    () => selectedCategory === 'All Content'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory),
    [blogPosts, selectedCategory]
  );

  const [featuredPost, ...remainingPosts] = filteredPosts;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <PageSectionHeader title="Blog" />
            <motion.h2
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="mb-6 text-3xl font-semibold tracking-tight text-navy md:text-4xl"
            >
              Latest News
            </motion.h2>
            <div className="relative mx-auto max-w-xl">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none border border-navy/70 bg-white px-5 py-4 pr-12 text-lg text-navy shadow-[0_12px_30px_rgba(15,23,42,0.05)] outline-none transition-colors duration-200 hover:border-gold/70 focus:border-gold/70"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy/50" />
            </div>
          </div>

          {featuredPost ? (
            <div className="space-y-10">
              <motion.article
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="overflow-hidden border border-navy/70 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.25fr]">
                  <div className="flex min-h-[280px] items-center justify-center border-b border-navy/15 bg-[#f7f5f0] p-10 lg:min-h-[420px] lg:border-b-0 lg:border-r">
                    <img
                      src={logoImage}
                      alt="Practice logo"
                      className="max-h-32 w-auto object-contain opacity-95 md:max-h-40"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <div className="mb-5 flex flex-wrap items-center gap-5 text-sm uppercase tracking-[0.08em] text-steely-blue">
                      <span className="inline-flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        {featuredPost.category}
                      </span>
                      <span className="inline-flex items-center gap-2 text-navy/70">
                        <CalendarDays className="h-4 w-4" />
                        {featuredPost.date}
                      </span>
                    </div>
                    <h2 className="mb-5 max-w-3xl text-2xl font-semibold leading-[1.12] tracking-tight text-navy md:text-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mb-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
                      {featuredPost.excerpt}
                    </p>
                    <button className="inline-flex w-fit items-center gap-2 text-xl font-semibold text-steely-blue transition-colors duration-200 hover:text-gold">
                      Read Full Story
                      <ChevronDown className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.article>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {remainingPosts.map((post, index) => <BlogPostCard key={index} {...post} />)}
              </div>
            </div>
          ) : (
            <div className="border border-navy/70 bg-white p-10 text-center text-navy">No posts in this category yet.</div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;
