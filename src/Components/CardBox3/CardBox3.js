import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark, faBullhorn, faGamepad} from '@fortawesome/free-solid-svg-icons'
import "./Cardbox3.scss"
import LargeCard from '../LargeCard/LargeCard'

import largeCardImg from "../../assets/images/largeCard2.jpg"
import largeCardImg2 from "../../assets/images/LargeCard3.jpg"
import avatar from "../../assets/images/11.jpg"


const largecard1 = {
    img: largeCardImg,
    avatar: avatar,
    btnType: " btn badge bg-primary",
    btn: 'Business',
    title: ' Never underestimate the influence of social media',
    userName: 'Louis',
    date: 'Jan 26, 2022',
    time: '3'
  }
  const largecard2 = {
    img: largeCardImg2,
    avatar: avatar,
    btnType: " btn badge bg-primary",
    btn: 'Business',
    title: ' Never underestimate the influence of social media',
    userName: 'Louis',
    date: 'Jan 26, 2022',
    time: '3'
  }

function CardBox3() {
  return (
    <div className="cardBox3 mt-4 mb-5">

       <div className="box3-container">


       <div className="card-box3-title">
            
            <h3 className='m-0'>
                <FontAwesomeIcon icon={faGamepad} className='me-3'/>
                Sports update</h3>
            <p>Get the latest sports news and updates from football, tennis, formula one, cricket, NBA, and golf with live scores and stats</p>
        </div>
        <div className="card-box3-main">
            <div className="row">
                <div className="col col-6 ">
                    <LargeCard card= {largecard1}/>
                </div>
                <div className="col col-6 ">
                    <LargeCard card= {largecard2}/>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CardBox3