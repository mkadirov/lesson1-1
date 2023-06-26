import React from 'react'
import './SmallCard.scss'

import small1 from "../../assets/images/small1.jpg"
import avatar1 from "../../assets/images/11.jpg"

function SmallCard(props) {
    const card = props.card;
  return (
    <div className="smallCard mb-sm-3">
        <div className="smallCardBox">
            <div className="row g-3">
                <div className="col col-4">
                    <img src={card.img} alt="" />
                </div>

                <div className="col col-8 small-card-left">
                <a href="#" class={card.btnType}>{card.btn}</a>
                <a href="#" class=" text-reset fw-bold d-block">{card.title}</a>

                <div className="card-user-box d-flex gap-3">
               <div className='avatar-rounded'>
                  <img src={card.avatar} alt="" />
               </div>
         
               <div className='d-flex align-items-center'>
                  <span>by <span className='underline-hover'>{card.userName}</span></span>
                  <span className="period me-2 ms-2"></span>
                  <span>{card.date}</span>
               </div>
               </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SmallCard