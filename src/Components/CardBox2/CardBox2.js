import React from 'react'
import "./CardBox2.scss"
import KvCard from '../KvCard/KvCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import kv1 from "../../assets/images/kv1.jpg"
import kv2 from "../../assets/images/kv2.jpg"
import kv3 from "../../assets/images/kv3.jpg"
import kv4 from "../../assets/images/kv4.jpg"
import kv5 from "../../assets/images/kv5.jpg"

function CardBox2() {

    const cardList = [
        {
            img: kv5,
            title: "Travel"
        },
        {
            img: kv4,
            title: "Business"
        },
        {
            img: kv3,
            title: "Marketing"
        },
        {
            img: kv2,
            title: "Photograpy"
        },
        {
            img: kv1,
            title: "Sports"
        },
    ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 530,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    
  return (
    <div className="cardBox2">
        <div className="card-box2-container bg-light">
            <div className="box2-title d-flex justify-content-between mt-4 mb-4">
                <h3>Trending topics</h3>
                <a href="#">View all categories</a>
            </div>
            <div className="box2-main">
                
                <Slider {...settings}>
                  {
                    cardList.map(card => {
                       return(
                        <KvCard card= {card} key={new Date}/>
                       )
                    })
                  }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default CardBox2