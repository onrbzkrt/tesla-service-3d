import { Suspense, lazy, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, SpotLight, useProgress } from '@react-three/drei';
import dynamic from 'next/dynamic';

const TeslaModel = dynamic(() => import('./TeslaModel'), {
  ssr: false,
});

function LoadingScreen() {
  const { progress } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setShow(false), 1000);
    }
  }, [progress]);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '3px solid #3B82F6',
          borderTop: '3px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 20px auto'
        }} />
        <div style={{ fontSize: '24px', marginBottom: '10px' }}>
          {Math.round(progress)}%
        </div>
        <div style={{ fontSize: '18px', color: '#888' }}>
          Yükleniyor...
        </div>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

const Scene = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        background: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '3px solid #3B82F6',
          borderTop: '3px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-black relative">
      <LoadingScreen />
      <Canvas
        shadows
        camera={{ position: [0, 0, 15], fov: 45 }}
        style={{ background: '#000000' }}
      >
        <Suspense fallback={null}>
          <Environment preset="night" />
          
          {/* Ana spot ışığı - Sol alt köşeden */}
          <SpotLight
            position={[-10, -5, 10]}
            angle={0.6}
            penumbra={0.5}
            intensity={400}
            color="#4169e1"
            castShadow
          />
          
          {/* İkinci spot ışığı - Sağ üst köşeden */}
          <SpotLight
            position={[10, 5, 10]}
            angle={0.6}
            penumbra={0.5}
            intensity={400}
            color="#ffd700"
            castShadow
          />
          
          {/* Takip eden spot ışıkları */}
          <SpotLight
            position={[0, 0, 10]}
            angle={0.3}
            penumbra={0.2}
            intensity={300}
            color="#ffffff"
            castShadow
          />
          
          {/* Yan spot ışıkları */}
          <SpotLight
            position={[-5, 0, 5]}
            angle={0.5}
            penumbra={0.5}
            intensity={200}
            color="#ffffff"
            castShadow
          />
          <SpotLight
            position={[5, 0, 5]}
            angle={0.5}
            penumbra={0.5}
            intensity={200}
            color="#ffffff"
            castShadow
          />
          
          {/* Ortam ışığı */}
          <ambientLight intensity={0.5} />
          
          {/* Merkez yardımcı ışık */}
          <pointLight position={[0, 0, 10]} intensity={200} />
          
          <TeslaModel />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
      
      {/* Metin içeriği */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <div className="bg-gradient-to-r from-black/80 to-black/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">Tesla Service Excellence</h1>
          <p className="text-xl text-gray-300">Professional Repair, Maintenance & Diagnostics</p>
        </div>
      </div>
    </div>
  );
};

export default Scene;