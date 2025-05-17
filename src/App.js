import './App.css'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CoursesRoute from './components/CoursesRoute'
import UniversitiesRoute from './components/UniversitiesRoute'
import AboutRoute from './components/AboutRoute'
import StudentSupport from './components/StudentSupport'
import ApplyForm from './components/ApplyForm'
import { useEffect, useState } from 'react'
import AppContext from './components/Context/context'
import RegularRoute from './components/RegularRoute'


function App() {
  const [openedApplyForm, changeApplyFormStatus] = useState(false)
  const [isThemeDark, updateTheme] = useState(false)
  const [courseName, updateCourceName] = useState('')
  const [activeCourseTab, changeActiveCourseTab] = useState('')
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowIcon(true) // toggle visibility
    }, 4000)
  }, [])

  useEffect(() => {
    changeApplyFormStatus(!openedApplyForm)
  }, [])

  return (
    <HelmetProvider>
      <AppContext.Provider
        value={{
          openedApplyForm, isThemeDark, updateTheme, changeApplyFormStatus, courseName, updateCourceName, activeCourseTab, changeActiveCourseTab
        }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses/distance' element={<CoursesRoute />} />
            <Route path='/student-support' element={<StudentSupport />} />
            <Route path='/about' element={<AboutRoute />} />
            <Route path='/universities' element={<UniversitiesRoute />} />
            <Route path='/courses/regular' element={<RegularRoute />} />
          </Routes>
        </BrowserRouter>
        {openedApplyForm && <ApplyForm />}
        {showIcon && (
          <a href='https://wa.me/9989857197'>
            <img
              className="whatsapp-icon"
              src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1745944409/372108180_WHATSAPP_ICON_400_ilpdct.gif"
              alt="whatsapp-icon"
            />
          </a>

        )}
      </AppContext.Provider>
    </HelmetProvider>
  )
}

export default App