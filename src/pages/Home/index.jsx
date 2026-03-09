import { Helmet } from "react-helmet-async";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from '../../components/Slider';
import Welcome from '../../components/Welcome';
import WhyChooseUsSection from '../../components/WhyChooseUs';
import FeedbackSection from '../../components/StudentsFeedback';
import CoursesSection from '../../components/CoursesSection';
import DoubtsSection from '../../components/DoubtsSection';
import { Universities } from '../UniversitiesRoute';
import { FaRegSmile } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";
import { LiaUniversitySolid, LiaCertificateSolid } from "react-icons/lia";
import { Zoom } from 'react-awesome-reveal';

function Home() {

    const AwardsWonSection = () => (
        <div className='w-full bg-[#030013ea] text-white py-10 flex justify-center items-center gap-[10%] overflow-hidden sm:flex-col sm:gap-10'>
            <Zoom cascade damping={0.2}>
                <div className='flex flex-col items-center'>
                    <FaRegSmile className='text-[2.5rem] text-[rgb(192,50,50)] sm:text-[2rem]' />
                    <p className='text-[1.6rem] mt-2 sm:text-[1.1rem] sm:font-light'>15000+</p>
                    <p className='text-[1.2rem] text-[#cff9ff] sm:text-[1rem] sm:font-light'>Happy Students</p>
                </div>
                <div className='flex flex-col items-center'>
                    <LuNotepadText className='text-[2.5rem] text-[rgb(192,50,50)] sm:text-[2rem]' />
                    <p className='text-[1.6rem] mt-2 sm:text-[1.1rem] sm:font-light'>200+</p>
                    <p className='text-[1.2rem] text-[#cff9ff] sm:text-[1rem] sm:font-light'>Our Courses</p>
                </div>
                <div className='flex flex-col items-center'>
                    <LiaCertificateSolid className='text-[2.5rem] text-[rgb(192,50,50)] sm:text-[2rem]' />
                    <p className='text-[1.6rem] mt-2 sm:text-[1.1rem] sm:font-light'>25+</p>
                    <p className='text-[1.2rem] text-[#cff9ff] sm:text-[1rem] sm:font-light'>Years of Excellence</p>
                </div>
                <div className='flex flex-col items-center'>
                    <LiaUniversitySolid className='text-[2.5rem] text-[rgb(192,50,50)] sm:text-[2rem]' />
                    <p className='text-[1.6rem] mt-2 sm:text-[1.1rem] sm:font-light'>30+</p>
                    <p className='text-[1.2rem] text-[#cff9ff] sm:text-[1rem] sm:font-light'>Universities</p>
                </div>
            </Zoom>
        </div>
    );

    return (
        <>
            <Helmet>
                <meta name="description" content="We Offering Best Service on Online and Distance Education" />
                <meta name="keywords" content="Distance Education, Offline, Traditional Course, Post Graduation,pg,Ug,Under Graduation" />
            </Helmet>
            <div className='relative w-full'>
                <div className='w-full'>
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
                </div>

                {/* Behind Layer */}
                {/* <div className='fixed top-0 left-0 w-[100vw] h-[100vh] z-[-5] bg-gradient-to-b from-[#282828] via-[#ff4b4b] to-[#7717fd]'>
                    <img
                        className='w-full h-full sm:hidden'
                        src='https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739542914/pexels-emily-ranquist-493228-1205651_ovdauq.jpg'
                        alt='no-img1'
                    />
                    <img
                        className='w-full h-full hidden sm:inline'
                        src='https://res.cloudinary.com/dpk6qsn0e/image/upload/v1745665861/dont-waste-time-motivational-mobile-38x68k2ukrkke1x1_gq2akx.webp'
                        alt='no-img2'
                    />
                </div> */}
            </div>
        </>
    );
}

export default Home;
