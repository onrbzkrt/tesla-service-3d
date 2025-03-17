"use client";

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

export default function TeslaModel() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('/models/tesla/model.glb');
  const [shouldRotate, setShouldRotate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRotate(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useFrame((state) => {
    if (group.current && shouldRotate) {
      const rotationSpeed = 5;
      group.current.rotation.y = -(state.clock.getElapsedTime() * rotationSpeed * 0.1) % (Math.PI * 2);
    }
  });

  return (
    <group ref={group} dispose={null}>
      <primitive 
        object={scene} 
        scale={[1.8, 1.8, 1.8]}
        position={[13, -11, -3]}
        rotation={[0.00002, 1.45, 0.1]}
      />
    </group>
  );
}

useGLTF.preload('/models/tesla/model.glb');