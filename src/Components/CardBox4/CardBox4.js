import React from 'react'
import "./CardBox4.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark, faBullhorn, faGamepad} from '@fortawesome/free-solid-svg-icons'

import avatar1 from "../../assets/images/11.jpg"
import avatar2 from "../../assets/images/10.jpg"
import avatar3 from "../../assets/images/13.jpg"
import avatar4 from "../../assets/images/12.jpg"
import small1 from "../../assets/images/small1.jpg"
import small2 from "../../assets/images/small2.jpg"
import small3 from "../../assets/images/small3.jpg"
import small4 from "../../assets/images/small4.jpg"
import SmallCard from '../SmallCard/SmallCard'


function CardBox4() {

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
        {
            img: small4,
            btnType: "badge bg-warning bg-opacity-10 text-warning mb-2",
            btn: 'Technology',
            title: 'Around the web: 20 fabulous infographics',
            avatar: avatar4,
            userName: 'Jacqueline',
            date: 'Nov 11, 2022'
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

  return (
    <div className="cardBox4 mt-5 mb-5">
        <div className="card-box4-container">
            <div className="card-box4-title mb-3">
                <h3>
                    <FontAwesomeIcon icon={faBullhorn}/>
                   Sponsored news
                </h3>
            </div>
            <div className="card-box4-main">
                <div className="row">

                    {
                        cardList.map(card => {
                            return(
                                <div className="col col-6">
                                    <SmallCard card = {card}/>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    </div>
  )
}

export default CardBox4