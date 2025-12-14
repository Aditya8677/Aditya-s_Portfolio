import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface Skill3DBarProps {
  level: number;
  isVisible: boolean;
  gradient: string;
  isDark?: boolean;
}

const AnimatedBar: React.FC<Skill3DBarProps> = ({ level, isVisible, gradient, isDark = false }) => {
  const barRef = useRef<THREE.Mesh>(null);
  const backgroundRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (barRef.current && backgroundRef.current) {
      const targetScale = isVisible ? level / 100 : 0;
      barRef.current.scale.x = THREE.MathUtils.lerp(barRef.current.scale.x, targetScale, 0.05);
      
      // Subtle glow effect
      const glowIntensity = isVisible ? 1 + Math.sin(Date.now() * 0.003) * 0.1 : 0.5;
      (barRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = glowIntensity * 0.2;
    }
  });

  const getColorFromGradient = (gradient: string) => {
    if (gradient.includes('blue')) return isDark ? '#3B82F6' : '#1E40AF';
    if (gradient.includes('green')) return isDark ? '#10B981' : '#059669';
    if (gradient.includes('orange')) return isDark ? '#F59E0B' : '#D97706';
    return isDark ? '#8B5CF6' : '#7C3AED';
  };

  const color = getColorFromGradient(gradient);

  return (
    <group>
      {/* Background bar */}
      <RoundedBox
        ref={backgroundRef}
        args={[2, 0.2, 0.1]}
        radius={0.05}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color={new THREE.Color(isDark ? '#374151' : '#E5E7EB')}
          transparent
          opacity={0.3}
        />
      </RoundedBox>
      
      {/* Progress bar */}
      <RoundedBox
        ref={barRef}
        args={[2, 0.2, 0.12]}
        radius={0.05}
        position={[-1 + (level / 100), 0, 0.01]}
      >
        <meshStandardMaterial
          color={new THREE.Color(color)}
          emissive={new THREE.Color(color)}
          emissiveIntensity={0.1}
          transparent
          opacity={0.9}
        />
      </RoundedBox>
    </group>
  );
};

interface Skill3DBarContainerProps {
  level: number;
  isVisible: boolean;
  gradient: string;
  isDark?: boolean;
  className?: string;
}

const Skill3DBar: React.FC<Skill3DBarContainerProps> = ({ 
  level, 
  isVisible, 
  gradient, 
  isDark = false, 
  className = '' 
}) => {
  return (
    <div className={`h-8 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 2], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[2, 2, 2]} intensity={0.4} />
        <AnimatedBar level={level} isVisible={isVisible} gradient={gradient} isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default Skill3DBar;