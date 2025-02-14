import './index.css';
import slide1 from '../../assets/back-school-university-concept-portrait-young-cheerful-male-student-with-dreads-hipster-going.jpg'
import slide2 from '../../assets/jason-goodman-Oalh2MojUuk-unsplash.jpg'
import slide3 from '../../assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg'
import slide4 from '../../assets/multiethnic-group-young-cheerful-students-walking.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  { id: 1, image: slide1, text: 'First Slide' },
  { id: 2, image: slide2, text: 'Second Slide' },
  { id: 3, image: slide3, text: 'Third Slide' },
  { id: 4, image: slide4, text: 'Fourth Slide' },
];

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      speed={800}
      className="mySwiper"
    >
      {slides.map(each => <SwiperSlide>
        <div className="slide-content" style={{ backgroundImage: `url(${each.image})` }}>
          <h2 className="animated-text fade-in">Your Text Goes Here</h2>
          <p className="animated-text slide-up">{each.text}</p>
        </div>
      </SwiperSlide>)}

    </Swiper>
  );
}

export default ImageSlider