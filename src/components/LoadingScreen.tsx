import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const { progress } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setShow(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="relative w-40 h-40 mb-8">
          <div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-blue-500">{Math.round(progress)}%</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Tesla Service Excellence</h2>
        <p className="text-gray-400">3D Model Yükleniyor...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;