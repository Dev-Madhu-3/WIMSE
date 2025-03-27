import './index.css'
import { Helmet } from "react-helmet-async"
// import { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from '../Slider'
import Welcome from '../Welcome'
import WhyChooseUsSection from '../WhyChooseUs'
import Footer from '../Footer'
import Header from '../Header'
import FeedbackSection from '../StudentsFeedback'
import CoursesSection from '../CoursesSection'
import DoubtsSection from '../DoubtsSection'
import {Universities} from '../UniversitiesRoute'
import { FaRegSmile } from "react-icons/fa"
import { LuNotepadText } from "react-icons/lu"
import { MdPeopleOutline } from "react-icons/md"
import { LiaUniversitySolid } from "react-icons/lia"
import { Zoom } from 'react-awesome-reveal'



function Home() {
    // const [coursesCount, setCoursesCount] = useState(0)
    // const [studentsCount, setStudentsCount] = useState(0)
    // const [clientsCount, setClientsCount] = useState(0)
    // const [univercityCount, setUnivercityCount] = useState(0)


    // useEffect(()=>{
    //    TotalCourses=25
    //    TotalStudents=78
    //    TotalClients=80
    //    TotalUnivercity=15
    //    const timer1 = setInterval(()=>{
    //     if(coursesCount<=TotalClients){

    //     }
    //     setClientsCount()
    //     setCoursesCount()
    //     setStudentsCount()
    //     setUnivercityCount()

    //    },10)
    //    const timer2 = setInterval(()=>{
    //     if(coursesCount<=TotalClients){

    //     }
    //     setClientsCount()
    //     setCoursesCount()
    //     setStudentsCount()
    //     setUnivercityCount()

    //    },10)
    //    const timer = setInterval(()=>{
    //     if(coursesCount<=TotalClients){

    //     }
    //     setClientsCount()
    //     setCoursesCount()
    //     setStudentsCount()
    //     setUnivercityCount()

    //    },10)
    //    const timer = setInterval(()=>{
    //     if(coursesCount<=TotalClients){

    //     }
    //     setClientsCount()
    //     setCoursesCount()
    //     setStudentsCount()
    //     setUnivercityCount()

    //    },10)
    // })

    const AwardsWonSection = () => (
        <div className='awards-won'>
            <Zoom cascade damping={0.2}>
                <div className='center-text'>
                    <FaRegSmile className='awards-won-icon' />
                    <p className='awards-won-heading'>78+</p>
                    <p className='awards-won-text'>Happy Students</p>
                </div>
                <div className='center-text'>
                    <LuNotepadText className='awards-won-icon' />
                    <p className='awards-won-heading'>25</p>
                    <p className='awards-won-text'>Our Courses</p>
                </div>
                <div className='center-text'>
                    <MdPeopleOutline className='awards-won-icon' />
                    <p className='awards-won-heading'>80</p>
                    <p className='awards-won-text'>Our Clients</p>
                </div>
                <div className='center-text'>
                    <LiaUniversitySolid className='awards-won-icon' />
                    <p className='awards-won-heading'>15+</p>
                    <p className='awards-won-text'>Universities</p>
                </div>
            </Zoom>


        </div>
    )


    return (
        <>
            <Helmet>
                <meta name="description" content="We Offering Best Service on Online and Distance Education" />
                <meta name="keywords" content="Distance Education, Offline, Traditional Course, Post Graduation,pg,Ug,Under Graduation" />
            </Helmet>
            <div className='main-container'>
                <div className='home'>
                    <Header />
                    <main>
                        <Slider />
                        <Welcome />
                        <CoursesSection />
                        <Universities />
                        <AwardsWonSection />
                        <WhyChooseUsSection />
                        <FeedbackSection />
                        <DoubtsSection />
                    </main>
                    <Footer />
                </div>

                <div className='behind-layer'>
                    <img
                        className='image1'
                        src='https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739542914/pexels-emily-ranquist-493228-1205651_ovdauq.jpg'
                        alt='no-img1'
                    />
                    <img
                        className='image2'
                        src='https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739937496/kriti_shetty_ko4qj0.jpg'
                        alt='no-img2'
                    />
                </div>
            </div>
        </>
    )
}

export default Home
