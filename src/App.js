import './App.css';
import Tours from './Components/Tours';
import reviews from './data.js';

function App() {
  return (
    <div className="flex  flex-col w-[100vw] h-[100vh] justify-center items-center  bg-gray-200">
        <div  className="text-center" >
          <h2 className="text-4xl font-bold">Our Tours</h2>
        </div>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>      
        <Tours reviews={reviews}/>
    </div> 
  );
}

export default App;
