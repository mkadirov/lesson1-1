import React from 'react'
import './LargeCard.scss'

import largeCardImg from "../../assets/images/largCard1.jpg"
import avatar from "../../assets/images/11.jpg"


function LargeCard(props) {

  const card = props.card;
  return (
    <div className="largecard">
        <div className="large-card-img-box">
            <img src={card.img} alt="" />
        </div>

        <div className="title-box">
            <button className={`cardBtn ${card.btnType}`}>
                <span className="dot"></span>
                {card.btn}
            </button>
            <div className="card-title">
              <h3>
              {card.title}
              </h3>
            </div>

            <div className="card-user-box">
               <div className='avatar-rounded'>
                  <img src={card.avatar} alt="" />
               </div>
         
               <div className='d-flex align-items-center'>
                  <span>by <span className='underline-hover'>{card.userName}</span></span>
                  <span className="period me-2 ms-2"></span>
                  <span>{card.date}</span>
                  <span className="period me-2 ms-2"></span>
                  <span>{card.time} min read</span>
               </div>
            </div>
        </div>
    </div>
  )
}



export default LargeCard