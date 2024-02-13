import React,{useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const[title,setTitle]=useState('');
    const[getval1,setval1]=useState();
    const[getval2,setval2]=useState();
    const clickHandler =()=>{
        if(mail==getval1 && password==getval2){
      setTitle("Correct");
      
        }
        else{
     setTitle("Incorrect Details")
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
    const mail='vikasdayma@gmail.com'
    const password='12345678'
  return (
    <div className='form'>
    <div className='form-text'>
      <h3>Welcome Back</h3>

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
      <p>Don't Have an  Account? </p>  <Link className='login-button' to="/form"> signup</Link>
      </span>
      <br />
     <h3>{title}</h3>
    </div>
    
    </div>
  )
}

export default Login
