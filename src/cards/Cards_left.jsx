import React from 'react'
import './cards.css';

const Cards_left = (props) => {
  return (
  <section id="ux">
    <div  className='services-card' data-aos="fade-left" data-aos-duration="2000" data-aos-offset="500">
    <div className='left'>
     <img src={props.image}></img>
     </div>
     <div className='right'>
       <h1>{props.title}</h1>
       <p>{props.desc}</p>
     </div>
   </div>
   </section>
  )
}

export default Cards_left