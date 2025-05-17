import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  { id: 1, image: "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739542914/88_bz6wl4.jpg", heading: '', text: '' },
  { id: 2, image: "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1745648052/WhatsApp_Image_2025-04-19_at_12.31.46_PM_verjfw.jpg", heading: '', text: '' },
  { id: 3, image: "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1745747015/wes-hicks-4-EeTnaC1S4-unsplash_allj7z.jpg", heading: '', text: '' },
  { id: 4, image: "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1745747016/sanket-mishra-PTv_5DNvIBI-unsplash_bw04m0.jpg", heading: '', text: '' },
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

          <h2 className="animated-text fade-in"></h2>
          <p className="animated-text slide-up">{each.text}</p>
        </div>
      </SwiperSlide>)}

    </Swiper>
  )
}

export default ImageSlider