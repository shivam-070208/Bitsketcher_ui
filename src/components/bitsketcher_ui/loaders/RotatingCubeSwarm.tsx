"use client"
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function RotatingCube({ delay = 0, x = 0 }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.rotation.x += Math.sin(t * 2 + delay) * 0.1;
      ref.current.rotation.y += Math.cos(t * 2 + delay) * 0.1;
      ref.current.position.x = Math.sin(t + x) * 2;
      ref.current.position.z = Math.cos(t + x) * 2;
    }
  });

  return (
    <mesh ref={ref} position={[x, 0, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#008080" />
    </mesh>
  );
}

export default function RotatingCubesSwarm() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ width: "100%", height: "100vh" }}>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <RotatingCube x={-1} delay={0.1} />
      <RotatingCube x={0} delay={0.3} />
      <RotatingCube x={1} delay={0.5} />
    </Canvas>
  );
}
