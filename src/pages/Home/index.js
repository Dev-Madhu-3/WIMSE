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
import AwardsWonSection from "../../components/AwardsWonSection";

function Home() {
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
            </div>
        </>
    );
}

export default Home;
