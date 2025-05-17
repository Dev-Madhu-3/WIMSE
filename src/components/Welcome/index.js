import './index.css'
import { Fade } from "react-awesome-reveal"
import { courses } from '../../assets/data'
import { CoursesList } from '../../assets/data'
const Welcome = () => {


  return (
    <div className="institute-courses-container">
      <div className="institue-intro">
        <Fade cascade damping={0.2}>
          <div>

            <h1 className='institute-title animated-item slide-up'>WELCOME TO WIMSE EDUCATIONAL CONSULTANCY</h1>

            <h2 className='institute-sub-title'>EMPOWERING ACADEMIC AND CAREER SUCCESS SINCE 1995.</h2>
            <p className="institute-description">

              We're thrilled you're considering us for your educational journey.  At Wimse, we believe that education is the key to unlocking your full potential, and we're here to guide you every step of the way.
              <br /><br />
              Whether you're looking to pursue an Undergraduate degree, a Postgraduate qualification, or a Diploma, we offer a diverse range of courses through both Distance Education and Regular Admissions.
              We understand that everyone's circumstances are unique, and we strive to provide flexible learning options to suit your needs.
            </p>

          </div>
          <div className='institute-courses'>
            <Fade duration={2000}>
              {CoursesList.map((courseData, index) => (
                <div className="each-course-item" key={index}>
                  <img className='each-course-item-img' src='https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739536843/5920_y4j4ot.jpg' alt='clg' />

                  <div>
                    <h3 className='each-course-item-text-con-h3'>{courseData.title}</h3>
                    <p className='each-course-item-text-con-p'>{courseData.about}</p>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Welcome