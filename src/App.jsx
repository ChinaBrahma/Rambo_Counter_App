import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCount] = useState(10)
  // let counter = 10;

  const increase=()=>{
    if(counter<20){
      counter = counter + 1;
      setCount(counter)
      console.log("Increased :"+counter)
    }else{
        alert('Limit exceeded, more than '+{counter});
    }
    
  };
  const decrease=()=>{
    if(counter != 0){
      counter = counter - 1;
      setCount(counter)
      console.log("Decreased :"+counter)
    }else{
      alert('Rambo can do better, atleast 1 job')
    }
  };

  return (
    <>
      <div className='card'>
     <h1>Rambo is on fire</h1>

     <h3>Rambo has {counter} income stream</h3>
     <button className='b1'
      onClick={increase} 
    >More</button>
     <button
      className='b1'
      onClick={decrease}
     >Less</button>


     <p>Working on over {counter} of high paying jobs.</p>
     </div>
    </>
  )
}

export default App
