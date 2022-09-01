import React from 'react'
import './cards.css';

const Cards_right = (props) => {
  return (
    <div  className='services-card'>
    
     <div className='right'>
       <h1>{props.title}</h1>
       <p>{props.desc}</p>
     </div>
     <div className='left'>
     <img src={props.image}></img>
     </div>
   </div>
  )
}

export default Cards_right