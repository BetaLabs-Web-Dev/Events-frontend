import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer--b mt-[100px] py-10 px-[5vw] flex flex-col gap-5'>
      <div className="flex flex-row justify-between">
        <div className="circle"></div>
        <div class="flex flex-row gap-[12vw]">
          <div class="footer-item">
            <div class="footer-heading">Community</div>
            <ul class="flex flex-col gap-4">
              <li className=''><Link to="#" className='footer-a'>Community Forum</Link></li>
              <li className=''><Link to="#" className='footer-a'>Events</Link></li>
              <li className=''><Link to="#" className='footer-a'>Join Us</Link></li>
            </ul>
          </div>
          <div class="footer-item">
            <div class="footer-heading">Support</div>
            <ul class="flex flex-col gap-4">
              <li className=''><Link to="#" className='footer-a'>Help Center</Link></li>
              <li className=''><Link to="#" className='footer-a'>FAQs</Link></li>
              <li className=''><Link to="#" className='footer-a'>Contact Support</Link></li>
            </ul>
          </div>
          <div class="footer-item">
            <div class="footer-heading">Contact</div>
            <ul class="flex flex-col gap-4">
              <li className=''><Link to="#" className='footer-a'>Email Us</Link></li>
              <li className=''><Link to="#" className='footer-a'>Visit Us</Link></li>
              <li className=''><Link to="#" className='footer-a'>Contact Form</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='copy'>&copy; Copyright 2023 Beta Labs</div>
    </footer>
  )
}

export default Footer;