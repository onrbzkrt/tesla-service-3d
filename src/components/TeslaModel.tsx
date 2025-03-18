"use client";

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

export default function TeslaModel() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/tesla/model.glb');
  const [shouldRotate, setShouldRotate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRotate(false);
    }, 3950);

    return () => clearTimeout(timer);
  }, []);

  useFrame((state) => {
    if (group.current && shouldRotate) {
      const rotationSpeed = 5;
      group.current.rotation.y = -(state.clock.getElapsedTime() * rotationSpeed * 0.1) % (Math.PI * 2);
    }
  });

  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
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