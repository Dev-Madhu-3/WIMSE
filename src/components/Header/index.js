import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons
import './index.css'


function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return (
        <nav className='navbar'>
            <img className='logo' src='' alt='LOGO' />
            <ul className={isMobileMenuOpen ? 'nav-links-mobile expand' : 'nav-links'}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="mobile-menu-icon" onClick={toggleMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Change icon based on state */}
            </button>
        </nav>
    )
}

export default Header