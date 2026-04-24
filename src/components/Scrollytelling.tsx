import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const sections = gsap.utils.toArray('.narrative-step');
    
    gsap.to(sections, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=400%',
        pin: true,
        scrub: 1,
      },
    });

    const steps = textRef.current.querySelectorAll('.narrative-text');
    steps.forEach((step, i) => {
      gsap.fromTo(step, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${i * 100}% top`,
            end: `top+=${(i + 1) * 100}% top`,
            scrub: true,
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen bg-heritage-ink text-white flex flex-col md:flex-row items-center overflow-hidden border-t border-white/5 py-20 px-6 md:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 px-0 md:px-8 h-full items-center">
        <div className="relative h-[40vh] sm:h-[50vh] md:h-[80vh] rounded-none overflow-hidden border border-white/10 group">
          <motion.img 
            src={import.meta.env.BASE_URL + "41_9d3f1113-78f0-481f-9cd5-3e12d845849b_1800x1800-2050243805.jpg"} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            alt="The Bespoke Process"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-heritage-ink to-transparent opacity-60" />
        </div>

        <div ref={textRef} className="relative h-[300px] md:h-60 mt-8 md:mt-0">
          <div className="narrative-text absolute inset-0">
            <h3 className="text-3xl sm:text-6xl md:text-8xl font-serif mb-4 md:mb-8 leading-none">
              THE <span className="italic text-heritage-gold">BESPOKE</span> <br/> ECONOMY
            </h3>
            <p className="text-xs sm:text-sm md:text-lg text-white/40 font-mono tracking-widest leading-loose uppercase">
              In a world of mass-produced luxury pret, unstitched fabric remains the ultimate investment. It is the only way to achieve a truly bespoke fit that respects your unique silhouette.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
