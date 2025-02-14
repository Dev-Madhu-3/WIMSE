import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons
import './index.css'
import logoImg from "../../assets/EDUCATIONAL CONSULTANCY.png"


function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return (<>
        <div className="top-header">
            <div className="header-left">WIMSE EDUCATION</div>
            <div className="header-right">+91123456789</div>
        </div>
        <nav className='navbar'>
            <img className='logo' src={logoImg} alt='LOGO' />
            <div className={isMobileMenuOpen ? 'nav-links-mobile expand' : 'nav-links'}>
             <a href="/#home">Home</a>
             <a href="/">University</a>
             <a href="/#footer">About</a>
             <a href="/">Student Support</a>
             <a href="/">Courses</a>
             <a href="/#contact">Contact</a>
            </div>
            <button className="back-now">Book Now</button>
            
            <button className="mobile-menu-icon" onClick={toggleMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Change icon based on state */}
            </button>
        </nav>
    </>)
}
// {import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <>
//       {/* Top Header */}
//       <div className="top-header">
//         <div className="header-left">WIMSEDUCATION</div>
//         <div className="header-right">+919981-000-7788</div>
//       </div>

//       {/* Sticky Header */}
//       <nav className="sticky-header">
//         <div className="nav-links">
//           <a href="/#home">Home</a>
//           <a href="/">University</a>
//           <a href="/#footer">About</a>
//           <a href="/">Student Support</a>
//           <a href="/">Courses</a>
//           <a href="/#contact">Contact</a>
//         </div>
//         <button className="back-now">Back Now</button>
//       </nav>
//     </>
//   );
// };

// export default Header;}
export default Header