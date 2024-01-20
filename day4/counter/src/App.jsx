import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  //let counter = 5;
  

  const addValue = () =>{
    if(counter < 20){
      setCounter(counter+1);
    }
  }
  const remove = () =>{
    if(counter > 0){
      setCounter(counter-1);

    }
  }

  return (
    <>
      <h1>Mithun M</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/><br/>
      <button onClick={remove}>Remove Value</button>
    </>
  )
}

export default App
