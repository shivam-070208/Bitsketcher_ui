"use client";
import { cn } from "@/lib/utils";
import { shaderMaterial, useTexture } from "@react-three/drei";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export interface Props {
  className?: string;
  ImageUrl:string;
}

// === Vertex Shader ===
const vertexShader = `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// === Fragment Shader (Zanjo-style displacement) ===
const fragmentShader = `
  precision highp float;

  varying vec2 vUv;

  uniform vec2 u_mouse;
  uniform vec2 u_prevMouse;
  uniform float time;
  uniform sampler2D u_texture;

  void main() {
    vec2 gridUV = floor(vUv * vec2(40.0)) / vec2(40.0);
    vec2 centerOfPixel = gridUV + vec2(1.0 / 40.0);

    vec2 mouseDirection = u_mouse - u_prevMouse;
    vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
    float pixelDistanceToMouse = length(pixelToMouseDirection);
    float strength = smoothstep(0.4, 0.0, pixelDistanceToMouse);

    vec2 uvOffset = strength * -mouseDirection * 0.6;
    vec2 uv = vUv - uvOffset;

    vec4 color = texture2D(u_texture, uv);
    
    gl_FragColor = color+vec4(0.01,0.2,0.3,0.2)*(uvOffset.x+uvOffset.y);
  }
`;

// === Shader Material ===
const WaterDisplacementMaterial = shaderMaterial(
  {
    time: 0,
    u_mouse: new THREE.Vector2(-1, -1),
    u_prevMouse: new THREE.Vector2(-1, -1),
    u_texture: null as unknown as THREE.Texture,
  },
  vertexShader,
  fragmentShader,
);

// Extend so we can use the class
extend({ WaterDisplacementMaterial });

export default function ImageMorphing({ className = "",ImageUrl }: Props) {
  return (
    <Canvas className={cn("h-full w-full", className)}>
      <SceneSetup ImageUrl={ImageUrl} />
    </Canvas>
  );
}

const SceneSetup = ({ImageUrl}:Props) => {
  const { size, gl } = useThree();

  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const actualMouse = useRef(new THREE.Vector2(-1, -1)); // Real cursor position
  const smoothedMouse = useRef(new THREE.Vector2(-1, -1)); // Smoothed position
  const prevMouse = useRef(new THREE.Vector2(-1, -1)); // Previous smoothed position

  const texture = useTexture(ImageUrl);

  // Smooth mouse movement each frame
  useFrame((state) => {
    if (!materialRef.current) return;

    const mat = materialRef.current;

    // LERP the smoothedMouse towards actualMouse
    smoothedMouse.current.lerp(actualMouse.current, 0.8); // 0.1 = smoothing factor

    // Update shader uniforms
    mat.uniforms.time.value = state.clock.getElapsedTime();
    mat.uniforms.u_mouse.value.copy(smoothedMouse.current);
    mat.uniforms.u_prevMouse.value.copy(prevMouse.current);

    // Save current smoothed mouse for next frame
    prevMouse.current.copy(smoothedMouse.current);
  });

  // Track raw mouse movement
  const handlePointerMove = (event: PointerEvent) => {
    const x = event.clientX / gl.domElement.clientWidth;
    const y = 1.0 - event.clientY / gl.domElement.clientHeight;
    actualMouse.current.set(x, y);
  };

  // Create and configure shader material
  const material = new WaterDisplacementMaterial();
  materialRef.current = material;
  material.uniforms.u_texture.value = texture;

  return (
    <mesh onPointerMove={handlePointerMove} material={material}>
      <planeGeometry args={[size.width / 100, size.height / 100]} />
    </mesh>
  );
};
