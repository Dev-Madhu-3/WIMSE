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
import { Universities } from '../UniversitiesRoute'
import { FaRegSmile } from "react-icons/fa"
import { LuNotepadText } from "react-icons/lu"
import { LiaUniversitySolid } from "react-icons/lia"
import { LiaCertificateSolid } from "react-icons/lia";
import { Zoom } from 'react-awesome-reveal'



function Home() {


    const AwardsWonSection = () => (
        <div className='awards-won'>
            <Zoom cascade damping={0.2}>
                <div className='flex flex-col items-center'>
                    <FaRegSmile className='awards-won-icon' />
                    <p className='awards-won-heading'>15000+</p>
                    <p className='awards-won-text'>Happy Students</p>
                </div>
                <div className='flex flex-col items-center'>
                    <LuNotepadText className='awards-won-icon' />
                    <p className='awards-won-heading'>200+</p>
                    <p className='awards-won-text'>Our Courses</p>
                </div>
                <div className='flex flex-col items-center'>
                    <LiaCertificateSolid className='awards-won-icon' />
                    <p className='awards-won-heading'>25+</p>
                    <p className='awards-won-text'>Years of Excellence</p>
                </div>
                <div className='flex flex-col items-center'>
                    <LiaUniversitySolid className='awards-won-icon' />
                    <p className='awards-won-heading'>30+</p>
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
                        src='https://res.cloudinary.com/dpk6qsn0e/image/upload/v1745665861/dont-waste-time-motivational-mobile-38x68k2ukrkke1x1_gq2akx.webp'
                        alt='no-img2'
                    />
                </div>
            </div>
        </>
    )
}

export default Home
