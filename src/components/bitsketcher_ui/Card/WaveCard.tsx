"use client";

import {
  Canvas,
  useFrame,
  extend,
  useLoader,
  useThree,
} from "@react-three/fiber";

import { OrbitControls, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

// GLSL Shaders
const vertexShader = `
  uniform float time;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;
    pos.z += sin(pos.x * 5.0 + time) * 0.1;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform smapler2d texturet;
  void main() {
    gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0); // Gradient blue color
  }
`;

// Create the custom material
const AnimatedShaderMaterial = shaderMaterial(
  { time: 0, texturet: null, speed: 2.0, waves: 1.0 },
  vertexShader,
  fragmentShader,
);

// Extend it into JSX elements
extend({ AnimatedShaderMaterial });

interface CardProps {
  imageUrl: string;
  speed?: number;
  waves?: number;
  scale?: number;
  cn?: string;
}

export default function WaveCard({
  imageUrl,
  speed = 2.9,
  waves = 1.0,
  scale = 0.8,
  cn = "",
}: CardProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4] }}
      
      className={cn + " " + "h-full w-full hover:saturate-200 bg-red-400"}
    >
      <ambientLight intensity={2.0} />
      <directionalLight position={[0, 2, 2]} />
      <OrbitControls enableZoom={false} />
    
      <AnimatedCard

        waves={waves}
        scale={scale}
        imageUrl={imageUrl}
        speed={speed}
      />
    </Canvas>
  );
}

function AnimatedCard({ imageUrl, speed = 2.0, waves, scale }: CardProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { size } = useThree(); // Access the canvas size from the context

  // Load the image texture
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  // Create the shader material
  const material = new AnimatedShaderMaterial({
    waves,
    time: 0,
    speed,
    texturet: texture,
  });

  useFrame((state) => {
    if (meshRef.current) {
      // Update shader time uniform
      material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  // Use the canvas size to adjust the box size (keeping aspect ratio)
  const width = size.width;
  const height = size.height;

  return (
    <group position={[0,0,0]}>
      <mesh material={material}>
        {/* Adjust box size to match the canvas size */}
        <planeGeometry   args={[(scale! * width) / 110, (scale! * height) / 110, 10, 10]} />
       
      </mesh>
    </group>
  );
}
