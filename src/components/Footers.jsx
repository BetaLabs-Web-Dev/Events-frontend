import React from 'react'
import '../syles/Footer.css' 

const Footers = () => {
  return (
    <footer className="footer--b">
      <div className="circle"></div>
      <div class="footer">
        <div class="footer-item">
            <div class="footer-heading">Community</div>
            <ul class="footer-links">
                <li className='footer-l'><a href="#" className='footer-a'>Community Forum</a></li>
                <li className='footer-l'><a href="#" className='footer-a'>Events</a></li>
                <li className='footer-l'><a href="#" className='footer-a'>Join Us</a></li>
            </ul>
        </div>
        <div class="footer-item">
            <div class="footer-heading">Support</div>
            <ul class="footer-links">
                <li className='footer-l'><a href="#" className='footer-a'>Help Center</a></li>
                <li className='footer-l'><a href="#" className='footer-a'>FAQs</a></li>
                <li className='footer-l'><a href="#" className='footer-a'>Contact Support</a></li>
            </ul>
        </div>
        <div class="footer-item">
            <div class="footer-heading">Contact</div>
            <ul class="footer-links">
                <li className='footer-l'><a href="#" className='footer-a'>Email Us</a></li>
                <li className='footer-l'><a href="#" className='footer-a'>Visit Us</a></li>
                <li className='footer-l'><a href="#" className='footer-a'>Contact Form</a></li>
            </ul>
        </div>
      </div>
      <div className='copy'>copyright2023 Beta Labs</div>
    </footer>
  )
}

export default Footers;