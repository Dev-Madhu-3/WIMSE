import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { RiDoubleQuotesL, RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import { studentsFeedback } from '../../assets/data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Fade } from 'react-awesome-reveal';

const CoursesSection = () => {
    // Function to render star ratings
    const renderRating = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<RiStarFill key={i} className="text-yellow-400" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<RiStarHalfFill key={i} className="text-yellow-400" />);
            } else {
                stars.push(<RiStarLine key={i} className="text-yellow-400" />);
            }
        }

        return <div className="flex">{stars}</div>;
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <Fade triggerOnce cascade damping={0.2} direction="up" className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                        What Our Students Think
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                        Hear directly from our students about their experiences and success stories.
                    </p>
                </Fade>

                {/* Swiper Slider */}
                <Fade triggerOnce className="mt-12">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        spaceBetween={30}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        navigation={true}
                        loop={true}
                        speed={800}
                        className="py-10"
                    >
                        {studentsFeedback.map((student, idx) => (
                            <SwiperSlide key={idx} className="max-w-2xl">
                                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                                    <div className="flex flex-col items-center text-center">
                                        {/* Profile Image */}
                                        <div className="relative mb-6">
                                            <img
                                                className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-lg object-cover"
                                                src={student.profilePicture ||'https://res.cloudinary.com/dpk6qsn0e/image/upload/v1757822978/296fe121-5dfa-43f4-98b5-db50019738a7_qcz463.jpg'}
                                                alt={`${student.name}'s profile`}
                                            />
                                            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-2">
                                                <RiDoubleQuotesL className="text-white text-xl" />
                                            </div>
                                        </div>

                                        {/* Rating */}
                                        <div className="mb-4">
                                            {renderRating(student.rating || 4.5)}
                                        </div>

                                        {/* Feedback */}
                                        <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed italic">
                                            "{student.feedBack}"
                                        </p>

                                        {/* Student Info */}
                                        <div className="mt-auto">
                                            <h3 className="text-xl font-bold text-white">{student.name}</h3>
                                            <p className="text-purple-300">{student.course}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Fade>


                {/* Call to Action */}
                {/* <div className="mt-16 text-center">
                    <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1 animate-pulse">
                        <button className="bg-gray-900 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300">
                            Share Your Experience
                        </button>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default CoursesSection;