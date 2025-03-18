"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, SpotLight, Environment } from '@react-three/drei';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const TeslaModel = dynamic(() => import('./TeslaModel'), {
  ssr: false,
  loading: () => null
});

export default function Scene() {
  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#000000'
      }}
    >
      <Canvas 
        shadows 
        camera={{ position: [5, 2, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <color attach="background" args={['#111111']} />
        <Environment preset="warehouse" />
        
        <Suspense fallback={null}>
          <TeslaModel />

          {/* Ön ışık */}
          <SpotLight
            position={[0, 2, 5]}
            intensity={800}
            angle={0.9}
            penumbra={0.5}
            castShadow
            color="#ffffff"
          />

          {/* Arka ışık */}
          <SpotLight
            position={[0, 2, -5]}
            intensity={600}
            angle={0.9}
            penumbra={0.5}
            castShadow
            color="#ffffff"
          />

          {/* Sol ışık */}
          <SpotLight
            position={[-5, 2, 0]}
            intensity={700}
            angle={0.8}
            penumbra={0.4}
            castShadow
            color="#ffffff"
          />

          {/* Sağ ışık */}
          <SpotLight
            position={[5, 2, 0]}
            intensity={700}
            angle={0.8}
            penumbra={0.4}
            castShadow
            color="#ffffff"
          />

          {/* Üst ışık */}
          <SpotLight
            position={[0, 5, 0]}
            intensity={500}
            angle={0.8}
            penumbra={0.4}
            castShadow
            color="#ffffff"
          />

          {/* Ortam ışığı */}
          <ambientLight intensity={1.5} />

          {/* Dolgu ışıkları */}
          <pointLight position={[2, 0, 2]} intensity={300} />
          <pointLight position={[-2, 0, -2]} intensity={300} />

          <OrbitControls
            enableRotate={false}
            enableZoom={false}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
} 