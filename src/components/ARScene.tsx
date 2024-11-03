import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Text } from '@react-three/drei';
import * as THREE from 'three';

export function ARScene() {
  const boxRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.y += 0.01;
    }
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh
        ref={boxRef}
        position={[0, 0, -2]}
        scale={[0.5, 0.5, 0.5]}
      >
        <boxGeometry />
        <meshStandardMaterial color="#00ff88" metalness={0.8} roughness={0.1} />
      </mesh>
      <Text
        ref={textRef}
        position={[0, 1, -2]}
        fontSize={0.3}
        color="#00ff88"
        anchorX="center"
        anchorY="middle"
        font="/fonts/JetBrainsMono-Bold.woff"
      >
        ODEON OS
      </Text>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#101010" metalness={0.9} roughness={0.3} />
      </mesh>
    </>
  );
}