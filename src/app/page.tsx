'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/Scene'), { 
  ssr: false,
  loading: () => null
});

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-black">
      <div className="absolute inset-0 z-10 h-screen">
        <Scene />
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex min-h-screen flex-col items-center justify-center p-8 text-center text-white"
      >
        <motion.h1 
          variants={itemVariants}
          className="mb-4 text-6xl font-bold tracking-tight"
        >
          EV Expert
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="mb-8 text-xl text-gray-300"
        >
          Professional Repair, Maintenance, and Diagnostics
        </motion.p>
        
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-transparent border-2 border-primary/50 px-8 py-3 font-medium text-primary backdrop-blur-sm transition-all hover:bg-primary/10 hover:border-primary"
        >
          Explore
        </motion.button>
      </motion.div>
    </main>
  );
}
