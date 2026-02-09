

import {useState} from 'react';


function SmartCounterDashboard() {
  const [counter, setCount] = useState(0)
// Increase value by 2
function addTwo()
{
  setCount(counter+2);
}
  function addValue(){
    // Apply a logic in whcih the counter value can't be greater than 20.
    if(counter<20)
    {
     
      setCount(counter+1)
    }
    else{
       alert("Count can't exceed to 20.")
    }
  }
    function removeValue(){
      // Apply a logic in whcih the counter value can't be less than 0.
      if(counter >0)
    {
      setCount(counter-1)
    }
    else{
      alert("You can't reduce the value after 0.")
    }
  }
  function reset(){
    setCount(0);
  }
  return (
    <>
    <h1>This is a counter project</h1>
    <h2>
      Current value of counter : {counter};
    </h2>
    <button onClick={addValue}>Increase count {counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>Decrease Value {counter}</button>
    <br /><br />
    <button onClick={addTwo}>Add Two {counter}</button>
    <button onClick={reset}>Reset Counter</button>
    </>
  )
}


export default  SmartCounterDashboard;