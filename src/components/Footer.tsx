import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-heritage-ink text-white py-16 md:py-24 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 text-center md:text-left">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tighter mb-6 md:mb-8">
            JAGALZOR'S <span className="text-heritage-gold italic">STUDIO</span>
          </h2>
          <p className="text-white/40 max-w-sm mx-auto md:mx-0 font-light leading-loose mb-8">
            The premier hub for South Asian unstitched heritage. Redefining men's clothing through the lens of digital realism and textile excellence. Based in Karachi, exporting luxury to the world.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="#" className="p-3 rounded-full border border-white/10 hover:border-heritage-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full border border-white/10 hover:border-heritage-gold transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full border border-white/10 hover:border-heritage-gold transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full border border-white/10 hover:border-heritage-gold transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-heritage-gold font-bold mb-6 md:mb-8">Collections</h4>
          <ul className="space-y-3 md:space-y-4 text-sm font-light text-white/60">
            <li className="hover:text-white transition-colors cursor-pointer">Spring/Summer '26</li>
            <li className="hover:text-white transition-colors cursor-pointer">Heritage Bridals</li>
            <li className="hover:text-white transition-colors cursor-pointer">Egyptian Cotton Daily</li>
            <li className="hover:text-white transition-colors cursor-pointer">Zari Artisanal</li>
          </ul>
        </div>

        <div>
           <h4 className="text-xs uppercase tracking-widest text-heritage-gold font-bold mb-6 md:mb-8">The Brand</h4>
           <ul className="space-y-3 md:space-y-4 text-sm font-light text-white/60">
             <li className="hover:text-white transition-colors cursor-pointer">Textile Science</li>
             <li className="hover:text-white transition-colors cursor-pointer">Our Weavers</li>
             <li className="hover:text-white transition-colors cursor-pointer">Bespoke Styling</li>
             <li className="hover:text-white transition-colors cursor-pointer">Store Locator</li>
           </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-16 md:mt-24 pt-8 border-t border-white/5 text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/20 text-center">
        <p>© 2026 Jagalzor's Studio Private Ltd.</p>
        <div className="flex gap-6 md:gap-8 mt-6 md:mt-0 font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
