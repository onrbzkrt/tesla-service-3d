'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaWhatsapp, FaTelegram, FaViber, FaInstagram } from 'react-icons/fa';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    innerWidth: number;
    innerHeight: number;
    addEventListener: any;
    removeEventListener: any;
  }
}

interface WindowSize {
  width: number;
  height: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function Hero() {
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: 1000, height: 800 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateSize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      updateSize();
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);

  const createParticles = (): Particle[] => {
    return Array(20).fill(null).map((_, index) => ({
      id: index,
      x: Math.random() * (windowSize.width || 1000),
      y: Math.random() * (windowSize.height || 800),
    }));
  };

  const particles = createParticles();

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Arka plan animasyonlu Tesla görselleri */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative w-full h-full"
        >
          <div className="relative w-full h-full bg-gradient-to-r from-black via-gray-900 to-black">
            <div className="absolute inset-0 opacity-50">
              {/* Arka plan gradyanı ve overlay efekti */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Paralaks efektli arka plan parçacıkları */}
      <div className="absolute inset-0 z-10">
        <div className="particles-container">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="particle"
              initial={{
                x: particle.x,
                y: particle.y,
              }}
              animate={{
                x: Math.random() * (windowSize.width || 1000),
                y: Math.random() * (windowSize.height || 800),
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                background: "rgba(66, 153, 225, 0.5)",
                borderRadius: "50%",
                position: "absolute",
              }}
            />
          ))}
        </div>
      </div>

      {/* Ana içerik */}
      <div className="relative z-20 flex items-center justify-center h-full container mx-auto px-4">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Tesla Servis Uzmanınız
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Los Angeles&apos;ın en güvenilir Tesla servis merkezi
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Randevu Al
            </a>
          </motion.div>
        </div>
      </div>

      {/* Aşağı kaydırma indikatörü */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
} 