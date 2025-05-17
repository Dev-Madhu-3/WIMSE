import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, } from 'react-icons/fa' // Import icons from react-icons
import './index.css'
import { FaSquarePhone } from "react-icons/fa6"
import { GoClock } from "react-icons/go"
import { Zoom } from "react-awesome-reveal"
import AppContext from '../Context/context'
import { courses } from '../../assets/data'
import { BsChevronDown } from "react-icons/bs"
import { LuGraduationCap } from "react-icons/lu"



function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isVisibleCourses, setVisibleCourses] = useState(false)
    const { openedApplyForm, changeApplyFormStatus, updateCourceName, changeActiveCourseTab } = useContext(AppContext)

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const scrollToFooter = () => {
        const footer = document.getElementById("footer");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    }

    const onChangeFormStatus = () => {
        updateCourceName('')
        changeApplyFormStatus(!openedApplyForm)
    }

    const onClickCourses = (id) => {
        changeActiveCourseTab(id)
        toggleMenu()
    }

    return (
        <>
            <div className="top-header">
                <div className='logo-container'>
                    <img
                        className='logo'
                        src='https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739532323/VIMS_COLLEGE_LOGO_2_copy_1_umczs1.png'
                        alt='LOGO'
                    />
                    <div>
                        <h1 className='logo-text'>WIMSE</h1>
                        <h5 className='logo-text-span'>EDUCATIONAL CONSULTANCY</h5>
                    </div>

                </div>
                <div className="header-right">
                    <Zoom cascade duration={1500} damping={0.2}>
                        <a href='tel:+917382744791' className='header-right-inner-container'>
                            <FaSquarePhone className='top-header-icons' />
                            <div >
                                <p className='top-header-text'>CALL US TODAY!</p>
                                <p className='top-header-text-2'>+(91)738-274-4791</p>
                            </div>
                        </a>
                        <div className='header-right-inner-container'>
                            <GoClock className='top-header-icons' />
                            <div>
                                <p className='top-header-text'>WE ARE OPEN!</p>
                                <p className='top-header-text-2'>MON-SAT 10:00-18:00</p>
                            </div>
                        </div>
                    </Zoom>

                </div>
            </div>
            <header className='navbar'>

                <nav className={`nav-links ${isMobileMenuOpen ? ' nav-links-open' : ''}`}>

                    <Link onClick={scrollToTop} className='nav-link-item' to="/">Home</Link>
                    <div className='nav-link-item nav-item-courses'>
                        <div className='header-courses-dropdown-container' onClick={() => setVisibleCourses((prev) => !prev)} >
                            <Link to='/courses/distance' className='course-dropdown-icon-container no-text-decoration'>
                                Distance Learning
                            </Link>
                            <BsChevronDown className={`course-dropdown-logo ${isVisibleCourses && 'course-dropdown-logo-open'}`} />
                        </div>
                        <div className={`courses-container-header ${isVisibleCourses && 'visible'}`}>
                            <button onClick={() => onClickCourses("")} className='courses-container-header-items'>
                                <Link to='/courses/distance' className='course-dropdown-icon-container no-text-decoration text-slate-500'> <LuGraduationCap className='course-dropdown-icon' /> All Courses</Link>
                            </button>
                            {courses.map(each =>
                                <button key={each.icon} onClick={() => onClickCourses(each.icon)} className='courses-container-header-items'>
                                    <Link to='/courses/distance' className='course-dropdown-icon-container no-text-decoration text-slate-500'> <LuGraduationCap className='course-dropdown-icon' /> {each.course}</Link>
                                </button>)
                            }
                        </div>
                    </div>


                    <Link className='nav-link-item' to="/universities">Universities</Link>
                    {/* <Link className='nav-link-item' to="/student-support">Student Support</Link> */}
                    <Link className='nav-link-item' to="/about">About Us</Link>
                    <div onClick={scrollToFooter} className='nav-link-item'>Contact</div>
                    <Link className='nav-link-item highlight-text' to="/courses/regular">Regular</Link>
                </nav>
                <button className="back-now" onClick={onChangeFormStatus}>Enqiry Now</button>

                <button className="mobile-menu-icon" aria-label="Toggle Menu" onClick={toggleMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Change icon based on state */}
                </button>
            </header >
        </>
    )
}

export default Header