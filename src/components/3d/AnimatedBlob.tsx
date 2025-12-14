import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedBlob: React.FC<{ isDark?: boolean }> = ({ isDark = false }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(2, 32, 32);
    const positions = geo.attributes.position.array as Float32Array;
    
    // Add some randomness to create blob-like shape
    for (let i = 0; i < positions.length; i += 3) {
      const vertex = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]);
      vertex.normalize();
      vertex.multiplyScalar(2 + Math.random() * 0.5);
      positions[i] = vertex.x;
      positions[i + 1] = vertex.y;
      positions[i + 2] = vertex.z;
    }
    
    geo.attributes.position.needsUpdate = true;
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      
      // Animate the blob shape
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const time = state.clock.elapsedTime;
        positions[i + 1] += Math.sin(time + positions[i]) * 0.001;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        color={new THREE.Color(isDark ? '#8B5CF6' : '#EC4899')}
        transparent
        opacity={0.2}
        roughness={0.1}
        metalness={0.9}
        wireframe={false}
      />
    </mesh>
  );
};

interface AnimatedBlobBackgroundProps {
  isDark?: boolean;
  className?: string;
}

const AnimatedBlobBackground: React.FC<AnimatedBlobBackgroundProps> = ({ isDark = false, className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color={new THREE.Color(isDark ? '#3B82F6' : '#8B5CF6')} />
        <AnimatedBlob isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default AnimatedBlobBackground;