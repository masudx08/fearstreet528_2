import React,{useState} from 'react';
import './header.css';
import bg from '../../assets/bgphoto.png'
import { AnimatePresence, motion } from 'framer-motion';
import Appointment from '../../Components/sign/appointment.jsx'

const Header = () => {
  const [showModal,setShowModal]=useState(false);
  return(


<div className='header_section_padding' id ='home'>
<Appointment showModal={showModal} setShowModal ={setShowModal}/>
<AnimatePresence exitBeforeEnter onExitComplete={()=>setShowModal(false) }/>
  <div className='header_content'>
    <motion.h1 
     initial={{x:'-99vw'}}
     animate={{x:'0'}}
     transition={{delay:1, type: 'spring'}}
    
    
    
    className='gradient_text'> Best Telemedicine portal with amazing services</motion.h1>
    <motion.p 
     initial={{x:'-99vw'}}
     animate={{x:'0'}}
     transition={{delay:1.5,duration:'2', type: 'spring'}}
    > We believe in giving life to the dream business projects and providing a hassle free experience. We've been successful in offering an extensive online platform for any business genre from starting to running and to reaching new growth parameters.</motion.p>
   
    <motion.div className='header_content_input'
    whileHover={{duration:'0',delay:0,scale:1.3}}
    initial={{x:'-100vw'}}
    animate={{x:'0'}}
    
    
    >
      <button onClick={()=> setShowModal(true)}>Book an Appointment!</button>
    </motion.div>
    
  </div>
  <motion.div 
  initial={{x:'100vw'}}
  animate={{x:'0'}}
  transition={{delay:2,duration:'2', type: 'spring'}}
   className='header-image'>

    <img src={bg} alt="" />
  </motion.div>

</div>

  )



};

export default Header;
