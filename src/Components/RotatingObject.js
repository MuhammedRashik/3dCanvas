import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/RotatingObject.js
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
const RotatingObject = ({ speed, isVisible, isRotating, position, geometryType }) => {
    const meshRef = useRef();
    useFrame(() => {
        if (isRotating && meshRef.current) {
            meshRef.current.rotation.x += speed;
            meshRef.current.rotation.y += speed;
        }
    });
    useEffect(() => {
        if (!isVisible && meshRef.current) {
            meshRef.current.visible = false;
        }
        else if (meshRef.current) {
            meshRef.current.visible = true;
        }
    }, [isVisible]);
    let geometry;
    switch (geometryType) {
        case 'box':
            geometry = _jsx("boxGeometry", { args: [1.5, 1.5, 1.5] });
            break;
        case 'torus':
            geometry = _jsx("torusGeometry", { args: [1, 0.5, 16, 100] });
            break;
        case 'dode':
            geometry = _jsx("dodecahedronGeometry", { args: [0.75] });
            break;
        default:
            geometry = _jsx("boxGeometry", { args: [1, 1, 1] });
    }
    return isVisible ? (_jsxs("mesh", { ref: meshRef, position: position, children: [geometry, _jsx("meshNormalMaterial", {})] })) : null;
};
export default RotatingObject;
