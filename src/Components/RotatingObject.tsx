// src/RotatingObject.js
import  { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const RotatingObject = ({ speed, isVisible, isRotating, position, geometryType }:any) => {
  const meshRef:any = useRef();

  useFrame(() => {
    if (isRotating && meshRef.current) {
        meshRef.current.rotation.x += speed;
        meshRef.current.rotation.y += speed;
      }
  });

  useEffect(() => {
    if (!isVisible && meshRef.current) {
      meshRef.current.visible = false;
    } else if (meshRef.current) {
      meshRef.current.visible = true;
    }
  }, [isVisible]);

  let geometry;
  switch (geometryType) {
    case 'box':
      geometry = <boxGeometry args={[1, 1, 1]} />;
      break;
    case 'sphere':
      geometry = <sphereGeometry args={[0.75, 32, 32]} />;
      break;
    case 'cone':
      geometry = <coneGeometry args={[0.5, 1, 32]} />;
      break;
    default:
      geometry = <boxGeometry args={[1, 1, 1]} />;
  }

  return isVisible ? (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial color="orange" />
    </mesh>
  ) : null;
};

export default RotatingObject;
