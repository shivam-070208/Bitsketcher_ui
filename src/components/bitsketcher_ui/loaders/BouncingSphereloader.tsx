"use client"
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

function BouncingSphere({ delay = 0, x = 0 }) {
  const ref = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.y = Math.abs(Math.sin(t * 2 + delay)) * 1;
      ref.current.position.x = Math.sin(t * 2 + x) * 0.6;
      ref.current.scale.set(Math.abs(Math.sin(t * 2 + delay)) + 0.5, 1, 1);
    }
  });

  return (
    <mesh ref={ref} position={[x * 2, 0, 0]}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color="#FF6347" />
    </mesh>
  );
}

export default function BouncingSpheresLoader() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ width: "100%", height: "100vh" }}>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <BouncingSphere x={-1} delay={0.1} />
      <BouncingSphere x={0} delay={0.3} />
      <BouncingSphere x={1} delay={0.5} />
    </Canvas>
  );
}
