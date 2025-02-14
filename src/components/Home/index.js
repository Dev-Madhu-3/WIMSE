import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from '../Slider'
import Courses from '../Courses';

function Home() {
    return (
        <div className='home'>
            <Slider />
            <div className='home-heading'>
                <h1>WIMSE EDUCATIONAL<br />CONSULTANCY</h1>
                <p>EDUCATION AND JOB CONSULTANCY SERVISES</p>
            </div>
+           <Courses/>
        </div>
    )
}

export default Home
