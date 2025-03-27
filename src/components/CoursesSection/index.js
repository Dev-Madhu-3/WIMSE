import './index.css'
import { Fade } from "react-awesome-reveal"
import { courses } from '../../assets/data'
import { Link } from 'react-router-dom'
import AppContext from '../Context/context'
import { useContext } from 'react'


const CousrseCard = ({ couresDetainls }) => {
    const { course, imageURL, icon, specializations } = couresDetainls
    const { changeActiveCourseTab } = useContext(AppContext)

    const onCourseTabUpdate = (icon) => {
        changeActiveCourseTab(icon)
        window.scrollTo({top:0,behavior:"smooth"})
    }
    return (
        <Link to="/courses" className='link-component'>
            <div onClick={() => onCourseTabUpdate(icon)} className='course-category-card'>
                <h2 className='course-category-card-name'>{course}</h2>
                <p className='course-category-card-count'>{specializations?.length} Courses</p>
                <img className='course-category-card-sticker' src={imageURL} alt='card-sticker' />
            </div>
        </Link>
    )
}
const CoursesSection = () => {



    return (

        <div className='courses-section-container'>
            <h1 className='courses-section-heading'><span className='courses-section-heading-span'>Choose</span> Your Area of Interest</h1>
            <div className='courses-category-container'>
                <Fade cascade damping={0.1}>
                <CousrseCard couresDetainls = {{course:"All Courses", imageURL:"https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739783306/MBA-7f490bed00b340e59d5859966ba7b727_exfs4t.webp", icon:"" }} />
                    {courses.map((each, idx) => <CousrseCard key={idx} couresDetainls={each} />)}
                </Fade>
            </div>
        </div>

    )
}

export default CoursesSection