import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface Card3DProps {
  isHovered: boolean;
  gradient: string;
  isDark?: boolean;
}

const Card3D: React.FC<Card3DProps> = ({ isHovered, gradient, isDark = false }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      // Smooth rotation animation on hover
      const targetRotationX = isHovered ? -0.2 : 0;
      const targetRotationY = isHovered ? 0.2 : 0;
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);
      
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  const getColorFromGradient = (gradient: string) => {
    if (gradient.includes('blue')) return isDark ? '#3B82F6' : '#1E40AF';
    if (gradient.includes('green')) return isDark ? '#10B981' : '#059669';
    if (gradient.includes('orange')) return isDark ? '#F59E0B' : '#D97706';
    return isDark ? '#8B5CF6' : '#7C3AED'; // default purple
  };

  return (
    <RoundedBox
      ref={meshRef}
      args={[2, 2.5, 0.1]}
      radius={0.1}
      smoothness={4}
      position={[0, 0, 0]}
    >
      <meshStandardMaterial
        color={new THREE.Color(getColorFromGradient(gradient))}
        transparent
        opacity={0.8}
        roughness={0.1}
        metalness={0.2}
      />
    </RoundedBox>
  );
};

interface Interactive3DCardProps {
  isHovered: boolean;
  gradient: string;
  isDark?: boolean;
  className?: string;
}

const Interactive3DCard: React.FC<Interactive3DCardProps> = ({ 
  isHovered, 
  gradient, 
  isDark = false, 
  className = '' 
}) => {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} intensity={0.8} />
        <Card3D isHovered={isHovered} gradient={gradient} isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default Interactive3DCard;