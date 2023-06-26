import React from 'react'
import './AdvBox.scss'
import adv2 from "../../assets/images/adv2.png"

function AdvBox() {
  return (
    <div className="advBox">
       <div className="borderBox">
       <div className="advImgBox">
           <div className="row">
            <div className="col col-12">
            <img src={adv2} alt="" />
            </div>
            </div>

            <div className="advInfo">
            <h1>Never miss a story!</h1>
            <p>Get the freshest headlines and updates sent uninterrupted to your inbox.</p>
            <div className="formBox">
                <input type="text" className="form-control form-control-lg" 
                placeholder='Enter your email address' />

                <button className="btn btn-primary formBtn">Subscribe</button>
                
            </div>
            <p>By subscribing you agree to our <a href="#">Privacy Policy</a></p>
        </div>
        </div>
       </div>

        
    </div>
  )
}

export default AdvBox