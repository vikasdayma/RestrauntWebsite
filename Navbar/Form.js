import React ,{useState}from 'react'
import './Form.css' 

import { Link } from 'react-router-dom';
const Form = () => {
  const[title,setTitle]=useState([]);
  const[getval,setval]=useState();
 
  const clickHandler =()=>{
    
    setTitle([getval]);
    console.log(title)

  }
  const changeHandler =(event)=>{
    setval(event.target.value);
   
  }

  const submitHandler =(event)=>{
    event.preventDefault();
  }
  return (

    <div className='form'>
    <div className='form-text'>
      <h3>Join Us</h3>
      <br />
      <form id="login-form" action='submit' onSubmit={submitHandler}>
            {/* <input type="email" on placeholder="Email" onChange={changeHandler} required/> */}
            {/* <input type="password" placeholder="Password" onChange={changeHandler2} required/> */}
            <h2>Create Your Account </h2>
            <br />
            <button id='signup'  onClick={clickHandler} type="submit"> <Link to="password" className='continue'> Sign Up</Link></button>
        
        </form> 
     <br />
     
     <span className='login'>
      <p>Already have a  an account? </p>  <Link className='login-button' to="login">  Login</Link>
      </span>
      <br />
       <p>  ________________ Or ________________</p>
      <br />
      <Link to="/form/password" className='text-dec-none'>
      <span className='google'>
        <img src="google.png" height={16} alt="" /> 
     <p>Continue With   Google </p>   
      </span>
      <span className='google'>
        <img src="microsoft-logo.png" height={15} alt="" /> <p>Continue With  Microsoft </p>   
      </span>
      <span className='google'>
        <img src="Applelogo.png" height={17} alt="" /> <p className='apple-text'>Continue With   Apple</p>   
      </span>
      </Link>
       
    </div>
 
    </div>
   
  )
}

export default Form
