import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ArrowRight } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Heritage Emerald Lush",
    category: "Festive Silk",
    price: "PKR 18,500",
    image: "/Wash-Wear-Gents-Shalwar-Qameez-GS45-1.webp",
    fabric: "Liquid Ammonia Silk",
    color: "Deep Emerald"
  },
  {
    id: 2,
    name: "Cyan Sands Giza",
    category: "Lawn Archive",
    price: "PKR 14,200",
    image: "/Wash-Wear-Gents-Shalwar-Qameez-GS44-1-2025904109.webp",
    fabric: "Giza Cotton 120s",
    color: "Sky Blue"
  },
  {
    id: 3,
    name: "Midnight Ink Structure",
    category: "Bespoke Formal",
    price: "PKR 22,900",
    image: "/pakistani_gents_shalwar_kameez-2963876879.jpg",
    fabric: "Egyptian Twill",
    color: "Shadow Black"
  },
  {
    id: 4,
    name: "Marine Command Egyptian",
    category: "Signature Collection",
    price: "PKR 19,800",
    image: "/7aad2056fb17541456016cf623c6ac70-2904060245.jpg",
    fabric: "Supima Cotton",
    color: "Navy Blue"
  },
  {
    id: 5,
    name: "Desert Husk Texture",
    category: "Heritage Weave",
    price: "PKR 16,500",
    image: "/SK-48-1-scaled-1123149132.jpg",
    fabric: "Slub Linen",
    color: "Rustic Brown"
  },
  {
    id: 6,
    name: "Obsidian Guard Suit",
    category: "Luxury Unstitched",
    price: "PKR 25,000",
    image: "/MKS-8336-3-1639371118.jpg",
    fabric: "Imperial Wool Blend",
    color: "Jet Black"
  },
  {
    id: 7,
    name: "Sandstone Sovereign",
    category: "Daywear Archive",
    price: "PKR 13,500",
    image: "/235559a993082128adece399fa8d92ac-473599044.jpg",
    fabric: "Aerated Linen",
    color: "Warm Khaki"
  },
  {
    id: 8,
    name: "Regal Amethyst Weave",
    category: "Velvet Couture",
    price: "PKR 32,000",
    image: "/2f894674bed7377fa07612de9c67759a-2235079211.jpg",
    fabric: "Micro-Velvet x Silk",
    color: "Royal Purple"
  }
];

function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group"
    >
      <Card className="border border-white/5 bg-white/[0.02] overflow-hidden rounded-none">
        <CardContent className="p-0 relative">
          <div className="aspect-[3/4] overflow-hidden relative">
            <motion.img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-heritage-ink/0 group-hover:bg-heritage-ink/20 transition-colors duration-500" />
            
            <div className="absolute top-8 left-8">
              <span className="text-technical bg-heritage-ink/80 text-white px-3 py-1 border border-white/10 backdrop-blur-md">
                {product.category}
              </span>
            </div>
          </div>
          
          <div className="p-6 md:p-10">
             <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2 sm:gap-0">
               <div>
                  <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-heritage-gold transition-colors italic">
                    {product.name}
                  </h3>
                  <div className="text-[10px] md:text-technical text-white/30 mt-2">
                    {product.fabric}
                  </div>
               </div>
               <span className="text-lg md:text-xl font-serif italic text-heritage-gold">
                 {product.price}
               </span>
             </div>
             
             <div className="flex items-center justify-between border-t border-white/5 pt-6 md:pt-8">
               <button className="text-technical text-white hover:text-heritage-gold transition-colors">
                 Details
               </button>
               <button className="p-2 border border-white/10 rounded-full group-hover:bg-heritage-gold group-hover:text-black transition-all">
                 <ArrowRight className="w-4 h-4" />
               </button>
             </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProductGrid() {
  return (
    <section className="py-20 md:py-40 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 border-b border-white/10 pb-8 md:pb-12 gap-8 md:gap-0">
        <div>
          <span className="text-technical text-heritage-gold mb-4 md:mb-6 block">
            The 2026 Archive
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif leading-[0.8]">
            DESIGN <br /> <span className="italic leading-[1.2] text-heritage-gold">DNA</span>
          </h2>
        </div>
        <p className="max-w-sm text-white/40 text-xs md:text-technical leading-loose md:text-right">
          Each fabric roll is serialized and authenticated via Stitch MCP, ensuring 1:1 parity between digital simulation and structural reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
