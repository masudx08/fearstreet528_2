import React, {useState} from 'react';
import './blog2.css';
import {newdata} from './newdata.jsx';
import { Link } from 'react-router-dom';


const Blog2 = () => {
  const [selected,setSelected] =useState(null);
  const toggle = i => {
    if(selected === i)
    {
      return setSelected(null); 
    }

    setSelected(i);
  }
 
  return(
    <div  id ='blog2'>
      <h1 className='gradienttext'></h1>
      <div className = "accordion">
        {newdata.map((item,i)=>(
          <div className = "item">
            <div className= "title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>              
            </div>
            <div className = {selected === i ? 'content show' : 'content'}>
              {item.answer}
            </div>
            </div>
             
  ))}

<Link to = "newdata" target = "_blank"> 
               </Link> 
      </div>
    </div>
    
  )
};

export default Blog2;