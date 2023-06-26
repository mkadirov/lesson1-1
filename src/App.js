import React, {useState} from 'react'
import './App.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Button, Card, Container, Modal, Nav, Navbar, } from 'react-bootstrap';
import Header from './Components/Header';
import Carousel from './Components/Carousel/Carousel';
import CardSlider from './Components/Card-Slider/CardSlider';
import adv1 from "./assets/images/adv-3.png"
import CardBox1 from './Components/CardBox1/CardBox1';
import CardBox2 from './Components/CardBox2/CardBox2';
import CardBox3 from './Components/CardBox3/CardBox3';
import CardBox4 from './Components/CardBox4/CardBox4';
import AdvBox from './Components/AdvBox/AdvBox';
import Footer from './Components/Footer/Footer';



function App() {

  
  
  return (
   <div className="App">

     <Header/>
     
     <Carousel/>
     
     <CardSlider/>

     <div className="adv-box mb-5">
        <div className="text-center adv1 ">
            <img className='light-mode-item' src={adv1} alt="" />
         </div>
     </div>

     <CardBox1/>

     <CardBox2/>
     <CardBox3/>
     <CardBox4/>
     <AdvBox/>
     <Footer/>

   </div>

  );
}

export default App;
