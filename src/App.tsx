
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

 

  return (
    <>
    {/* base component  */}

    <div className="w-screen h-screen  fixed  flex flex-col  overflow-x-scroll ">

      <div className='w-full  h-2/5 '>
      
      <ControllerComponent  objects={objects} setObjects={setObjects} />
      
      </div>
      <div className='w-full  flex  h-3/5'>
      <Canvas  shadows>
        <ambientLight intensity={4} />
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
