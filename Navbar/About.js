import React,{useState} from 'react'
import './About.css'
const About = () => {
  
  const[get,set]=useState('hide'); 
  const[visible,hidden1] =useState('text')
   const clickHandler=()=>{
       hidden1('hide')
     set('text')
  }
  return (

     <>
 
      <br />
<div className='main-menu'>
 <div className='menu-img'><img style={{height:"25rem", width:"25rem"}} src="Back.png"   alt=""  /></div>
 <div className='about-text'>
 <br />
 <h2>Why Choose Us?</h2>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus magni voluptatum fuga sed aliquid incidunt obcaecati soluta esse, odio mollitia quia dolore maiores laboriosam animi adipisci quod saepe reprehenderit.      
     <br />
    </p>
    <br />
    <p>        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea voluptas placeat laudantium omnis in non, iste ut reiciendis, porro laboriosam quis, repellat velit eius! Ducimus, autem? Temporibus, eius consequatur
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea voluptas placeat laudantium omnis in non, iste ut reiciendis, porro laboriosam quis, repellat velit eius! Ducimus, autem? Temporibus, eius consequatur.
      </p>
        <br />
        <p className={get} >        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea voluptas placeat laudantium omnis in non, iste ut reiciendis, porro laboriosam quis, repellat velit eius! Ducimus, autem? Temporibus, eius consequatur
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea voluptas placeat laudantium omnis in non, iste ut reiciendis, porro laboriosam quis, repellat velit eius! Ducimus, autem? Temporibus, eius consequatur.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea voluptas placeat laudantium omnis in non, iste ut reiciendis, porro laboriosam quis, repellat velit eius! Ducimus, autem? Temporibus, eius consequatur.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea voluptas placeat laudantium omnis in non, iste ut reiciendis, porro laboriosam quis, repellat velit eius! Ducimus, autem? Temporibus, eius consequatur.
        .
        <br />
        .
        <br />
        Thank-You  . . . . . 
      </p>
        <button onClick={clickHandler}  id='learnmore' className={visible} >Learn More</button>
    
        </div>
   </div>
    </>
  )
}

export default About
