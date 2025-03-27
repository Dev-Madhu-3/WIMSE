import './index.css'
import { GiSmartphone } from "react-icons/gi"
import { PiCertificate } from "react-icons/pi"
import { IoBulbOutline } from "react-icons/io5"
import { Slide } from 'react-awesome-reveal'
import { keyframes } from "@emotion/react"


const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


const WhyChooseUs = () => {
    return (
        <div className='why-choose-us-container'>
            <img className='why-choose-us-img' src='https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739608201/1_cyzkyv.png' alt='student' />
            <div className='why-choose-us-inner-container'>
                <Slide keyframes={customAnimation} cascade damping={0.4}>
                    <h1 className='why-choose-us-heding animated-item slide-left'><span className='why-choose-us-heding-span'>Why</span> Choose Us?</h1>
                    <p> Our extensive experience and deep understanding of the Indian education landscape
                        enable us to provide personalized guidance, helping students navigate the complexities
                        of university applications and choose the best path to achieve their academic and career goals.
                        At Wimse, we're committed to your success, offering expert advice and support every step of the way.
                    </p>
                    <div className='why-choose-us-icons-container'>
                        <div className='why-choose-us-card'>
                            <div className='why-choose-us-icon-background red-background'>
                                <GiSmartphone className='why-choose-us-icon' />
                            </div>
                            <p className='why-choose-us-card-text'>SUPPORT</p>
                        </div>
                        <div className='why-choose-us-card'>
                            <div className='why-choose-us-icon-background black-background'>
                                <PiCertificate className='why-choose-us-icon' />
                            </div>
                            <p className='why-choose-us-card-text'>CERTIFICATION</p>
                        </div>
                        <div className='why-choose-us-card'>
                            <div className='why-choose-us-icon-background red-background'>
                                <IoBulbOutline className='why-choose-us-icon' />
                            </div>
                            <p className='why-choose-us-card-text'>FAITHFULL</p>
                        </div>

                    </div>
                </Slide>

            </div>
        </div>
    )
}

export default WhyChooseUs