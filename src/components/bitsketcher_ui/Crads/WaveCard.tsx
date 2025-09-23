"use client";

import {
  Canvas,
  useFrame,
  extend,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { OrbitControls, shaderMaterial, Wireframe } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { ReactThreeFiber } from "@react-three/fiber";


// GLSL Shaders
const vertexShader = `
uniform float time;
uniform float speed;
uniform float waves;

  varying vec2 vUv;
  void main() {
    vUv = uv;
    float wave = sin(position.x*waves+ time * speed)*0.3 ;
    vec2 guv =  vec2(0.0, wave);
    vec3 positiond = position;
    positiond.y+=guv.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(positiond, 1.0);
  }
`;

const fragmentShader = `
precision highp float;
uniform float speed;
uniform float time;
uniform sampler2D texturet;
varying vec2 vUv;

void main() {
  // Create wave distortion effect by modifying the Y coordinate over time
  float wave = sin(vUv.y * 10.0 + vUv.x * 10.0 + time * speed) * 0.05; // Sine wave movement

  // Apply the wave distortion to the texture coordinates
  vec2 uv = vUv + vec2(0.0, wave);
    
  // Sample the texture at the distorted coordinates
  vec4 color = texture2D(texturet, uv);

  

  // Output the final color with reflection
  gl_FragColor = vec4(color);
}
`;

// Create the custom material
const AnimatedShaderMaterial = shaderMaterial(
  { time: 0, texturet: null,speed:2.0,waves:1.0 },
  vertexShader,
  fragmentShader
);

// Extend it into JSX elements
extend({ AnimatedShaderMaterial });

// Type Augmentation for JSX.IntrinsicElements
declare module "@react-three/fiber" {
  interface IntrinsicElements {
    animatedShaderMaterial: ReactThreeFiber.Object3DNode<
      typeof AnimatedShaderMaterial,
      typeof AnimatedShaderMaterial
    >;
  }
}

interface CardProps {
  imageUrl: string; 
  speed?:number;
  waves?:number;
  scale?:number
}

export default function WaveCard({ imageUrl,speed=2.9,waves=1.0 ,scale=1.0}: CardProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 2]} />
      <OrbitControls enableZoom={false} />
    
      <AnimatedCard waves={waves} scale={scale} imageUrl={imageUrl} speed={speed} />
    </Canvas>
  );
}

function AnimatedCard({ imageUrl,speed=2.0 ,waves,scale }: CardProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { size } = useThree(); // Access the canvas size from the context

  // Load the image texture
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  useFrame((state) => {
    if (meshRef.current) {
      // Update shader time uniform
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  // Use the canvas size to adjust the box size (keeping aspect ratio)
  const width = size.width;
  const height = size.height;

  return (
    <mesh ref={meshRef}>
      {/* Adjust box size to match the canvas size */}
      <boxGeometry args={[scale*width / 110, scale*height / 110, 0.2,10,20]}  />{" "}
      {/* Adjust the scale */}
      {/* Pass the texture to the shader material */}
      <animatedShaderMaterial m attach="material" waves={waves} time={0} speed={speed} texturet={texture} />
    </mesh>
  );
}
