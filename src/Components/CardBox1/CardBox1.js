import React from 'react'
import "./CardBox1.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark, faBullhorn} from '@fortawesome/free-solid-svg-icons'
import LargeCard from '../LargeCard/LargeCard'
import SmallCard from '../SmallCard/SmallCard'
import avatar1 from "../../assets/images/11.jpg"
import avatar2 from "../../assets/images/10.jpg"
import avatar3 from "../../assets/images/13.jpg"
import avatar4 from "../../assets/images/12.jpg"
import small1 from "../../assets/images/small1.jpg"
import small2 from "../../assets/images/small2.jpg"
import small3 from "../../assets/images/small3.jpg"
import small4 from "../../assets/images/small4.jpg"

import largeCardImg from "../../assets/images/largCard1.jpg"
import avatar from "../../assets/images/11.jpg"

function CardBox1() {

  const cardList = [
    {
      img: small1,
      btnType: "badge bg-danger bg-opacity-10 text-danger mb-2",
      btn: 'Lifestyle',
      title: 'The pros and cons of business agency',
      avatar: avatar1,
      userName: 'Samuel',
      date: 'Jan 22, 2022'
    },
    {
      img: small2,
      btnType: "badge bg-info bg-opacity-10 text-info mb-2",
      btn: 'Sport',
      title: "5 reasons why you shouldn't startup",
      avatar: avatar2,
      userName: 'Samuel',
      date: 'Mar 07, 2022'
    },
    {
      img: small3,
      btnType: "badge bg-success bg-opacity-10 text-success mb-2",
      btn: 'Business',
      title: 'Five unbelievable facts about money',
      avatar: avatar3,
      userName: 'Samuel',
      date: 'Jun 17, 2022'
    },
    {
      img: small4,
      btnType: "badge bg-warning bg-opacity-10 text-warning mb-2",
      btn: 'Technology',
      title: 'Around the web: 20 fabulous infographics',
      avatar: avatar4,
      userName: 'Jacqueline',
      date: 'Nov 11, 2022'
    },
  ]


  const largecard = {
    img: largeCardImg,
    avatar: avatar,
    btnType: " btn badge bg-primary",
    btn: 'Business',
    title: ' Never underestimate the influence of social media',
    avatar: avatar3,
    userName: 'Louis',
    date: 'Jan 26, 2022',
    time: '3'
  }




  return (
    <div className="cardBoxMain">
        <div className="cardBox1">
            <div className="cardBoxTitle">
                <h2>
                    <FontAwesomeIcon icon={faBookmark}/>
                    Last week top highlights
                </h2>
                <p>Check last weeks top highlights, news, stories and headline news</p>
            </div>
           <div className="row g-5">
              <div className="col col-lg-7 col-md-12 col-sx-12">
                <LargeCard card = {largecard}/> 
              </div>
              <div className="col col-lg-5 col-md-12 col-sx-12">
               <div className="smallCards">
                  {
                    cardList.map(card=> {
                      return(
                        <SmallCard card= {card}/>
                      )
                    })
                  }
                   
               </div>
           </div>
           </div>

           
         </div>
    </div>
  )
}

export default CardBox1