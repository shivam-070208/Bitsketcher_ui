"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const SpinningRings = () => {
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const ringRef3 = useRef<THREE.Mesh>(null);

  // Use useFrame to rotate the rings
  useFrame(({ clock }) => {
    if (ringRef1.current) {
      ringRef1.current.rotation.x = clock.elapsedTime * 0.5;
      ringRef1.current.rotation.y = clock.elapsedTime * 0.3;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x = clock.elapsedTime * 0.7;
      ringRef2.current.rotation.y = clock.elapsedTime * 0.5;
    }
    if (ringRef3.current) {
      ringRef3.current.rotation.x = clock.elapsedTime * 1.0;
      ringRef3.current.rotation.y = clock.elapsedTime * 0.8;
    }
  });

  return (
    <>
      <mesh ref={ringRef1}>
        <torusGeometry args={[0.6, 0.05, 16, 100]} /> {/* Scaled down ring */}
        <meshStandardMaterial color="cyan" />
      </mesh>
      <mesh ref={ringRef2}>
        <torusGeometry args={[0.8, 0.05, 16, 100]} /> {/* Scaled down ring */}
        <meshStandardMaterial color="magenta" />
      </mesh>
      <mesh ref={ringRef3}>
        <torusGeometry args={[1.0, 0.05, 16, 100]} /> {/* Scaled down ring */}
        <meshStandardMaterial color="yellow" />
      </mesh>
    </>
  );
};

export default function SpinningRingsLoader() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }} style={{ width: "100%", height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <SpinningRings />
    </Canvas>
  );
}
