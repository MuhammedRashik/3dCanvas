import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import RotatingObject from './Components/RotatingObject';
import ControllerComponent from './Components/ControlComponent';
function App() {
    const initialState = [
        { speed: 0.01, isRotating: true, isVisible: true, position: [-4, 0, 0], geometry: 'box' },
        { speed: 0.01, isRotating: true, isVisible: true, position: [0, 0, 0], geometry: 'torus' },
        { speed: 0.01, isRotating: true, isVisible: true, position: [4, 0, 0], geometry: 'dode' },
    ];
    const [objects, setObjects] = useState(initialState);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "w-screen h-screen  fixed  flex flex-col  overflow-x-scroll ", children: [_jsx("div", { className: 'w-full  h-2/5 ', children: _jsx(ControllerComponent, { objects: objects, setObjects: setObjects }) }), _jsx("div", { className: 'w-full  flex  h-3/5', children: _jsxs(Canvas, { shadows: true, children: [_jsx("ambientLight", { intensity: 4 }), _jsx("pointLight", { position: [10, 10, 10] }), objects.map((obj, index) => (_jsx(RotatingObject, { speed: obj.speed, isVisible: obj.isVisible, isRotating: obj.isRotating, position: obj.position, geometryType: obj.geometry }, index)))] }) })] }) }));
}
export default App;
