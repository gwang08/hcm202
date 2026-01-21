"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Star({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.5]} />
      <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.3} />
    </mesh>
  );
}

function Building({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main building */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 1, 0.4]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
      {/* Roof */}
      <mesh position={[0, 0.7, 0]}>
        <coneGeometry args={[0.6, 0.4, 4]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>
    </group>
  );
}

function Connection() {
  const lineRef = useRef<THREE.Line | null>(null);
  const materialRef = useRef<THREE.LineBasicMaterial | null>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
    }
  });

  const points = [new THREE.Vector3(-1.5, 0, 0), new THREE.Vector3(1.5, 0, 0)];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: "#fbbf24", transparent: true, opacity: 0.8 });

  return (
    <primitive
      object={new THREE.Line(geometry, material)}
      ref={(obj: THREE.Line | null) => {
        lineRef.current = obj;
        if (obj) materialRef.current = obj.material as THREE.LineBasicMaterial;
      }}
    />
  );
}

export function PartyState3D() {
  return (
    <div className="h-[200px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#fbbf24" />

        <Star position={[-2, 0, 0]} />
        <Connection />
        <Building position={[2, 0, 0]} />
      </Canvas>
    </div>
  );
}
