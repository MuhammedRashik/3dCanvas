
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import RotatingObject from './Components/RotatingObject';
import ControllerComponent from './Components/ControlComponent';

function App() {



  const initialState = [
    { speed: 0.01, isRotating: true, isVisible: true, position: [-2, 0, 0], geometry: 'box' },
    { speed: 0.01, isRotating: true, isVisible: true, position: [0, 0, 0], geometry: 'sphere' },
    { speed: 0.01, isRotating: true, isVisible: true, position: [2, 0, 0], geometry: 'cone' },
  ];

  const [objects, setObjects] = useState(initialState);

 

  return (
    <>
    {/* base component  */}

    <div className="w-screen h-screen  fixed  flex flex-col  overflow-x-auto ">

      <div className='w-full  h-2/5 '>
      
      <ControllerComponent  objects={objects} setObjects={setObjects} />
      
      </div>
      <div className='w-full bg-green-300 h-3/5'>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {objects.map((obj, index) => (
          <RotatingObject
            key={index}
            speed={obj.speed}
            isVisible={obj.isVisible}
            isRotating={obj.isRotating}
            position={obj.position}
            geometryType={obj.geometry}
          />
        ))}
      </Canvas>
      </div>

    

      




    </div>

    {/* base component  */}

    </>
  )
}

export default App
