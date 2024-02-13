import React,{useState} from 'react'
import './Dishesh.css'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Dishesh = () => {
    const abc=[0];
   const [getval,setval]=useState([]);
const clickHanlder=()=>{
    setval((oldItems)=>{
      return [...oldItems,abc];

    })
   }
  return (
    <>
  
    <br />
    <h1 style={{textAlign:"center", marginTop:"3rem" ,fontFamily:"" }} > Regular Dishesh</h1>
    
    <div className='main'>
   <div>
   <img src="img1.jpg" alt="" />
  
  <h3>Delicious Dish</h3>
  
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStarHalfAlt  style={{color:"green",}}/>
    
<p> </p>
   
   <span className='buy-now'>
    
    <p>$300 </p>
       <button  > <Link className='login-button' style={{color:"white"}} to="/form"> buy now</Link> </button>
   </span>
   
   </div>
 <div>
    <img src="img2.jpg" alt="" />
   
  <h3>Delicious Dish</h3>

   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStarHalfAlt  style={{color:"green",}}/>
    
<p> </p>
 
   <span className='buy-now'>
    
    <p>$300 </p>
    <button  > <Link className='login-button' style={{color:"white"}} to="/form"> buy now</Link> </button>
   </span>
   
 </div>
 <div>
 <img src="img3.jpg" alt="" />
 
  <h3>Delicious Dish</h3>
  
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStarHalfAlt  style={{color:"green",}}/>
    
<p> </p>
  
   <span className='buy-now'>
   
    <p>$300 </p>
    <button  > <Link className='login-button' style={{color:"white"}} to="/form"> buy now</Link> </button>
   </span>
   <br />
   <br />
 </div>
 
    </div>
   
    <div className='main'>
   <div>
   <img src="img4.jpg" alt="" />
  
  <h3>Delicious Dish</h3>
  
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStarHalfAlt  style={{color:"green",}}/>
    
<p> </p>
   
   <span className='buy-now'>
    <br />
    <p>$300 </p>
    <button  > <Link className='login-button' style={{color:"white"}} to="/form"> buy now</Link> </button>
   </span>
  
   </div>
 <div>
    <img src="img5.jpg" alt="" />
   
  <h3>Delicious Dish</h3>
 
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStarHalfAlt  style={{color:"green",}}/>
  
<p> </p>

   <span className='buy-now'>
   
    <p>$300 </p>
    <button  > <Link className='login-button' style={{color:"white"}} to="/form"> buy now</Link> </button>
   </span>

 </div>
 <div>
 <img src="img6.jpg" alt="" />
 
  <h3>Delicious Dish</h3>

   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStarHalfAlt  style={{color:"green",}}/>
   
<p> </p>
   
   <span className='buy-now'>
    
    <p>$300 </p>
    <button  > <Link className='login-button' style={{color:"white"}} to="/form"> buy now</Link> </button>
   </span>
 </div>

    </div>
   
    </>
  )
}

export default Dishesh
