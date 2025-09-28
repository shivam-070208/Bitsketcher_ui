"use client"

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import {  DirectionalLight,Mesh } from 'three';

function MorphingShape() {
  const meshRef = useRef<Mesh>(null!);
  const lightRef = useRef<DirectionalLight>(null!);



  useFrame(() => {
    // Simple scale animation (pulse effect)
    const time = Date.now() * 0.002;
    if (meshRef.current) {
      meshRef.current.scale.set(
         Math.sin(time) * 0.2+0.3,  // Sinusoidal scale animation
         Math.cos(time) * 0.2+0.3,
     Math.sin(time) * 0.2+0.3
      );
    }

    // Animating the directional light position
    if (lightRef.current) {
      lightRef.current.position.set(
        Math.sin(time * 0.3) * 5,   // Light moves in a sine wave pattern
        3,
        Math.cos(time * 0.3) * 5
      );
      lightRef.current.target.position.set(0, 0, 0); // Always point towards the center of the object
      lightRef.current.target.updateMatrixWorld(); // Update the light's target matrix
    }
  });

  return (
    <>
      <mesh ref={meshRef} scale={[0.2,0.2,0.2]}>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color="#a3a3a3" metalness={2.0} roughness={1.4} />
      </mesh>

      {/* Directional light */}
      <directionalLight
        ref={lightRef}
        intensity={1.2}
        color="#ffffff"
        position={[5, 5, 5]}
        castShadow
      />
    </>
  );
}

export default function MorphingShapeLoader() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      shadows
    >
      {/* Ambient light for softer lighting */}
      <ambientLight  color="#ffffff" />

      {/* Add the animated object */}
      <MorphingShape />

      {/* Optional: Set up a helper to visualize the directional light's shadow */}
    
    </Canvas>
  );
}
