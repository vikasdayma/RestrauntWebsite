import React ,{useState} from 'react'; 
import './App.css';
import Navbar from './Navbar/Navbar';
import Header from './Navbar/Header';
import Dishesh from './Navbar/Dishesh';
import About from './Navbar/About';
import Menu from './Navbar/Menu';
import Review from './Navbar/Review';
import { Routes,Route } from 'react-router';
import Form from './Navbar/Form';
import Login from './Navbar/Login';
import Password from './Navbar/Password';
function App() {

  return (    
    <div className="App">
      <Navbar></Navbar>
    <Routes>
<Route path='/' element={<Header/>}/>
<Route path='dish' element={<Dishesh/>}/>
<Route path='about' element={<About/>}/>
<Route path='menu' element={<Menu/>}/>
<Route path='review' element={<Review/>}/>
<Route path='form' element={<Form/>}/>
<Route path='form/login' element={<Login/>} />
<Route path='form/password' element={<Password/>} />
     </Routes> 
      {/* <Navbar></Navbar>
      <Header></Header>
      <Dishesh></Dishesh>
      <About></About>
      <Menu></Menu>
     <Review></Review> */}
      {/* <Review></Review> */}
    </div>
  );
}
export default App;
