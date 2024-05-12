import React from 'react'
import './Footer.css'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './Footer.css'
import {MdOutlineEmail} from 'react-icons/md'
import { RxResume } from "react-icons/rx"


function Footer() {
    const handleEmailClick = () => {
      window.location.href = 'mailto:haichaoy953@gmail.com?subject=Hire Greeting&body=Hi Haichao!';
    };

    return (
        <section id='footer'>
        <footer>
            <a href ='#home' className='footer-logo'>Haichao Yang</a>
            <div className='footer-resume'>
              <RxResume className='resume-icon'/>
              <a href='https://drive.google.com/file/d/11NrHzuAFMtH2IeWtRgJ4w9zenW3gC7U5/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='resume-link'>See My Resume</a>
            </div>
            <div className='footer-email'>
              <MdOutlineEmail className='email-icon'/>
              <a href="mailto:haichaoy953@gmail.com" onClick={handleEmailClick} className='email-address'>haichaoy953@gmail.com</a>
            </div>
            <div className="footer-social-apps">
              <a href="https://www.linkedin.com/in/haichao-yang-abc/" target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
              <a href="https://github.com/haichao-joy" target='_blank' rel="noopener noreferrer"><BsGithub/></a>
              <a href="https://www.instagram.com/haichao.yang.33/" target='_blank' rel="noopener noreferrer"><BsInstagram/></a>
            </div>
            <div className="footer-copyright">
                <div><small>Copyright © 2024 Haichao Yang.  All Rights Reserved</small></div>
                <div className='footer-small-text'><small>This website is still a work in progress, more contents adding on</small></div>
            </div>
        </footer>
        </section>
      )

}

export default Footer;