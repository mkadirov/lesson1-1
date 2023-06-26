import React, {useState} from 'react'
import "./Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown, faMoon, faEllipsis, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Carousel from '../Carousel/Carousel';

function Header() {

  const [showHome, setShowHome] = useState(true);
  const [showPages, setShowPages] = useState(true);
  const [showPost, setShowPost] = useState(true);
  const [showLifestyle, setShowLifestyle] = useState(true);

  const [theme, setTheme] = useState(false);
  

  function changeBackgroundColor(v) {
    document.body.style.backgroundColor = v? 'rgba(37, 35, 35, 0.658)': 'white';
    setTheme(v)
  }

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="https://blogzine.webestica.com/assets/images/logo.svg" alt="" />
        </div>
        <div className="navs">

          <ul>
            
            <li onMouseEnter={() => setShowHome(false)} 
                  onMouseLeave={() => setShowHome(true)}>
            <div className='menu-container' >
              <div className='trigger'>
                <a href="#">Home </a><span><FontAwesomeIcon icon={faChevronDown}/></span>
               </div>

              <div className={`dropdown ${showHome ? "hide" : "active"}`}>
               <h3>The Kiet<br/><span>Home</span></h3>
         
               </div>
              </div>
            </li>

            <li onMouseEnter={() => setShowPages(false)} 
                  onMouseLeave={() => setShowPages(true)}>
            <div className='menu-container' >
              <div className='trigger'>
                <a href="#">Pages </a><span><FontAwesomeIcon icon={faChevronDown}/></span>
               </div>

              <div className={`dropdown ${showPages ? "hide" : "active"}`}>
               <h3>The Kiet<br/><span>Pages</span></h3>
         
               </div>
              </div>
            </li>

            <li onMouseEnter={() => setShowPost(false)} 
                  onMouseLeave={() => setShowPost(true)}>
            <div className='menu-container' >
              <div className='trigger'>
                <a href="#">Post </a><span><FontAwesomeIcon icon={faChevronDown}/></span>
               </div>

              <div className={`dropdown ${showPost ? "hide" : "active"}`}>
               <h3>The Kiet<br/><span>Post</span></h3>
         
               </div>
              </div>
            </li>


            <li onMouseEnter={() => setShowLifestyle(false)} 
                  onMouseLeave={() => setShowLifestyle(true)}>
            <div className='menu-container' >
              <div className='trigger'>
                <a href="#">Lifestyle </a><span><FontAwesomeIcon icon={faChevronDown}/></span>
               </div>

              <div className={`dropdown ${showLifestyle ? "hide" : "active"}`}>
               <h3>The Kiet<br/><span>Lifestyle</span></h3>
         
               </div>
              </div>
            </li>

            <li>
            
              <div className='trigger'>
                <a href="#">Dashbord </a>
               </div>
            </li>

            <li>
                <button className=" btn btn-warning theme" onClick={() => changeBackgroundColor(!theme)}>
                <FontAwesomeIcon icon={faMoon} />
                </button>
            </li>

            <li>
            <FontAwesomeIcon icon={faEllipsis}/>
            </li>

            <li>
                <button className="btn btn-danger">Subscribe!</button>
            </li>

            <li>
               <div className='glass'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            </li>
            
          </ul>
        </div>

      </div>

     </header>
  )
}

export default Header