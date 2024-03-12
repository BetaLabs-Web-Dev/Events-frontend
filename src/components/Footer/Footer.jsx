import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
    <div className="footer--b">
      <div className="circle"></div>
      <div class="footer">
        <div class="footer-item">
            <div class="footer-heading">Community</div>
            <ul class="footer-links">
                <li className='footer-l'><a href="/node_modules" className='footer-a'>Community Forum</a></li>
                <li className='footer-l'><a href="/node_modules" className='footer-a'>Events</a></li>
                <li className='footer-l'><a href="/node_modules" className='footer-a'>Join Us</a></li>
            </ul>
        </div>
        <div class="footer-item">
            <div class="footer-heading">Support</div>
            <ul class="footer-links">
                <li className='footer-l'><a href="/node_modules" className='footer-a'>Help Center</a></li>
                <li className='footer-l'><a href="/node_modules" className='footer-a'>FAQs</a></li>
                <li className='footer-l'><a href="/node_modules" className='footer-a'>Contact Support</a></li>
            </ul>
        </div>
        <div class="footer-item">
            <div class="footer-heading">Contact</div>
            <ul class="footer-links">
                <li className='footer-l'><a href="/node_modules" className='footer-a'>Email Us</a></li>
                <li className='footer-l'><a href="/node_modules" className='footer-a'>Visit Us</a></li>
                <li className='footer-l'><a href="/node_modules" className='footer-a'>Contact Form</a></li>
            </ul>
        </div>
      </div>
    </div>
      <div className='copy'>Copyright2023 Beta Labs</div>
      </footer>
  )
}

export default Footer;