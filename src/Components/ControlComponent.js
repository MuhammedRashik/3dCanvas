import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
const ControllerComponent = ({ objects, setObjects }) => {
    const handleSpeedChange = (index, value) => {
        const newObjects = [...objects];
        newObjects[index].speed = Math.max(0, parseFloat(value) || 0);
        setObjects(newObjects);
    };
    const toggleVisibility = (index) => {
        const newObjects = [...objects];
        newObjects[index].isVisible = !newObjects[index].isVisible;
        setObjects(newObjects);
    };
    const toggleRotation = (index) => {
        const newObjects = [...objects];
        newObjects[index].isRotating = !newObjects[index].isRotating;
        setObjects(newObjects);
    };
    const sliderStyle = {
        WebkitAppearance: "none",
        width: "100%",
        outline: "none",
    };
    return (_jsx(_Fragment, { children: _jsx("div", { className: "w-full flex  items-center h-full p-10 justify-center gap-10", children: objects.map((obj, index) => (_jsxs("div", { className: "w-64 h-48 rounded-md  border  flex flex-col", children: [_jsxs("div", { className: "w-full h-1/2 flex justify-between  items-center p-4 gap-2 ", children: [_jsx("div", { className: "w-1/2 h-full  flex justify-center items-center", children: _jsxs("button", { onClick: () => toggleVisibility(index), className: "w-28 bg-blue-500 h-10 rounded-md  text-white hover:bg-blue-600", children: [obj.isVisible ? "Hide" : "Show", " ", obj.geometry] }) }), _jsx("div", { className: "w-1/2 h-full  flex justify-center items-center", children: _jsxs("button", { onClick: () => toggleRotation(index), className: "w-32 bg-blue-500 h-10 rounded-md  text-white hover:bg-blue-600", children: [obj.isRotating ? "Stop" : "Start", " Rotation"] }) })] }), _jsxs("div", { className: "w-full h-1/2 flex flex-col ", children: [_jsxs("div", { className: "w-full  h-7 justify-start pl-5 items-center text-gray-400 ", children: [" ", "Rotation Speed:"] }), _jsxs("div", { className: "h-full  w-full flex items-center justify-center gap-3 p-5", children: [_jsx("div", { className: "w-7/12 h-full  flex items-center justify-center", children: _jsx("input", { type: "range", min: "0", max: "1", step: "0.01", value: obj.speed, className: "w-full bg-gray-100 h-6 rounded-md ", style: sliderStyle, onChange: (e) => handleSpeedChange(index, e.target.value) }) }), _jsx("div", { className: "w-4/12 h-full  flex justify-center items-center ", children: _jsx("input", { type: "number", value: obj.speed, step: "0.01", min: "0", className: "w-full h-6 bg-gray-100 rounded-md p-2", onChange: (e) => handleSpeedChange(index, e.target.value) }) })] })] })] }, index))) }) }));
};
export default ControllerComponent;
