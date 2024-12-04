import data from './data'
import Canvas from './Canvas'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

const App = () => {
  
  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, [])
  
  return (<>
    <div className="w-full relative min-h-screen">
      {data[0].map((item, index) => (
        
        <Canvas key={index} details={item} />
      ))}
    </div>

    <div className="w-full relative min-h-screen">
      {data[1].map((item, index) => (
        
        <Canvas key={index} details={item} />
      ))}
    </div>
    <div className="w-full relative min-h-screen">
      {data[2].map((item, index) => (
        
        <Canvas key={index} details={item} />
      ))}
    </div>
    <div className="w-full relative min-h-screen">
      {data[3].map((item, index) => (
        
        <Canvas key={index} details={item} />
      ))}
    </div>
    <div className="w-full relative min-h-screen">
      {data[4].map((item, index) => (
        
        <Canvas key={index} details={item} />
      ))}
    </div>
      
      </>
  )
}

export default App