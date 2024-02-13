import React from 'react'
  import Slider from "react-slick";
  import { Link } from 'react-router-dom';
  import './Menu.css'
const Menu = () => {
  return (
    <>
    <h1 className='menu-heading'> Premium Menu</h1>
    <div className='menu'>
        <div className='img'>
    <Link to="/form" >  <img src="Thali.png" alt="" height={120} width={120} /> </Link> 
    
        </div>
        
     <div className='img'>
     <Link to='/form'> <img src="Khichdi.png" alt="" height={130} width={130} /></Link>
    
     </div>
     <div className='img'>
 <Link to='/form'><img src="Pizza.png" alt="" height={110} width={120} /> </Link>

     </div>
     <div className='img' >
<Link to='/form'> <img src="pngwing.com.png" alt="" height={110} width={120} /></Link>
     </div>
     <div className='img' >
 <Link to='/form'><img src="Momo.png" alt="" height={120} width={120} /></Link>

     </div>
    </div>
    <div className='menu-text'>
      <div>North Indian</div>
      <div> Masala Khichdi </div>
      <div>Margherita Pizza</div>
      <div>Chocklate Cake</div>
      <div> Steam  Momos </div>
    </div>

    <div className='menu'>
        <div className='img'>
        <Link to='/form'><img src="vegthali.png" alt="" height={120} width={120} /> </Link>
    
        </div>
        
     <div className='img'>
    <Link to='/form'> <img src="Dosa.png" alt="" height={120} width={120} /> </Link> 
    
     </div>
     <di className='img'>
 <Link to='/form'> <img src="Momo.png" alt="" height={110} width={120} /></Link>

     </di>
     <div className='img' >
<Link to='/form'><img src="Friedrice.png" alt="" height={110} width={120} /> </Link>

     </div>
     <div className='img' >
     <Link to="/form"> <img src="Paratha.png" alt="" height={150} width={130} /> </Link>
     </div>
    </div>
    <div className='menu-text'>
      <div>North Indian</div>
      <div> Masala Khichdi </div>
      <div>Margherita Pizza</div>
      <div>Chocklate Cake</div>
      <div> Steam  Momos </div>
    </div>
    </>
  )
}

export default Menu



