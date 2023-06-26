import React, {useState} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBullhorn} from '@fortawesome/free-solid-svg-icons'
import "./CardSlider.scss"

import imgCard1 from "../../assets/images/card1.jpg"
import imgCard2 from "../../assets/images/card2.jpg"
import imgCard3 from "../../assets/images/card3.jpg"
import imgCard4 from "../../assets/images/card4.jpg"
import imgCard5 from "../../assets/images/card5.jpg"


import avatar2 from "../../assets/images/07.jpg"
import avatar3 from "../../assets/images/08.jpg"
import avatar4 from "../../assets/images/09.jpg"
import avatar5 from "../../assets/images/10.jpg"
import avatar6 from "../../assets/images/12.jpg"

function CardSlider() {


   
    const cardList = [
        {
            image: imgCard1,
            title: '7 common mistakes everyone makes while traveling',
            avatar: avatar2,
            userName: 'Lori',
            date: 'Mar 07, 2022',
            skill: 'Marketing',
            btnType: 'primary'
        },
        {
            image: imgCard2,
            title: 'Skills that you can  learn from business',
            avatar: avatar3,
            userName: 'Joan',
            date: 'Aug 15, 2022',
            skill: 'Sport',
            btnType: 'danger'
        },
        {
            image: imgCard3,
            title: '10 tell-tale sings you need to get new business',
            avatar: avatar4,
            userName: 'Bryan',
            date: 'Jun 01, 2022',
            skill: 'Marketing',
            btnType: 'success'
        },
        {
            image: imgCard4,
            title: 'This is way this year will be the year of startups',
            avatar: avatar5,
            userName: 'Samuel',
            date: 'Dec 22, 2022',
            skill: 'Photography',
            btnType: 'primary'
        },
        {
            image: imgCard5,
            title: 'Best Pintertest Board for loarning about business',
            avatar: avatar6,
            userName: 'Dennis',
            date: 'Sep 07, 2022',
            skill: 'technology',
            btnType: 'warning'
        }
    ];


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <div className="cardSlider-box">

        <div className="cardSlider">
            <div className="mainTitle">
                <h2>
                <FontAwesomeIcon icon={faBullhorn} className='me-2' />
                    Today's top highlights
                </h2>
                <p>
                  Latest breaking news, pictures, videos, and special reports
                </p>
            </div>


            <Slider {...settings}>

            {
                cardList.map((card) => {
                    return(
                    <div className="card-box">

                    <div className="img-box">
                        <img src={card.image} alt="" />
                        <button className={`btn btn-${card.btnType} skillbtn`}>{card.skill}</button>
                    </div>

                    <div className="card-bottom pt-2 pb-2">
                        <div className="card-title">
                            <h5>{card.title}</h5>
                        </div>
                        <div className="avatar-box d-flex 
                             align-items-center justify-content-between px-2">
                            <div className="avatar-rounded">
                                <img src={card.avatar} alt="" />
                            </div>
                            <div className="info">
                                <span className='me-2'>
                                    by
                                    <span className="underline ms-1">
                                        {card.userName}
                                    </span>
                                    <span className="dot"></span>
                                    <span>
                                        {card.date}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                    )
                })
            }
           
        </Slider>





            {/* <div className="inner1" style={{transform: `translate(-${slideIndex * 35}%)`}} >

                <div className="card-box">

                    <div className="img-box">
                        <img src={imgCard1} alt="" />
                    </div>

                    <div className="card-bottom">
                        <div className="card-title">
                            <h5>Skills that you can  learn from business</h5>
                        </div>
                        <div className="avatar-box d-flex align-items-center justify-content-between">
                            <div className="avatar-rounded">
                                <img src={avatar1} alt="" />
                            </div>
                            <div className="info">
                                <span className='me-2'>
                                    by
                                    <span className="underline ms-1">
                                        Joan
                                    </span>
                                    <span className="dot"></span>
                                    <span>
                                        Jun 01. 20222
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-box">

                  <div className="img-box">
                     <img src={imgCard2} alt="" />
                  </div>

                  <div className="card-bottom">
                    <div className="card-title">
                      <h5>Skills that you can  learn from business</h5>
                    </div>
                    <div className="avatar-box d-flex align-items-center justify-content-between">
                      <div className="avatar-rounded">
                        <img src={avatar1} alt="" />
                      </div>
                    <div className="info">
                      <span className='me-2'>
                        by
                      <span className="underline ms-1">
                        Joan
                      </span>
                      <span className="dot"></span>
                      <span>
                        Jun 01. 20222
                      </span>
                     </span>
                   </div>
                      </div>
                  </div>

                </div>

                 <div className="card-box">

                  <div className="img-box">
                     <img src={imgCard3} alt="" />
                  </div>

                  <div className="card-bottom">
                    <div className="card-title">
                      <h5>Skills that you can  learn from business</h5>
                    </div>
                    <div className="avatar-box d-flex align-items-center justify-content-between">
                      <div className="avatar-rounded">
                        <img src={avatar1} alt="" />
                      </div>
                    <div className="info">
                      <span className='me-2'>
                        by
                      <span className="underline ms-1">
                        Joan
                      </span>
                      <span className="dot"></span>
                      <span>
                        Jun 01. 20222
                      </span>
                     </span>
                   </div>
                      </div>
                  </div>

                </div>

                 <div className="card-box">

                  <div className="img-box">
                     <img src={imgCard4} alt="" />
                  </div>

                  <div className="card-bottom">
                    <div className="card-title">
                      <h5>Skills that you can  learn from business</h5>
                    </div>
                    <div className="avatar-box d-flex align-items-center justify-content-between">
                      <div className="avatar-rounded">
                        <img src={avatar1} alt="" />
                      </div>
                    <div className="info">
                      <span className='me-2'>
                        by
                      <span className="underline ms-1">
                        Joan
                      </span>
                      <span className="dot"></span>
                      <span>
                        Jun 01. 20222
                      </span>
                     </span>
                   </div>
                      </div>
                  </div>

                </div>


            </div> */}

            {/* <div className="button-container text-center mt-4">
                <button className="btn btn-primary" onClick={()=>
                    updateSlideIndex(slideIndex-1)
                }>left</button>
                <button className="btn btn-primary"onClick={()=>
                    updateSlideIndex(slideIndex+1)
                }>right</button>
            </div> */}
        </div>

    </div>
  )
}

export default CardSlider