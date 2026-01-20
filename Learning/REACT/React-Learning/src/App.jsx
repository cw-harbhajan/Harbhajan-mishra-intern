import React, { useState } from 'react'
import axios from 'axios'
import Card from './component/Card'

const App = () => {
  localStorage.setItem('name', 'Harbhajan Mishra');
      console.log(localStorage.getItem('name'));
      const user = { 
        name: 'Harbhajan Mishra',
        age: 25,
        city: 'Delhi'
      };
      localStorage.setItem('user', JSON.stringify(user));
      console.log(JSON.parse(localStorage.getItem('user')));
      const [imageurl,setImageurl] = useState('')
       function fetchData() {
      
        setImageurl('https://images.unsplash.com/photo-1765873360499-3f7459f2ff94?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        
      }
      
      
  return (
<<<<<<< HEAD
    <div className='parent'>
      <Card user = 'Harbhajan Mishra' image = 'https://images.unsplash.com/photo-1765873360499-3f7459f2ff94?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <input onChange={(elem)=>{
        console.log("Input changed");
        console.log(elem.target.value);
      }} type="text" />
=======
    <div>
      
      
      <Card user = 'Harbhajan Mishra' image = {imageurl}/>
      <button onClick={fetchData}>Fetch Data</button>
>>>>>>> ee1632d13341f8f19566f35dfb680cec1fa778fb
    </div>
  )
}

export default App
