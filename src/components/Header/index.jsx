import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FaSquarePhone } from 'react-icons/fa6'
import { GoClock } from 'react-icons/go'
import { Zoom } from 'react-awesome-reveal'
import { BsChevronDown } from 'react-icons/bs'
import { LuGraduationCap } from 'react-icons/lu'
import AppContext from '../../Context/context'
import { courses } from '../../assets/data'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisibleCourses, setVisibleCourses] = useState(false)
  const { openedApplyForm, changeApplyFormStatus, updateCourceName, changeActiveCourseTab } = useContext(AppContext)
  const path = useLocation().pathname

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const scrollToFooter = () => {
    const footer = document.getElementById('footer')
    if (footer) footer.scrollIntoView({ behavior: 'smooth' })
  }

  const onChangeFormStatus = () => {
    updateCourceName('')
    changeApplyFormStatus(!openedApplyForm)
  }

  const onClickCourses = (id) => {
    changeActiveCourseTab(id)
    toggleMenu()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Top Header */}
      <div className="flex justify-between items-center gap-1 px-[10%] py-2 bg-[var(--primary-color)] text-[0.9rem] relative sm:flex-col sm:gap-4 sm:p-1">
        {/* Logo */}
        <Link to="/" className="flex justify-center items-center">
          <img
            className="w-[55px] h-[50px] mr-2 sm:w-[50px] sm:h-[45px]"
            src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739532323/VIMS_COLLEGE_LOGO_2_copy_1_umczs1.png"
            alt="LOGO"
          />
          <div>
            <h1 className="text-[#602c97] font-bold text-[25px] mb-0 sm:text-[1.1rem]">WIMSE</h1>
            <h5 className="text-[#602c97] font-bold text-[15px] mt-0 sm:text-[0.8rem]">EDUCATIONAL CONSULTANCY</h5>
          </div>
        </Link>

        {/* Contact Info */}
        <div className="flex items-center gap-20 sm:gap-10">
          <Zoom cascade duration={1500} damping={0.2}>
            <a href="tel:+917382744791" className="flex items-center text-black/90 gap-2 sm:gap-1">
              <FaSquarePhone className="text-[2.5rem] mr-2 sm:text-[1.5rem] sm:mr-1" />
              <div>
                <p className="text-[0.8rem] font-extralight mb-1 text-center sm:text-[0.6rem]">CALL US TODAY!</p>
                <p className="text-[0.9rem] font-medium mt-0 sm:text-[0.7rem]">+(91)738-274-4791</p>
              </div>
            </a>
            <div className="flex items-center gap-2">
              <GoClock className="text-[2.5rem] mr-2 sm:text-[1.5rem] sm:mr-1" />
              <div>
                <p className="text-[0.8rem] font-extralight mb-1 sm:text-[0.6rem]">WE ARE OPEN!</p>
                <p className="text-[0.9rem] font-medium mt-0 sm:text-[0.7rem]">MON-SAT 10:00-18:00</p>
              </div>
            </div>
          </Zoom>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 flex justify-between items-center px-[12%] py-4 bg-[#61387e] shadow-md sm:px-6 sm:py-2">
        {/* Nav Links */}
        <nav
          className={`flex gap-8 sm:flex-col sm:items-start sm:absolute sm:top-[55px] sm:right-0 sm:w-full sm:bg-[var(--primary-color)] sm:overflow-hidden sm:border-b-[5px] sm:border-[#61387e] sm:transition-all sm:duration-500 sm:max-h-0 ${
            isMobileMenuOpen ? 'sm:max-h-screen sm:py-2' : ''
          }`}
        >
          <Link
            onClick={() => {
              scrollToTop()
              setIsMobileMenuOpen(false)
            }}
            className={`px-2 py-1 font-medium text-base ${
              path === '/' ? 'border-b-2 border-white text-white' : 'text-white hover:text-gray-300'
            } sm:text-black sm:w-full sm:rounded sm:px-5 sm:py-1 sm:hover:bg-[#5023836c]`}
            to="/"
          >
            Home
          </Link>

          <Link
            onClick={() => {
              scrollToTop()
              setIsMobileMenuOpen(false)
            }}
            className={`px-2 py-1 ${
              path === '/courses/regular'
                ? 'text-transparent bg-gradient-to-r from-[#f3c623] via-[#e91e63] to-[#00bcd4] bg-[length:300%_300%] bg-clip-text animate-animatedText'
                : 'text-white hover:text-gray-300'
            } font-bold sm:text-black sm:w-full sm:rounded sm:px-5 sm:py-1`}
            to="/courses/regular"
          >
            Regular
          </Link>

          {/* Courses Dropdown */}
          <div
            {...(!isMobileMenuOpen && {
              onMouseEnter: () => setVisibleCourses(true),
              onMouseLeave: () => setVisibleCourses(false),
            })}
            className={`relative px-2 py-1 ${
              path === '/courses/distance' ? 'border-b-2 border-white text-white' : 'text-white hover:text-gray-300'
            } sm:w-full`}
          >
            <div
              className="flex justify-between items-center w-full cursor-pointer"
              onClick={() => setVisibleCourses((prev) => !prev)}
            >
              <Link
                onClick={() => {
                  scrollToTop()
                  setIsMobileMenuOpen(false)
                }}
                to="/courses/distance"
                className="flex-1 no-underline"
              >
                Distance Learning
              </Link>
              <BsChevronDown
                className={`hidden sm:block mt-1 transition-transform ${
                  isVisibleCourses ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>

            <div
              className={`${
                isVisibleCourses ? 'opacity-100 visible' : 'opacity-0 invisible'
              } transition-all duration-300 flex flex-wrap items-center gap-8 p-5 bg-[var(--primary-color)] absolute top-[68px] left-[15%] w-[40%] z-10 sm:static sm:flex-col sm:items-start sm:w-full sm:p-0 sm:gap-2 sm:max-h-0 sm:overflow-hidden sm:transition-all ${
                isVisibleCourses ? 'sm:max-h-screen sm:p-2' : ''
              }`}
            >
              <button onClick={() => onClickCourses('')} className="bg-transparent border-0">
                <Link
                  onClick={() => setVisibleCourses((prev) => !prev)}
                  to="/courses/distance"
                  className="flex items-start gap-1 text-slate-500 no-underline"
                >
                  <LuGraduationCap className="text-sm mt-1" /> All Courses
                </Link>
              </button>

              {courses.map((each) => (
                <button
                  key={each.icon}
                  onClick={() => onClickCourses(each.icon)}
                  className="bg-transparent border-0"
                >
                  <Link
                    onClick={() => setVisibleCourses((prev) => !prev)}
                    to="/courses/distance"
                    className="flex items-start gap-1 text-slate-500 no-underline"
                  >
                    <LuGraduationCap className="text-sm mt-1" /> {each.course}
                  </Link>
                </button>
              ))}
            </div>
          </div>

          <Link
            onClick={() => {
              scrollToTop()
              setIsMobileMenuOpen(false)
            }}
            className={`px-2 py-1 ${
              path === '/universities'
                ? 'border-b-2 border-white text-white'
                : 'text-white hover:text-gray-300'
            } sm:text-black sm:w-full sm:rounded sm:px-5 sm:py-1`}
            to="/universities"
          >
            Universities
          </Link>

          <Link
            onClick={() => {
              scrollToTop()
              setIsMobileMenuOpen(false)
            }}
            className={`px-2 py-1 ${
              path === '/about' ? 'border-b-2 border-white text-white' : 'text-white hover:text-gray-300'
            } sm:text-black sm:w-full sm:rounded sm:px-5 sm:py-1`}
            to="/about"
          >
            About Us
          </Link>

          <div
            onClick={scrollToFooter}
            className="px-2 py-1 text-white hover:text-gray-300 sm:text-black sm:w-full sm:rounded sm:px-5 sm:py-1 cursor-pointer"
          >
            Contact
          </div>
        </nav>

        {/* Enquiry Button */}
        <button
          className="bg-[#007bff] text-white px-5 py-2 rounded border-2 border-[#007bff] hover:bg-white hover:text-[#007bff] transition sm:px-4 sm:py-1"
          onClick={onChangeFormStatus}
        >
          Enquiry Now
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="hidden sm:block text-[var(--primary-color)] text-lg"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>
    </>
  )
}

export default Header
