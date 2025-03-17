import { motion } from 'framer-motion';
import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const { progress, loaded, total } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setShow(false), 1000);
    }
  }, [progress]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <div className="relative w-40 h-40 mb-8">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-t-4 border-blue-500 rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-blue-500">{Math.round(progress)}%</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Tesla Service Excellence</h2>
        <p className="text-gray-400">Yüklenen Modeller: {loaded}/{total}</p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;