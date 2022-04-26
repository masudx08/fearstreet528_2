import React, {useState} from 'react';
import './blog.css';
import {data} from './data.js';
import { Link } from 'react-router-dom';
const Blog = () => {
  const [selected, setSelected] = useState(null);
  const toggle = i => {
    if(selected === i) {
      return setSelected(null); 
    }

    setSelected(i);
  }

  return(
    <div className="wrapper section__margin" id='blog'>
      <h1 className='gradienttext'>Frequently Asked Questions</h1>
      <div className="accordion">
        {data.map((item, i)=>(
            <div className="item" key={item.id}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              {item.answer}
            </div>
          </div>
  ))}
  <Link to = "newdata" target = "_blank"> 
  <button for ="btnBox" class = "btn-area">  
               <span class = "btn1"> Show more </span>
               </button> 
               </Link> 
      </div>
    </div>
  )
};

export default Blog;
