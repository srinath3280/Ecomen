import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-top'>
        <div className='Footer-top-left'>
          <img src='/images/Ecomen-Logo.png' alt='' />
          <h2>Head Office</h2>
          <p>
            Ecomen Laboratories Pvt. Ltd <br/>
            B-1/2, 2nd floor, Sector-H, Aliganj, <br/>
            Lucknow – 226024, U.P. India
          </p>
        </div>
        <div className='Footer-top-right'>
          <h2>Quick links</h2>
          <div className='Footer-top-right-links'>
            <ul>
              <li>
                <a href='/'><i class="bi bi-chevron-right"></i>Home</a>
              </li>
              <li>
                <a href='/about-us'><i class="bi bi-chevron-right"></i>About Us</a>
              </li>
              <li>
                <a href='/our-services'><i class="bi bi-chevron-right"></i>Our Services</a>
              </li>
              <li>
                <a href='/laboratory'><i class="bi bi-chevron-right"></i>Laboratory</a>
              </li>
              <li>
                <a href='/contact'><i class="bi bi-chevron-right"></i>Contact Us</a>
              </li>
              <li>
                <a href='/service-sectors'><i class="bi bi-chevron-right"></i>NABET Sectors</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='Footer-bottom'>
        <div className='Footer-bottom-left'>
          <p>Copyright © 2023 <a href='/'>ECOMEN LABORATORIES PVT. LTD.</a> All Right Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer