import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark, faBullhorn, faFacebook, faTwitterSquare} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer>
        <div className="foot-container">
            <div className="row footer-row">
                <div className="col-md-6 col-lg-4 black">
                    <div className="footer-img-box">
                    <img src="https://blogzine.webestica.com/assets/images/logo.svg" alt="" />
                    </div>
                    <p className='mt-3'>The next-generation blog, news, and magazine theme for 
                        you to start sharing your stories today! This Bootstrap 
                        5 based theme is 
                        ideal for all types of sites that deliver the news.</p>
                    <p className=''>©2023 Webestica. <a href="#">All rights reserved</a></p>    
                </div>
                <div className="col-md-6 col-lg-3 black">
                <h5 className="mb-4 text-center">Navigation</h5>
                    <div className="row">
                        <div className="col-6">
                        
                           
                           <ul className='flex-column'>
                              <li><a href="#">Features</a></li>
                              <li><a href="#">Style Guide</a></li>
                              <li><a href="#">Contact us</a></li>
                              <li><a href="#">Get Theme</a></li>
                              <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            
                            <ul>
                              <li><a href="#">News</a></li>
                              <li><a href="#">Career</a></li>
                              <li><a href="#">Technology</a></li>
                              <li><a href="#">Startups</a></li>
                              <li><a href="#">Gadgets</a></li>
                            </ul>
                           
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 badge-box">
                <h5 className="mb-4 text-center">Browse by Tag</h5>
                   <ul>
                    <li className="list-inline-item">
                      <a href="#" class="btn badge bg-light text-success">Tech</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" class="btn badge bg-light text-danger">Gadgets</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" class="btn badge bg-light text-primary">Lifestyle</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" class="btn badge bg-light text-primary">Travel</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" class="btn badge bg-light text-primary">vaccine</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" class="btn badge bg-light text-warning">Marketing</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" class="btn badge bg-light text-warning">Business</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" class="btn badge bg-light text-success">Sports</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" class="btn badge bg-light text-danger">Covid-19</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" class="btn badge bg-light text-primary">Politics</a>
                    </li>
                   </ul>
                </div>
                <div className="col-sm-6 col-lg-2 black big">
                <h5 className="mb-4 text-center">Our Social handles</h5>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer