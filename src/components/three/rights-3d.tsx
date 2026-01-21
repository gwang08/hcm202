"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AnimatedBox({ position, color, delay }: { position: [number, number, number]; color: string; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.15;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.7, 0.7, 0.15]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export function Rights3D() {
  const colors = ["#dc2626", "#f59e0b", "#dc2626", "#f59e0b", "#dc2626", "#f59e0b"];
  const positions: [number, number, number][] = [
    [-2.5, 0, 0],
    [-1.5, 0, 0],
    [-0.5, 0, 0],
    [0.5, 0, 0],
    [1.5, 0, 0],
    [2.5, 0, 0],
  ];

  return (
    <div className="h-[180px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {positions.map((pos, i) => (
          <AnimatedBox key={i} position={pos} color={colors[i]} delay={i * 0.5} />
        ))}
      </Canvas>
    </div>
  );
}
