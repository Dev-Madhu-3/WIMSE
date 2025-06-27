import './index.css'
import { useContext } from 'react'
import { FaRegCalendar } from "react-icons/fa"
import AppContext from '../../Context/context'
import { courses } from '../../assets/data'
// import { Fade } from 'react-awesome-reveal'
import { AnimatePresence, motion } from 'framer-motion'


const CoursesRoute = () => {

    const { openedApplyForm, changeApplyFormStatus, updateCourceName, activeCourseTab } = useContext(AppContext)

    const onTriggerApply = (name) => {
        changeApplyFormStatus(!openedApplyForm)
        updateCourceName(name)
    }

    const CourseCard = ({ data }) => {
        const { name, duration, semester, description, image } = data
        return (
            <div className='course-card-container'>
                <div className='course-card-image-container'>
                    <img className='course-card-image' src={image ? `${image}` : 'https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740403385/WhatsApp_Image_2025-02-24_at_18.37.33_f83a8656_avexnv.jpg'} alt='temp' />
                </div>
                <div className='course-card-content-container'>
                    <p className='course-card-course-name'>{name}</p>
                    <p className='course-card-course-mode'>(Online & Offline)</p>
                    <p className='course-card-course-discription '>{description}</p>
                    {duration && (<div className='course-card-course-duration-container'>
                        <FaRegCalendar className='course-card-course-duration-icon' />
                        <p className='course-card-course-duration'>{` ${duration} Years ( ${semester} Sem )`}</p>
                    </div>)}
                    {/* <div className='course-card-course-duration'>{`Eligibility : ${eligibility}`}</div> */}

                    <div className='course-card-button-container'>
                        <button className='course-card-button mt-3' onClick={() => onTriggerApply(name)} >Apply Now</button>
                    </div>
                </div>

            </div>
        )
    }

    const currentCourse = courses.filter(each => each.icon === activeCourseTab)[0]

    return (
        <main className='courses-main-container'>
            <div className='speacial-course-container'>
                <div className='speacial-course-heading-container'>
                    <h1 className='speacial-course-heading text-[1.3rem]'>{currentCourse ? `${currentCourse.course}` : 'All Courses'}</h1>
                </div>
                {/* <div className='courses-specializations-container'>
                        <button
                            className={`course-specialization-btn ${activeCourseTab === "" && 'course-specialization-btn-active'}`}
                            onClick={() => changeActiveCourseTab("")}
                        >
                            All Courses
                        </button>
                        {courses.map((e) =>
                            <button
                                className={`course-specialization-btn ${activeCourseTab === e.icon && 'course-specialization-btn-active'}`}
                                onClick={() => changeActiveCourseTab(e.icon)}
                            >
                                {e.course}
                            </button>
                        )}
                    </div> */}
                <div className='courses-container'>
                    <AnimatePresence>
                        {courses
                            .filter((e) => e.icon.includes(activeCourseTab))
                            .flatMap(each =>
                                each.specializations.map((course, index) => (
                                    <motion.div
                                        key={course.name + index}
                                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                    >
                                        <CourseCard data={course} />
                                    </motion.div>
                                ))
                            )}
                    </AnimatePresence>
                </div>

            </div>

        </main>
    )

}

export default CoursesRoute