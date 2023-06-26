import React, {useState, useEffect} from 'react'
import "./Carousel.scss"

import imgSlide1 from "../../assets/images/02.jpg"
import imgSlide2 from "../../assets/images/big2.jpg"
import imgSlide3 from "../../assets/images/big3.jpg"
import avatarSlide1 from "../../assets/images/11.jpg"
import avatarSlide2 from "../../assets/images/09.jpg"
import avatarSlide3 from "../../assets/images/12.jpg"
import Slide from '../Slide/Slide'

function Carousel() {
    const [index, setIndex] = useState(0);

    const images= [imgSlide1, imgSlide2, imgSlide3]

    const cards = [
        {
            img: imgSlide3,
            btnType: "warning",
            btn: 'Travel',
            title: '7 common mistakes everyone makes while traveling',
            avatar: avatarSlide1,
            userName: 'Larry',
            date: 'Feb 22, 2022',
            time: 2
        },
        {
            img: imgSlide1,
            btnType: "danger",
            btn: 'Travel',
            title: '10 tell-tale signs you need  get a new startup',
            avatar: avatarSlide2,
            userName: 'Larry',
            date: 'Feb 22, 2022',
            time: 2
        },
        {
            img: imgSlide2,
            btnType: "primary",
            btn: 'Covid-19',
            title: 'Initial problem of startups and their solution',
            avatar: avatarSlide3,
            userName: 'Dennis',
            date: 'Jun 17, 2022',
            time: 10
        },
    ]
  return (
    <div className="carousel">

        <Slide cards= {cards}  index={index} setIndex = {setIndex}/>

      <div className= "controll">
        <div className={`slide1 d-flex align-items-center gap-3 ${(index===0)? "activeSlide": ""}`} onClick={() => setIndex(0)}>
            <div className="avatar-rounded" >
                <img src={imgSlide3}/>
            </div>
            <div className='slide-title'>
                <h4>7 common mistakes everyone...</h4>
                <p> No visited raising gravity..</p>
            </div>
        </div>

        <div className={`slide1 d-flex align-items-center mt-3 mb-3 gap-3 ${(index===1)? "activeSlide": ""}`} onClick={() => setIndex(1)}>
            <div className="avatar-rounded">
                <img src={imgSlide1}/>
            </div>
            <div className='slide-title'>
                <h4>10 tell-tale signs you need...</h4>
                <p> No visited raising gravity..</p>
            </div>
        </div>

        <div className={`slide1 d-flex align-items-center gap-3 ${(index===2)? "activeSlide": ""}`} onClick={() => setIndex(2)}>
            <div className="avatar-rounded">
                <img src={imgSlide2}/>
            </div>
            <div className='slide-title'>
                <h4>Initial problem of startups...</h4>
                <p> No visited raising gravity..</p>
            </div>
        </div>

      </div>


      </div>
  )
}

export default Carousel