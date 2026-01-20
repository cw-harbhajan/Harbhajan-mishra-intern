import React from 'react'
import { useState } from 'react'


const App = () => {
 // const [age,setAge] = useState(0);
  const [obj,setObj] = useState({name:"Harbhajan", age:22});
  const btnClicked = ()=>{
    console.log(obj.name);
    console.log(obj.age);

  }
 
  return (
    <div>
      <h1>{obj.name} : {obj.age}</h1>
  
      <button onClick={btnClicked}></button>

    </div>
  )
}

export default App
