import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter=15
  const addValue = ()=>{
    console.log("Value Added",Math.random());
    counter+=1;
    setCounter(counter)
    console.log(counter);
  }
  const removeValue=()=>{
    console.log("Value removed",)
    counter-=1;
    setCounter(counter)
    console.log(counter)
  }

  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}
    >Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}
export default App
