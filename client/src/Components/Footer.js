import React from 'react';
import '../css/Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer>
    <div className='footer'>
      <div className='footer1'>
        <div className='ft1'> 
            <h5>About Us</h5>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='icons'>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                </div>
            </div>

        <div className='ft2'> <h5>Quick Links</h5>
        <ul>
            <li><Link className='link-li' to='#'>About Us</Link></li>
            <li><Link className='link-li' to='#'>Testimonials</Link></li>
            <li><Link className='link-li' to='#'>Terms of Services</Link></li>
            <li><Link className='link-li' to='#'>Privacy</Link></li>
            <li><Link className='link-li' to='#'>Contact Us</Link></li>
            </ul>
            </div>

        <div className='ft1 ft2'> <h5>Resources</h5>
        <ul>
            <li><Link className='link-li' to='#'>About Us</Link></li>
            <li><Link className='link-li' to='#'>Testimonials</Link></li>
            <li><Link className='link-li' to='#'>Terms of Services</Link></li>
            <li><Link className='link-li' to='#'>Privacy</Link></li>
            <li><Link className='link-li' to='#'>Contact Us</Link></li>
            </ul>
        </div>

        <div className='ft1 ft2'> <h5>Support</h5>
        <ul>
            <li><Link className='link-li' to='#'>About Us</Link></li>
            <li><Link className='link-li' to='#'>Testimonials</Link></li>
            <li><Link className='link-li' to='#'>Terms of Services</Link></li>
            <li><Link className='link-li' to='#'>Privacy</Link></li>
            <li><Link className='link-li' to='#'>Contact Us</Link></li>
            </ul>
        </div>

        <div className='ft1 ft2'> <h5>Company</h5>
        <ul>
            <li><Link className='link-li' to='#'>About Us</Link></li>
            <li><Link className='link-li' to='#'>Testimonials</Link></li>
            <li><Link className='link-li' to='#'>Terms of Services</Link></li>
            <li><Link className='link-li' to='#'>Privacy</Link></li>
            <li><Link className='link-li' to='#'>Contact Us</Link></li>
            </ul>
        </div>
      </div>
      <div className='footer2'>
        <p>Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by Colorlib</p>
      </div>
    </div>
    </footer>
    </>
  )
}

export default Footer;