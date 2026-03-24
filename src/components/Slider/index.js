import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const slides = [
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1774368813/group-colleagues-with-diploma_optimized_300_laii1y.jpg",
    heading: "Unlock Your Research Potential with a PhD",
    text: "Join world-class doctoral programs with expert guidance, advanced research facilities, and opportunities to publish, innovate, and lead in your field.",
    buttonText: "Explore PhD Programs",
    buttonLink: "/courses/phd",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1766663892/sanket-mishra-PTv_5DNvIBI-unsplash_bw04m0_nq6bt3_1_optimized_200_eqswvn.jpg",
    heading: "Transform Your Future",
    text: "Discover world-class education opportunities that open doors to global careers.",
    buttonText: "Explore Programs",
    buttonLink: "/courses/regular",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1766663754/photo-1503676260728-1c00da094a0b_l54l0a.jpg",
    heading: "Flexible Learning Options",
    text: "Study at your own pace with our distance education programs designed for working professionals.",
    buttonText: "Learn More",
    buttonLink: "/courses/distance",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1766663730/photo-1524178232363-1fb2b075b655_oel7lt.jpg",
    heading: "Expert Guidance",
    text: "Our experienced counselors provide personalized advice to help you make informed decisions.",
    buttonText: "Meet Our Team",
    buttonLink: "/about",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1766663760/photo-1523240795612-9a054b0db644_veidql.jpg",
    heading: "Global Recognition",
    text: "Earn degrees from internationally recognized universities with accreditations worldwide.",
    buttonText: "View Universities",
    buttonLink: "/universities",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1766663779/photo-1434030216411-0b793f4b4173_ihdb8w.jpg",
    heading: "Career Support",
    text: "Access our extensive network of employers and career development resources to accelerate your professional growth.",
    buttonText: "Student Support",
    buttonLink: "/student-support",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1766663785/photo-1507003211169-0a1dd7228f2d_eppxqu.jpg",
    heading: "Affordable Education",
    text: "Quality education doesn't have to break the bank. Explore our scholarship and financing options.",
    buttonText: "Financial Aid",
    buttonLink: "/unavailable",
  },
];

const ImageSlider = () => {
  return (
    <div className="relative">
      <Swiper
        // direction={'vertical'}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={true}
        loop={true}
        className="w-full h-[85vh] min-h-[500px] sm:h-[70vh] md:h-[75vh] lg:h-[85vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <Fade cascade damping={0.2} direction="up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                      {slide.heading}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto animate-slide-up">
                      {slide.text}
                    </p>
                  </Fade>
                  <Link
                    to={slide.buttonLink}
                    className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-zoomInOut"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      {/* <div className="swiper-button-next text-white after:text-3xl"></div>
      <div className="swiper-button-prev text-white after:text-3xl"></div> */}

      {/* Custom Pagination */}
      {/* <div className="swiper-pagination bottom-8"></div> */}
    </div>
  );
};

export default ImageSlider;
