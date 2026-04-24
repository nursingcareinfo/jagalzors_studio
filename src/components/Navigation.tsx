import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 glass-dark border-b border-white/5"
    >
      <div className="flex items-center gap-16">
        <a href="/" className="text-xl md:text-3xl font-serif font-bold tracking-tighter">
          JAGALZOR'S<span className="italic text-heritage-gold">.STUDIO</span>
        </a>
        
        <div className="hidden lg:flex items-center gap-10 text-technical">
          <a href="#" className="hover:text-heritage-gold transition-colors tracking-[0.3em]">Archives</a>
          <a href="#" className="hover:text-heritage-gold transition-colors tracking-[0.3em]">Micro-Weave</a>
          <a href="#" className="hover:text-heritage-gold transition-colors tracking-[0.3em]">The Lab</a>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <Button className="hidden md:flex border border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-none px-8 py-6 transition-all uppercase text-technical h-auto">
          Contact Concierge
        </Button>
        <Button className="border border-whatsapp/40 bg-whatsapp/10 hover:bg-whatsapp/20 text-whatsapp gap-2 rounded-none px-4 md:px-8 py-4 md:py-6 transition-all h-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-whatsapp animate-pulse"></span>
          <span className="text-[10px] md:text-technical font-bold">Bespoke</span>
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </motion.nav>
  );
}
