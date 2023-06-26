import React from 'react'
import "./KvCard.scss"

import kv1 from "../../assets/images/kv1.jpg"
import kv2 from "../../assets/images/kv2.jpg"
import kv3 from "../../assets/images/kv3.jpg"
import kv4 from "../../assets/images/kv4.jpg"
import kv5 from "../../assets/images/kv5.jpg"

function KvCard(props) {
    const card = props.card
  return (
    <div className="kvCard">
        <div className="kvCard-img-box">
            <img src={card.img} alt="" />
            <div className="kv-card-title">
            <p className='underline-hover'>{card.title}</p>
        </div>
        </div>
       
    </div>
  )
}

export default KvCard