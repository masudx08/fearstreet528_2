import React, { useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view'
import './navbar.css';
//import { Link } from 'react-router-dom';
//import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import { AnimatePresence, motion } from 'framer-motion';
import Signup from '../login/signup';
import Signin from '../login/signin';

const Navbar = () => {
  const [showModal,setShowModal]=useState(false);
  const[showModal2, setShowModal2] = useState(false);

  return <div className='navbar'>
    
  <Signin showModal={showModal2} setShowModal ={setShowModal2}/>
  <Signup showModal={showModal} setShowModal ={setShowModal}/>
  
  
< AnimatePresence exitBeforeEnter onExitComplete={()=>setShowModal(false) }/>
    
    <div className='navbar-links'>
      <div >
        <h3 className='navbar-links_logo'></h3>
        <img src={logo} alt="logo" width={40}></img>
      </div>
      <div className='navbar_links_container'>
        <p><a href='#home'> Home</a></p>        
        <p><a href='/control'> Admin</a></p>
        <p><a href='/call'>Conference</a></p>
        <ScrollIntoView selector="#what">
        <p><a href ='#whatWe'> What We Treat</a></p>
        </ScrollIntoView>  
        <p><a href='#possibility'> Help</a></p>
        <ScrollIntoView selector="#contactus">
        <p><a href='#contactus'>  Contact Us </a></p>
       </ScrollIntoView>
        <p><a href='#home'> </a></p> 


      </div>
      <div className='navbar-sign'>

      
      <motion.div className='sign_in'
    whileHover={{duration:'0',delay:0,scale:1.3}}
    initial={{x:'0'}}
    animate={{x:'0'}}
    >
    
    <button onClick={()=> setShowModal2(true)}>Sign in</button>
    </motion.div>
  <p></p>

        <motion.div className='sign_up'
    whileHover={{duration:'0',delay:0,scale:1.3}}
    initial={{x:'0'}}
    animate={{x:'0'}}
    >
    
    <button onClick={()=> setShowModal(true)}>Sign up</button>
    </motion.div>
      </div>
      <div className='navbar-menu'>
        </div>

    </div>
  </div>;
};

export default Navbar
