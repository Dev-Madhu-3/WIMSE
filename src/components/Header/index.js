import React, { useContext, useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, } from 'react-icons/fa' // Import icons from react-icons
import './index.css'
import { FaSquarePhone } from "react-icons/fa6"
import { GoClock } from "react-icons/go"
import { Zoom } from "react-awesome-reveal"
import AppContext from '../../Context/context'
import { courses } from '../../assets/data'
import { BsChevronDown } from "react-icons/bs"
import { LuGraduationCap } from "react-icons/lu"
import { useLocation } from 'react-router-dom'



function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isVisibleCourses, setVisibleCourses] = useState(false)
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const { openedApplyForm, changeApplyFormStatus, updateCourceName,activeCourseTab, changeActiveCourseTab } = useContext(AppContext)
    const path = useLocation().pathname

    const navRef = useRef(null);

    useEffect(() => {
        const activeLink = navRef.current?.querySelector(".nav-link-item.text-black");
        if (activeLink) {
            const { offsetLeft, offsetWidth } = activeLink;
            setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
        }
    }, [path]);

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }



    console.log(useLocation().pathname);


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
        if (window.innerWidth <= 991) { // only close in mobile view
        toggleMenu();
    }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <div className="top-header">
                <Link to='/' className='logo-container'>
                    <img
                        className='logo'
                        src='https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739532323/VIMS_COLLEGE_LOGO_2_copy_1_umczs1.png'
                        alt='LOGO'
                    />
                    <div>
                        <h1 className='logo-text'>WIMSE</h1>
                        <h5 className='logo-text-span'>EDUCATIONAL CONSULTANCY</h5>
                    </div>

                </Link>

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

                <nav ref={navRef} className={`nav-links ${isMobileMenuOpen && ' nav-links-open'}`}>
                   {(window.innerWidth <= 991)||<span className="nav-indicator" style={indicatorStyle}></span>} 


                    <Link onClick={() => {
                        scrollToTop()
                        setIsMobileMenuOpen(false)
                    }}
                        className={`nav-link-item ${path === '/' && 'text-black'}`} to="/" >
                        Home
                    </Link>
                    <div className={`nav-link-item ${path === '/courses/regular' && 'text-black'}`}>
                        <Link onClick={() => {
                        scrollToTop()
                        setIsMobileMenuOpen(false)
                    }}
                        className=" highlight-text"
                        to="/courses/regular">
                        Regular
                    </Link>
                    </div>
                    
                    <div {...(!isMobileMenuOpen && {
                        onMouseEnter: () => setVisibleCourses(true),
                        onMouseLeave: () => setVisibleCourses(false),
                    })} className={`nav-link-item nav-item-courses ${path === '/courses/distance' && 'text-black'}`}>
                        <div className='header-courses-dropdown-container'  onClick={() => setVisibleCourses((prev) => !prev)}>
                            <Link

                                onClick={() => {
                                    scrollToTop()
                                    setIsMobileMenuOpen(false)
                                }} to='/courses/distance'
                                className={`course-dropdown-icon-container no-text-decoration`}

                            >
                                Distance Learning
                            </Link>
                            <BsChevronDown className={`course-dropdown-logo ${isVisibleCourses && 'course-dropdown-logo-open'}`} />
                        </div>
                        <div className={`courses-container-header ${isVisibleCourses && 'visible'}`}>
                            <button onClick={() => onClickCourses("")} className='courses-container-header-items'>
                                <Link onClick={() => setVisibleCourses(false)} to='/courses/distance' className={`course-dropdown-icon-container no-text-decoration text-white sm:text-black ${activeCourseTab===""?'font-bold':'font-light'}`}> <LuGraduationCap className='course-dropdown-icon' /> All Courses</Link>
                            </button>
                            {courses.map(each =>
                                <button key={each.icon} onClick={() => onClickCourses(each.icon)} className='courses-container-header-items'>
                                    <Link onClick={() => setVisibleCourses(false)} to='/courses/distance' className={`course-dropdown-icon-container no-text-decoration text-white sm:text-black ${activeCourseTab===each.icon?'font-bold':'font-light'}`}> <LuGraduationCap className='course-dropdown-icon sm: whitespace-nowrap' /> {each.course}</Link>
                                </button>)
                            }
                        </div>
                    </div>


                    <Link onClick={() => {
                        scrollToTop()
                        setIsMobileMenuOpen(false)
                    }} className={`nav-link-item ${path === '/universities' && 'text-black'}`} to="/universities">Universities</Link>
                    {/* <Link className='nav-link-item' to="/student-support">Student Support</Link> */}
                    <Link onClick={() => {
                        scrollToTop()
                        setIsMobileMenuOpen(false)
                    }} className={`nav-link-item ${path === '/about' && 'text-black'}`} to="/about">About Us</Link>
                    <div onClick={scrollToFooter} className={`nav-link-item`}>Contact</div>
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