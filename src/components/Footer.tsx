import { Link } from 'react-router-dom';
import logoImage from '@/assets/Gemini_Generated_Image_4y0qxk4y0qxk4y0q.png';

function Footer() {
  return (
    <footer className="bg-navy border-t border-navy/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-5 inline-flex min-h-[144px] w-full max-w-[36rem] items-center justify-center border border-white/20 bg-white px-10 py-7">
              <img
                src={logoImage}
                alt="Ulrike Sujansky, MD"
                className="h-28 md:h-32 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              34 North San Mateo Drive<br />
              Suite 1<br />
              San Mateo, CA 94401
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-sm text-white/60">
                <span className="font-medium text-white/80">Phone:</span> (650) 393-5851
              </p>
              <p className="text-sm text-white/60">
                <span className="font-medium text-white/80">Fax:</span> (650) 393-5871
              </p>
            </div>
          </div>

          <div>
            <p className="font-medium text-white/90 text-sm mb-4 uppercase tracking-wider">Navigation</p>
            <nav className="space-y-2">
              <Link to="/membership" className="block text-sm text-white/50 hover:text-gold transition-colors duration-200">Membership</Link>
              <Link to="/services" className="block text-sm text-white/50 hover:text-gold transition-colors duration-200">Services</Link>
              <Link to="/about" className="block text-sm text-white/50 hover:text-gold transition-colors duration-200">About Us</Link>
              <Link to="/blog" className="block text-sm text-white/50 hover:text-gold transition-colors duration-200">Blog</Link>
              <Link to="/contact" className="block text-sm text-white/50 hover:text-gold transition-colors duration-200">Contact</Link>
            </nav>
          </div>

          <div>
            <p className="font-medium text-white/90 text-sm mb-4 uppercase tracking-wider">Reviews</p>
            <div className="space-y-3">
              <a href="https://www.google.com/maps/place/Ulrike+Sujansky,+MD/@37.568004,-122.3289013,796m/data=!3m1!1e3!4m8!3m7!1s0x808f9e76eab22fc9:0x16272bd44374ea91!8m2!3d37.568004!4d-122.326321!9m1!1b1!16s%2Fg%2F11bv33mb38?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors duration-200">
                Google Reviews
              </a>
              <br />
              <a href="https://www.yelp.com/biz/ulrike-sujansky-md-san-mateo?osq=Ulrike+Sujansky+MD" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors duration-200">
                Yelp Reviews
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Sujansky Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <span className="hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
