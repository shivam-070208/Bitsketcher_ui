"use client"
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import * as THREE from 'three';

function BouncingCube({ delay = 0,x=0 }) {
    const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
    
      ref.current.position.y = Math.abs(Math.sin(clock.getElapsedTime() * 2 + delay*10000.0)) ;
      ref.current.rotation.x+=Math.abs(Math.sin(clock.getDelta() +x* delay)) ;
      ref.current.rotation.y+=Math.abs(Math.sin(clock.getDelta()  + delay)) ;
    }
  });

  return (
    <mesh ref={ref} >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#40e0d0" />
    </mesh>
  );
}

export default function BouncingCubesLoader() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} className='w-full h-full'>
      <ambientLight />
      <BouncingCube x={-1}  delay={0.00005} />
      <BouncingCube x={0} delay={0.00003} />
      <BouncingCube x={1} delay={0.000002} />
    </Canvas>
  );
}