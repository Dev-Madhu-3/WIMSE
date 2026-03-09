import React, { useContext, useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhoneSquareAlt } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'
import { BsChevronDown } from 'react-icons/bs'
import { LuGraduationCap } from 'react-icons/lu'
import AppContext from '../../Context/context'
import { courses } from '../../assets/data'
import { motion } from 'framer-motion'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisibleCourses, setVisibleCourses] = useState(false)
  const { openedApplyForm, changeApplyFormStatus, updateCourceName, changeFormTitle, activeCourseTab, changeActiveCourseTab } = useContext(AppContext)
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
    changeFormTitle("Enquire Now")
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
      <div className="flex flex-col md:flex-row md:justify-between md:items-center md:px-[10%] px-4 py-3 gap-4 bg-[var(--primary-color)] text-[0.9rem] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div
            className="absolute -bottom-10 -left-10 w-16 h-16 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center justify-center group relative z-10"
        >
          <div className="relative">
            <img
              className="w-[55px] h-[50px] sm:w-[50px] sm:h-[45px] mr-2 transition-all duration-300 drop-shadow-md"
              src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739532323/VIMS_COLLEGE_LOGO_2_copy_1_umczs1.png"
              alt="LOGO"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
          </div>
          <div>
            <h1 className="text-[#602c97] font-bold text-[25px] sm:text-[1.1rem] m-0 tracking-wide">
              WIMSE
            </h1>
            <h5 className="text-[#602c97] font-bold text-[15px] sm:text-[0.8rem] m-0 opacity-90">
              EDUCATIONAL CONSULTANCY
            </h5>
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center justify-center gap-8 sm:gap-6 relative z-10">
          {/* Call Us */}
          <motion.a
            href="tel:+917382744791"
            className="flex items-center text-black no-underline sm:gap-1 group"
            // whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <FaPhoneSquareAlt className="text-[2.5rem] sm:text-[1.5rem] mr-2 sm:mr-1 text-indigo-600 transition-all duration-300 group-hover:text-indigo-800 group-hover:animate-pulse-slow" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <p className="text-[0.8rem] sm:text-[0.6rem] font-light mb-1 sm:mb-0 text-center">
                CALL US TODAY!
              </p>
              <p className="text-[0.9rem] sm:text-[0.7rem] font-bold mt-0 text-indigo-800">
                +(91)738-274-4791
              </p>
            </div>
          </motion.a>

          {/* Open Hours */}
          <motion.div
            className="flex items-center text-black sm:gap-1"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              <GoClock className="text-[2.5rem] sm:text-[1.5rem] mr-2 sm:mr-1 text-purple-600 transition-all duration-300 group-hover:text-purple-800" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
              </div>
            </div>
            <div className="transform transition-transform duration-300 group-hover:translate-x-1">
              <p className="text-[0.8rem] sm:text-[0.6rem] font-light mb-1 sm:mb-0 text-center">
                WE ARE OPEN!
              </p>
              <p className="text-[0.9rem] sm:text-[0.7rem] font-bold mt-0 text-purple-800">
                MON-SAT 10:00-18:00
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-[#61387e] via-purple-800 to-indigo-900 shadow-xl py-1">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Desktop Nav */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center space-x-1 relative"
          >
            <Link
              onClick={() => {
                scrollToTop();
              }}
              className={`nav-link-item relative px-4 py-2 rounded-lg transition-all duration-300 ${path === "/" ? "active-link text-white font-semibold" : "text-indigo-200 hover:text-white"}`}
              to="/"
            >
              Home
            </Link>

            <Link
              onClick={() => {
                scrollToTop();
              }}
              className={`nav-link-item relative px-4 py-2 rounded-lg transition-all duration-300 ${path === "/courses/regular" ? "active-link text-white font-semibold" : "text-indigo-200 hover:text-white"}`}
              to="/courses/regular"
            >
              Regular
            </Link>

            <Link
              onClick={() => {
                scrollToTop();
              }}
              className={`nav-link-item relative px-4 py-2 rounded-lg transition-all duration-300 ${path === "/courses/phd" ? "active-link text-white font-semibold" : "text-indigo-200 hover:text-white"}`}
              to="/courses/phd"
            >
              PhD
            </Link>

            <div
              onMouseEnter={() => setVisibleCourses(true)}
              onMouseLeave={() => setVisibleCourses(false)}
              className={`relative nav-link-item ${path === "/courses/distance" ? "active-link text-white font-semibold" : "text-indigo-200 hover:text-white"}`}
            >
              <div className="flex items-center space-x-1 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300">
                <Link
                  onClick={() => {
                    scrollToTop();
                  }}
                  to="/courses/distance"
                  className="flex items-center"
                >
                  Distance Learning
                </Link>
                <BsChevronDown
                  className={`text-xs transition-transform duration-300 ${isVisibleCourses && "rotate-180"}`}
                />
              </div>

              <div
                className={`absolute left-0 top-8 mt-1 z-50 w-64  bg-gradient-to-b from-purple-800 to-indigo-900 rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform ${isVisibleCourses ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                <button
                  onClick={() => onClickCourses("")}
                  className="w-full text-left px-4 py-3 hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-3"
                >
                  <LuGraduationCap className="text-purple-300" />
                  <Link
                    onClick={() => setVisibleCourses(false)}
                    to="/courses/distance"
                    className={`${activeCourseTab === "" ? "font-bold text-white" : "text-indigo-200"}`}
                  >
                    All Courses
                  </Link>
                </button>

                {courses.map((each) => (
                  <button
                    key={each.icon}
                    onClick={() => onClickCourses(each.icon)}
                    className="w-full text-left px-4 py-3 hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-3"
                  >
                    <LuGraduationCap className="text-purple-300" />
                    <Link
                      onClick={() => setVisibleCourses(false)}
                      to="/courses/distance"
                      className={`${activeCourseTab === each.icon ? "font-bold text-white" : "text-indigo-200"}`}
                    >
                      {each.course}
                    </Link>
                  </button>
                ))}
              </div>
            </div>

            <Link
              onClick={() => {
                scrollToTop();
              }}
              className={`nav-link-item relative px-4 py-2 rounded-lg transition-all duration-300 ${path === "/universities" ? "active-link text-white font-semibold" : "text-indigo-200 hover:text-white"}`}
              to="/universities"
            >
              Universities
            </Link>

            <Link
              onClick={() => {
                scrollToTop();
              }}
              className={`nav-link-item relative px-4 py-2 rounded-lg transition-all duration-300 ${path === "/student-support" ? "active-link text-white font-semibold" : "text-indigo-200 hover:text-white"}`}
              to="/student-support"
            >
              Student Support
            </Link>

            <Link
              onClick={() => {
                scrollToTop();
              }}
              className={`nav-link-item relative px-4 py-2 rounded-lg transition-all duration-300 ${path === "/about" ? "active-link text-white font-semibold" : "text-indigo-200 hover:text-white"}`}
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

          {/* Enquiry Button (Desktop) */}
          <button
            onClick={onChangeFormStatus}
            className="hidden md:block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Enquiry Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg bg-indigo-700 hover:bg-purple-600 transition-colors duration-300"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>

        {/* 🔹 Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-purple-800 to-indigo-900 px-4 py-6 space-y-4">
            <Link
              onClick={() => {
                scrollToTop();
                toggleMenu();
              }}
              to="/"
              className="block text-white"
            >
              Home
            </Link>
            <Link
              onClick={() => {
                scrollToTop();
                toggleMenu();
              }}
              to="/courses/regular"
              className="block text-white"
            >
              Regular
            </Link>
            <Link
              onClick={() => {
                scrollToTop();
                toggleMenu();
              }}
              to="/courses/distance"
              className="block text-white"
            >
              Distance Learning
            </Link>
            <Link
              onClick={() => {
                scrollToTop();
                toggleMenu();
              }}
              to="/universities"
              className="block text-white"
            >
              Universities
            </Link>
            <Link
              onClick={() => {
                scrollToTop();
                toggleMenu();
              }}
              to="/student-support"
              className="block text-white"
            >
              Student Support
            </Link>
            <Link
              onClick={() => {
                scrollToTop();
                toggleMenu();
              }}
              to="/about"
              className="block text-white"
            >
              About Us
            </Link>

            <button
              onClick={() => {
                onChangeFormStatus();
                toggleMenu();
              }}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-lg"
            >
              Enquiry Now
            </button>
          </div>
        )}
      </header>
    </>
  );
}

export default Header
