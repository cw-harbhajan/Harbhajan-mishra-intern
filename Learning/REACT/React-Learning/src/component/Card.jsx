import React from 'react'
import '../index.css'
const Card = (p) => {
   
  return (
    <div>
      <div className='card'>
        <img src={p.image} alt="" />
        <h1>I am {p.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, facilis blanditiis. Sequi maiores animi laboriosam tenetur maxime, facilis facere quaerat odio dicta ipsa non earum accusantium velit repellendus vitae nesciunt?</p>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Card
