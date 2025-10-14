import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { AnimatePresence } from 'framer-motion'
import AppContext from './Context/context'
import Home from './pages/Home'
import CoursesRoute from './pages/CoursesRoute'
import UniversitiesRoute from './pages/UniversitiesRoute'
import AboutRoute from './pages/AboutRoute'
import RegularRoute from './pages/RegularRoute'
import NotFound from './pages/NotFound'
import StudentSupport from './components/StudentSupport'
import ApplyForm from './components/ApplyForm'
import Header from './components/Header'
import Footer from './components/Footer'
import SocialPopup from './components/SocialPopup'
import ServiceUnavailable from './components/ServiceUnavailable'


function MinimalLayout({ children }) {
  return <>{children}</>
}
function MainLayout({ children }) {
  return (
    <>
      {/* <Header/> */}
      {children}
      {/* <Footer/> */}
    </>
  )
}

function AnimatedAppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/courses/distance" element={<MainLayout><CoursesRoute /></MainLayout>} />
        <Route path="/courses/regular" element={<MainLayout><RegularRoute /></MainLayout>} />
        <Route path="/universities" element={<MainLayout><UniversitiesRoute /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutRoute /></MainLayout>} />
        <Route path="/student-support" element={<MainLayout><StudentSupport /></MainLayout>} />
        <Route path="/unavailable" element={<MinimalLayout><ServiceUnavailable /></MinimalLayout>} />

        {/* NotFound Page */}
        <Route path="/not-found" element={<MinimalLayout><NotFound /></MinimalLayout>} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [openedApplyForm, changeApplyFormStatus] = useState(false)
  const [isThemeDark, updateTheme] = useState(false)
  const [courseName, updateCourceName] = useState('')
  const [activeCourseTab, changeActiveCourseTab] = useState('')
  const [formTitle, changeFormTitle] = useState('Enquire Now')

  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      changeFormTitle("Enquire Now")
      changeApplyFormStatus(!openedApplyForm)
    }, 10000)
  }, [])


  const isNotFoundPage = location.pathname === "/not-found" || location.pathname === "/unavailable"

  return (
    <>
      <HelmetProvider>
        <AppContext.Provider
          value={{
            openedApplyForm, isThemeDark, updateTheme,
            changeApplyFormStatus, courseName, updateCourceName,
            activeCourseTab, changeActiveCourseTab
            , formTitle, changeFormTitle
          }}
        >
          {/* ✅ Persistent Header & Footer */}
          {!isNotFoundPage && <Header />}

          <AnimatedAppRoutes />

          {!isNotFoundPage && <Footer />}

          {/* ✅ Show form/popup only if NOT on NotFound */}
          {!isNotFoundPage && (openedApplyForm ? <ApplyForm /> : <SocialPopup />)}
        </AppContext.Provider>
      </HelmetProvider>
      <SpeedInsights />
      <Analytics />
    </>
  )
}


export default App;
