import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  { id: 1, image: "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739542914/88_bz6wl4.jpg", text: 'First Slide' },
  { id: 2, image: "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739542914/2147617635_dgtlqj.jpg", text: 'Second Slide' },
  { id: 3, image: "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739542914/uwp4587535_acsgxg.jpg", text: 'Third Slide' },
  { id: 4, image: "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739542914/pexels-emily-ranquist-493228-1205651_ovdauq.jpg", text: 'Fourth Slide' },
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
      {slides.map((each, idx) => <SwiperSlide key={idx}>
        <div className="slide-content" style={{ backgroundImage: `url(${each.image})` }}>
          <h2 className="animated-text fade-in">Your Text Goes Here</h2>
          <p className="animated-text slide-up">{each.text}</p>
        </div>
      </SwiperSlide>)}

    </Swiper>
  )
}

export default ImageSlider