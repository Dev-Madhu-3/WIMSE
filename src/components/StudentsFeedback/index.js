import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";
import { studentsFeedback } from '../../assets/data';

const CoursesSection = () => {
    return (
        <section className='feedback-container'>
            <h2 className='feedback-container-title'>Our Happy Students Say</h2>
            <Swiper modules={[Autoplay]}
                effect="fade"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                speed={800}
            >
                {studentsFeedback.map((each, idx) => (
                    <SwiperSlide key={idx} className='feedback-card'>
                        <img className='student-profile-image' src={each.profilePicture} alt='profile' />
                        <p className='text-slate-300 text-md text-center my-3 sm:text-sm'>{each.feedBack}</p>
                        <RiDoubleQuotesL className='feedback-student-symbol' />
                        <p className='feedback-student-name'>{each.name}</p>
                        <p className='feedback-student-course'>{each.course}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default CoursesSection