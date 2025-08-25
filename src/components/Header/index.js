import React, { useContext, useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhoneSquareAlt } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'
import { Zoom } from 'react-awesome-reveal'
import { BsChevronDown } from 'react-icons/bs'
import { LuGraduationCap } from 'react-icons/lu'
import AppContext from '../../Context/context'
import { courses } from '../../assets/data'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isVisibleCourses, setVisibleCourses] = useState(false)
    const { openedApplyForm, changeApplyFormStatus, updateCourceName, activeCourseTab, changeActiveCourseTab } = useContext(AppContext)
    const path = useLocation().pathname

    // 🔹 State for animated underline
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
    const navRef = useRef(null)

    useEffect(() => {
        const activeLink = navRef.current?.querySelector(".nav-link-item.active-link")
        if (activeLink) {
            setIndicatorStyle({
                left: activeLink.offsetLeft,
                width: activeLink.offsetWidth,
            })
        }
    }, [path])

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const onChangeFormStatus = () => {
        updateCourceName('')
        changeApplyFormStatus(!openedApplyForm)
    }

    const onClickCourses = (id) => {
        changeActiveCourseTab(id)
        if (window.innerWidth <= 991) {
            toggleMenu();
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            {/* Top Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center md:px-[10%] md:py-2 px-2 py-1 gap-4 bg-[var(--primary-color)] text-[0.9rem] relative">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        className="w-[55px] h-[50px] sm:w-[50px] sm:h-[45px] mr-2"
                        src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739532323/VIMS_COLLEGE_LOGO_2_copy_1_umczs1.png"
                        alt="LOGO"
                    />
                    <div>
                        <h1 className="text-[#602c97] font-bold text-[25px] sm:text-[1.1rem] m-0">
                            WIMSE
                        </h1>
                        <h5 className="text-[#602c97] font-bold text-[15px] sm:text-[0.8rem] m-0">
                            EDUCATIONAL CONSULTANCY
                        </h5>
                    </div>
                </Link>

                {/* Right Side */}
                <div className="flex items-center gap-20 sm:gap-10">
                    <Zoom cascade duration={1500} damping={0.2}>
                        {/* Call Us */}
                        <a
                            href="tel:+917382744791"
                            className="flex items-center text-black no-underline sm:gap-1"
                        >
                            <FaPhoneSquareAlt className="text-[2.5rem] sm:text-[1.5rem] mr-2 sm:mr-1" />
                            <div>
                                <p className="text-[0.8rem] sm:text-[0.6rem] font-light mb-1 sm:mb-0 text-center">
                                    CALL US TODAY!
                                </p>
                                <p className="text-[0.9rem] sm:text-[0.7rem] font-medium mt-0">
                                    +(91)738-274-4791
                                </p>
                            </div>
                        </a>

                        {/* Open Hours */}
                        <div className="flex items-center text-black sm:gap-1">
                            <GoClock className="text-[2.5rem] sm:text-[1.5rem] mr-2 sm:mr-1" />
                            <div>
                                <p className="text-[0.8rem] sm:text-[0.6rem] font-light mb-1 sm:mb-0 text-center">
                                    WE ARE OPEN!
                                </p>
                                <p className="text-[0.9rem] sm:text-[0.7rem] font-medium mt-0">
                                    MON-SAT 10:00-18:00
                                </p>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>

            {/* Main Navigation */}
            <header className='sticky top-0 z-40 bg-gradient-to-r from-[#61387e] via-purple-800 to-indigo-900 shadow-xl py-1'>
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <nav
                        ref={navRef}
                        className={`hidden md:flex items-center space-x-1 relative ${isMobileMenuOpen && 'nav-links-open'}`}
                    >
                        <Link
                            onClick={() => { scrollToTop(); setIsMobileMenuOpen(false) }}
                            className={`nav-link-item relative px-4 py-2 rounded-lg transition-all duration-300 ${path === '/' ? 'active-link text-white font-semibold' : 'text-indigo-200 hover:text-white'}`}
                            to="/"
                        >
                            Home
                        </Link>

                        <Link
                            onClick={() => { scrollToTop(); setIsMobileMenuOpen(false) }}
                            className={`nav-link-item relative px-4 py-2 rounded-lg transition-all duration-300 ${path === '/courses/regular' ? 'active-link text-white font-semibold' : 'text-indigo-200 hover:text-white'}`}
                            to="/courses/regular"
                        >
                            Regular
                        </Link>

                        <div
                            onMouseEnter={() => setVisibleCourses(true)}
                            onMouseLeave={() => setVisibleCourses(false)}
                            className={`relative nav-link-item ${path === '/courses/distance' ? 'active-link text-white font-semibold' : 'text-indigo-200 hover:text-white'}`}
                        >
                            <div className='flex items-center space-x-1 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300'>
                                <Link
                                    onClick={() => { scrollToTop(); setIsMobileMenuOpen(false) }}
                                    to='/courses/distance'
                                    className="flex items-center"
                                >
                                    Distance Learning
                                </Link>
                                <BsChevronDown className={`text-xs transition-transform duration-300 ${isVisibleCourses && 'rotate-180'}`} />
                            </div>

                            <div className={`absolute left-0 top-8 mt-1 w-64  bg-gradient-to-b from-purple-800 to-indigo-900 rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform ${isVisibleCourses ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                <button
                                    onClick={() => onClickCourses("")}
                                    className='w-full text-left px-4 py-3 hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-3'
                                >
                                    <LuGraduationCap className='text-purple-300' />
                                    <Link
                                        onClick={() => setVisibleCourses(false)}
                                        to='/courses/distance'
                                        className={`${activeCourseTab === "" ? 'font-bold text-white' : 'text-indigo-200'}`}
                                    >
                                        All Courses
                                    </Link>
                                </button>

                                {courses.map(each => (
                                    <button
                                        key={each.icon}
                                        onClick={() => onClickCourses(each.icon)}
                                        className='w-full text-left px-4 py-3 hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-3'
                                    >
                                        <LuGraduationCap className='text-purple-300' />
                                        <Link
                                            onClick={() => setVisibleCourses(false)}
                                            to='/courses/distance'
                                            className={`${activeCourseTab === each.icon ? 'font-bold text-white' : 'text-indigo-200'}`}
                                        >
                                            {each.course}
                                        </Link>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Link
                            onClick={() => { scrollToTop(); setIsMobileMenuOpen(false) }}
                            className={`nav-link-item relative px-4 py-2 rounded-lg transition-all duration-300 ${path === '/universities' ? 'active-link text-white font-semibold' : 'text-indigo-200 hover:text-white'}`}
                            to="/universities"
                        >
                            Universities
                        </Link>

                        <Link
                            onClick={() => { scrollToTop(); setIsMobileMenuOpen(false) }}
                            className={`nav-link-item relative px-4 py-2 rounded-lg transition-all duration-300 ${path === '/about' ? 'active-link text-white font-semibold' : 'text-indigo-200 hover:text-white'}`}
                            to="/about"
                        >
                            About Us
                        </Link>

                        {/* 🔹 Animated underline indicator */}
                        <span
                            className="absolute bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-300 rounded-full transition-all duration-300 ease"
                            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
                        />
                    </nav>

                    <button
                        onClick={onChangeFormStatus}
                        className="hidden md:block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                    >
                        Enquiry Now
                    </button>

                    <button
                        className="md:hidden text-white p-2 rounded-lg bg-indigo-700 hover:bg-purple-600 transition-colors duration-300"
                        aria-label="Toggle Menu"
                        onClick={toggleMenu}
                    >
                        {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {/* (unchanged from your version) */}
            </header>
        </>
    )
}

export default Header
