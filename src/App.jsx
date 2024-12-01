import data from './data'
import Canvas from './Canvas'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {data.map((item, index) => (
        <div key={index}>
        {item.map((subItem, subIndex) => (
          <Canvas key={subIndex} details={subItem} />
        ))}
        </div>
      ))}
     
     
    </div>
  )
}

export default App