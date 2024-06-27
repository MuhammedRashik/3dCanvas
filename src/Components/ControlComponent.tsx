const ControllerComponent=({objects,setObjects}:any)=>{

    const handleSpeedChange = (index:number, value:string) => {
        const newObjects = [...objects];
        newObjects[index].speed = Math.max(0, parseFloat(value) || 0);
        setObjects(newObjects);
      };
    
    
      const toggleVisibility = (index:number) => {
        const newObjects = [...objects];
        newObjects[index].isVisible = !newObjects[index].isVisible;
        console.log(`Object ${ newObjects[index].geometry} visibility: ${newObjects[index].isVisible}`);
        setObjects(newObjects);
      };
     
    
      const toggleRotation = (index:number) => {
        const newObjects = [...objects];
        newObjects[index].isRotating = !newObjects[index].isRotating;
        setObjects(newObjects);
      };


      const sliderStyle = {
        WebkitAppearance: 'none',
        width: '100%',
        outline: 'none',
      };
    
     


    return (
        <>
        
        <div className="w-full flex  items-center h-full p-10 justify-center gap-10">
        {objects.map((obj:any, index:number) => (
          <div key={index} className="w-64 h-48 rounded-md  border  flex flex-col" >

<div className="w-full h-1/2 flex justify-between  items-center p-4 gap-2 ">
  <div className="w-1/2 h-full  flex justify-center items-center">
  <button onClick={() => toggleVisibility(index)} className="w-28 bg-blue-500 h-10 rounded-md  text-white hover:bg-blue-600">
              {obj.isVisible ? 'Hide' : 'Show'} {obj.geometry}
            </button>

           
  </div>
  <div className="w-1/2 h-full  flex justify-center items-center">
  <button onClick={() => toggleRotation(index)} className="w-32 bg-blue-500 h-10 rounded-md  text-white hover:bg-blue-600">
              {obj.isRotating ? 'Stop' : 'Start'} Rotation
            </button>
            </div>
</div>
<div className="w-full h-1/2 flex flex-col ">

<div className="w-full  h-7 justify-start pl-5 items-center text-gray-400 "> Rotation Speed:</div>
<div className="h-full  w-full flex items-center justify-center gap-3 p-5">
    <div className="w-7/12 h-full  flex items-center justify-center">
    <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={obj.speed}
                  className="w-full bg-gray-100 h-6 rounded-md "
                  style={sliderStyle}
                  onChange={(e) => handleSpeedChange(index, e.target.value)}
                />
    </div>
    <div className="w-4/12 h-full  flex justify-center items-center ">
    <input
                  type="number"
                  value={obj.speed}
                  step="0.01"
                  min="0"
                  className="w-full h-6 bg-gray-100 rounded-md p-2"
                  onChange={(e) => handleSpeedChange(index, e.target.value)}
                />
    </div>

</div>
</div>    
            
          </div>
        ))}
      </div>

        
        </>
    )
}


export default ControllerComponent