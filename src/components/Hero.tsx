import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

function FabricMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4) * 0.2;
    meshRef.current.rotation.y = Math.sin(time / 2) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
        <planeGeometry args={[5, 7, 64, 64]} />
        <MeshDistortMaterial
          color="#004D40"
          speed={1.5}
          distort={0.4}
          radius={1}
          metalness={0.4}
          roughness={0.1}
          emissive="#00251A"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-heritage-ink flex flex-col items-center justify-center">
      <div className="relative z-20 text-center px-6 md:px-12 pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[60px] sm:text-[100px] md:text-[160px] font-serif leading-[0.8] tracking-tighter text-white"
        >
          EGYPTIAN<br/>
          <span className="italic text-heritage-gold">COTTON</span>
        </motion.h1>
        
        <div className="mt-10 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pointer-events-auto">
          <p className="max-w-[280px] md:max-w-sm text-[10px] md:text-sm text-white/40 leading-relaxed font-light uppercase tracking-widest text-center md:text-left">
            Structural integrity redefined for 2026. <br className="hidden md:block"/>
            A cinematic study in unstitched heritage.
          </p>
          
          <div className="flex gap-4">
            <Button className="py-6 md:py-8 px-8 md:px-12 bg-heritage-gold text-black font-bold text-[10px] md:text-technical uppercase tracking-[0.2em] rounded-none hover:bg-white transition-all h-auto">
              Shop Collection
            </Button>
            <Button variant="outline" className="py-6 md:py-8 px-8 md:px-12 border border-white/20 text-white font-bold text-[10px] md:text-technical uppercase tracking-[0.2em] rounded-none hover:bg-white/10 transition-all h-auto">
              Archives
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
