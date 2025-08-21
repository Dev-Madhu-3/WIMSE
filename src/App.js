import './App.css'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CoursesRoute from './pages/CoursesRoute'
import UniversitiesRoute from './pages/UniversitiesRoute'
import AboutRoute from './pages/AboutRoute'
import StudentSupport from './components/StudentSupport'
import ApplyForm from './components/ApplyForm'
import { useEffect, useState } from 'react'
import AppContext from './Context/context'
import RegularRoute from './pages/RegularRoute'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Motion from './components/Motion'
import SocialPopup from './components/SocialPopup'

function AnimatedAppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Motion><Home /></Motion>} />
        <Route path='/courses/distance' element={<Motion><CoursesRoute /></Motion>} />
        <Route path='/student-support' element={<Motion><StudentSupport /></Motion>} />
        <Route path='/about' element={<Motion><AboutRoute /></Motion>} />
        <Route path='/universities' element={<Motion><UniversitiesRoute /></Motion>} />
        <Route path='/courses/regular' element={<Motion><RegularRoute /></Motion>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [openedApplyForm, changeApplyFormStatus] = useState(false)
  const [isThemeDark, updateTheme] = useState(false)
  const [courseName, updateCourceName] = useState('')
  const [activeCourseTab, changeActiveCourseTab] = useState('')

  useEffect(() => {
    changeApplyFormStatus(!openedApplyForm)
  }, [])

  return (
    <>
      <HelmetProvider>
        <AppContext.Provider
          value={{
            openedApplyForm, isThemeDark, updateTheme,
            changeApplyFormStatus, courseName, updateCourceName,
            activeCourseTab, changeActiveCourseTab
          }}
        >
          <BrowserRouter>
            <Header />
            <AnimatedAppRoutes />
            <Footer />
          </BrowserRouter>
          {openedApplyForm ? <ApplyForm />:<SocialPopup/>}
        </AppContext.Provider>
      </HelmetProvider>
      <SpeedInsights />
      <Analytics />
    </>
  )
}

export default App
