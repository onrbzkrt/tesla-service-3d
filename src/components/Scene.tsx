import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, SpotLight } from '@react-three/drei';
import LoadingScreen from './LoadingScreen';

const TeslaModel = lazy(() => import('./TeslaModel'));

const Scene = () => {
  return (
    <>
      <LoadingScreen />
      <div className="w-full h-screen bg-black">
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
    </>
  );
};

export default Scene;