import React, { useState } from 'react'
import './Navbar.css'
import { GiForkKnifeSpoon } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  let abc =  "123";
  const[getval,setval]=useState("vikas");
  const clickHandler=()=>{
     setval('red');
   
  }
  return (
    <div>
       <div className='navbar'>
      <div className='logo'>
      <GiForkKnifeSpoon style={{height:"2.4rem",width:"2.3rem",}} /> 
       <p>Foodie Web</p>

      </div>

      <div className='tags'>
         {/* <a href="/">Home</a>
      <a to="#dishesh">Dishesh</a>
      <a href="#about">About</a>
      <a href="#menu">Menu</a>
      <a href="#review">Reviews</a>
      <Link to="form" > <button onClick={clickHandler}>Login</button> </Link> 
    */}
      <Link className='a' to="/">Home</Link>
      <Link  className='a' to="dish">Dishesh</Link>
      <Link className='a' to="about">about</Link>
      <Link className='a' to="menu">menu</Link> 
      <Link className='a' to="review">review</Link> 
      
      <Link  to="form" > <button style={{marginLeft:"2rem"}}> Sign Up</button> </Link> 

      </div>

      </div> 

    </div>
  )
}

export default Navbar
