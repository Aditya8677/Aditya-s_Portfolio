import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  type: 'sphere' | 'box' | 'torus';
  speed?: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ position, color, type, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  const shapeProps = {
    ref: meshRef,
    position,
    scale: 0.5,
  };

  return (
    <mesh {...shapeProps}>
      {type === 'sphere' && <Sphere args={[1, 32, 32]} />}
      {type === 'box' && <Box args={[1, 1, 1]} />}
      {type === 'torus' && <Torus args={[1, 0.4, 16, 100]} />}
      <meshStandardMaterial
        color={new THREE.Color(color)}
        transparent
        opacity={0.3}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
};

interface FloatingShapesProps {
  isDark?: boolean;
  className?: string;
}

const FloatingShapes: React.FC<FloatingShapesProps> = ({ isDark = false, className = '' }) => {
  const shapes = [
    { position: [-4, 2, -2], color: isDark ? '#8B5CF6' : '#EC4899', type: 'sphere' as const, speed: 0.8 },
    { position: [4, -1, -3], color: isDark ? '#3B82F6' : '#8B5CF6', type: 'box' as const, speed: 1.2 },
    { position: [0, 3, -4], color: isDark ? '#EC4899' : '#3B82F6', type: 'torus' as const, speed: 0.6 },
    { position: [-2, -2, -1], color: isDark ? '#06B6D4' : '#10B981', type: 'sphere' as const, speed: 1.0 },
    { position: [3, 1, -2], color: isDark ? '#F59E0B' : '#F97316', type: 'box' as const, speed: 0.9 },
  ];

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {shapes.map((shape, index) => (
          <FloatingShape key={index} {...shape} />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingShapes;