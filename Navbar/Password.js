import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Password.css'

const Password = () => {
    const[title,setTitle]=useState();
    const[getval1,setval1]=useState();
    const[getval2,setval2]=useState();
    const clickHandler =()=>{
        if(getval1 !="" && getval2 != ""){
    setTitle([getval1,getval2]);
      console.log(title)
        }
    }
    const changeHandler1 =(event)=>{
      setval1(event.target.value);
     
    }
    const changeHandler2 =(event)=>{
      setval2(event.target.value);
    
    }
    const submitHandler =(event)=>{
      event.preventDefault();
    }
  return (
    <>
    <div className='form'>
    <div className='form-text'>
      <h3>Create  Account</h3>

      <br />
      <form id="login-form" action='submit' onSubmit={submitHandler}>
            <input type="email" on placeholder="Email" onChange={changeHandler1} required/>
            <br />
            <input type="password" placeholder="Password" onChange={changeHandler2} required/>
          <br />
            <button  onClick={clickHandler} type="submit">Continue</button>
        <br />
        </form>
     <br />
     
     <span className='login'>
         <br />
         <p>Already have a  an account? </p>  <Link className='login-button' to="/form/login">  Login</Link>
      </span>
    
    </div>
    
    </div>
 
    </>
  )
}

export default Password
