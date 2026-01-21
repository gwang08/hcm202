"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RotatingBox({ position, color, size = 0.5 }: { position: [number, number, number]; color: string; size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
}

function RotatingOctahedron({ position, color, size = 0.4 }: { position: [number, number, number]; color: string; size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5 + position[0]) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[size]} />
      <meshStandardMaterial color={color} transparent opacity={0.7} />
    </mesh>
  );
}

export function GeometricBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {/* Red boxes */}
        <RotatingBox position={[-3, 2, -2]} color="#dc2626" size={0.6} />
        <RotatingBox position={[3, -1.5, -3]} color="#dc2626" size={0.4} />
        <RotatingBox position={[-2, -2, -1]} color="#b91c1c" size={0.3} />

        {/* Gold octahedrons */}
        <RotatingOctahedron position={[2.5, 1.5, -2]} color="#f59e0b" size={0.5} />
        <RotatingOctahedron position={[-2.5, 0, -2.5]} color="#fbbf24" size={0.35} />
        <RotatingOctahedron position={[0, 2.5, -3]} color="#f59e0b" size={0.4} />

        {/* More scattered elements */}
        <RotatingBox position={[1, -2.5, -4]} color="#fbbf24" size={0.25} />
        <RotatingOctahedron position={[-1, 1, -1.5]} color="#dc2626" size={0.3} />
      </Canvas>
    </div>
  );
}
