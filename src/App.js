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


function App() {
  const [openedApplyForm, changeApplyFormStatus] = useState(false)
  const [isThemeDark, updateTheme] = useState(false)
  const [courseName, updateCourceName] = useState('')
  const [activeCourseTab, changeActiveCourseTab] = useState('')

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
            <Route path='/courses' element={<CoursesRoute />} />
            <Route path='/student-support' element={<StudentSupport />} />
            <Route path='/about' element={<AboutRoute />} />
            <Route path='/universities' element={<UniversitiesRoute />} />
          </Routes>
        </BrowserRouter>
        {openedApplyForm && <ApplyForm />}
      </AppContext.Provider>

    </HelmetProvider>
  )
}

export default App