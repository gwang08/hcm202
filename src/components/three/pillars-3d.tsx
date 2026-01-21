"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Pillar({ position, color, height = 1.5 }: { position: [number, number, number]; color: string; height?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.4, 0.5, height, 6]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function FloatingIcon({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.3]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export function Pillars3D() {
  return (
    <div className="h-[250px] w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, 5]} intensity={0.5} color="#fbbf24" />

        {/* 3 Pillars */}
        <Pillar position={[-2, -0.3, 0]} color="#dc2626" height={1.8} />
        <Pillar position={[0, -0.3, 0]} color="#f59e0b" height={1.8} />
        <Pillar position={[2, -0.3, 0]} color="#dc2626" height={1.8} />

        {/* Floating icons on top */}
        <FloatingIcon position={[-2, 1.2, 0]} color="#fbbf24" />
        <FloatingIcon position={[0, 1.2, 0]} color="#dc2626" />
        <FloatingIcon position={[2, 1.2, 0]} color="#fbbf24" />
      </Canvas>
    </div>
  );
}
