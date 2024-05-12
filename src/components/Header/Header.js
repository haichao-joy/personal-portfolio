import React from 'react';
import { useState } from 'react';
import './Header.css';



function Header() {
    const [activeNavLink, setActiveNavLink] = useState('#');

    return (
        <>
            <nav className="navbar-header">
                <a href ='#home' className='logo'>JOYY</a>
                <a href = "#home" onClick={() => setActiveNavLink('#')} className={activeNavLink === '#' ? 'active': ''}>Home</a>
                <a href ="#experiences" onClick={() => setActiveNavLink('#experiences')} className={activeNavLink === '#experiences' ? 'active': ''}>Experiences</a>
                <a href ="#projects" onClick={() => setActiveNavLink('#projects')} className={activeNavLink === '#projects' ? 'active': ''}>Projects</a>
                <a href ="#skills" onClick={() => setActiveNavLink('#skills')} className={activeNavLink === '#skills' ? 'active': ''}>Skills</a>
                <a href ="#contact" onClick={() => setActiveNavLink('#contact')} className={activeNavLink === '#contact' ? 'active': ''}>Contact</a>
            </nav> 
        </>
  )
}

export default Header;