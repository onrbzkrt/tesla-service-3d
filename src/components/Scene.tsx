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
        <color attach="background" args={['#0a0a0a']} />
        <Environment preset="studio" />
        
        <Suspense fallback={null}>
          <TeslaModel />

          {/* Sağ üst spot */}
          <SpotLight
            position={[6, 8, 2]}
            intensity={900}
            angle={0.4}
            penumbra={0.2}
            castShadow
            color="#ffffff"
            target-position={[0, 0, 0]}
          />

          {/* Sol üst spot */}
          <SpotLight
            position={[-6, 8, 2]}
            intensity={900}
            angle={0.4}
            penumbra={0.2}
            castShadow
            color="#ffffff"
            target-position={[0, 0, 0]}
          />

          {/* Ön destek ışığı */}
          <SpotLight
            position={[0, 4, 6]}
            intensity={600}
            angle={0.5}
            penumbra={0.3}
            castShadow
            color="#f8fafc"
          />

          {/* Üst merkez vurgu */}
          <SpotLight
            position={[0, 10, 0]}
            intensity={800}
            angle={0.3}
            penumbra={0.2}
            castShadow
            color="#ffffff"
          />

          {/* Genel ortam ışığı */}
          <ambientLight intensity={0.2} />

          {/* Zemin aydınlatması */}
          <pointLight position={[0, -1, 0]} intensity={300} color="#ffffff" />
          <pointLight position={[3, -1, 2]} intensity={200} color="#f1f5f9" />
          <pointLight position={[-3, -1, 2]} intensity={200} color="#f1f5f9" />

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