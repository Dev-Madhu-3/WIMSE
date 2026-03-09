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
      className="w-full min-h-[350px] h-[95vh] bg-[var(--primary-color)] max-md:min-h-[25vh] max-md:h-[25vh]"
    >
      {slides.map((each, idx) => (
        <SwiperSlide key={idx}>
          <div
            className="flex flex-col justify-center items-center h-full text-black font-sans text-center p-5 bg-cover"
            style={{ backgroundImage: `url(${each.image})` }}
          >
            <h2
              className="m-0 opacity-0 animate-fade-in delay-500 text-[aliceblue] bg-[rgba(36,36,36,0.276)]"
            >
              {each.heading || '.'}
            </h2>
            <p
              className="opacity-0 animate-slide-up delay-500 text-[aliceblue] bg-[rgba(36,36,36,0.276)]"
            >
              {each.text}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
