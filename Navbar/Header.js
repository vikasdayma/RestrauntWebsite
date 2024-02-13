import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
   <>
  <div className='header'>
    <div className='header-text'>
      <h1 className='delicious'> Delicious</h1>
      <span className='explore'>
      <h1 > Indian Food</h1> 
      <Link to='menu'>  <button>Explore </button></Link>
      </span>
       <br />
      <p>Lorem ipsum dolor sit amet, recusandae natus dolores impedit accusantium eaque. Temporibus itaque sed molestias At, magni.</p>
    </div>
    <div>
   <img src="chef1.jpg" height={440} width={600}  alt="" />
  </div>
  </div>

   </>  
 )
}
export default Header
