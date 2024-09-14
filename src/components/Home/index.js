import Slider from "react-slick";
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        initialSlide: 1
    }
    return (
        <div className='home'>
            <div className='home-heading'><h1>WIMSE EDUCATIONAL<br />CONSULTANCY</h1>
                <p>EDUCATION AND JOB CONSULTANCY SERVISES</p>
            </div>
            <div className="sliders-container">
                <Slider {...settings}>
                    <div className="slider-container">
                        <img className="slides-image" src="https://wallpapers.com/images/high/kajal-agarwal-hd-floral-vines-hf1uslc5a5vkv8l6.webp" alt="Photo1" />
                    </div>
                    <div className="slider-container">
                        <img className="slides-image" src="https://wallpapers.com/images/high/kajal-agarwal-hd-pink-jacket-y1vf86qu41qijogi.webp" alt="Photo2" />
                    </div>
                    <div className="slider-container">
                        <img className="slides-image" src="https://wallpapers.com/images/high/kajal-agarwal-hd-flowing-hair-syp5cdw7yh5pvvge.webp" alt="Photo3" />
                    </div>
                    <div className="slider-container">
                        <img className="slides-image" src="https://wallpapers.com/images/high/kajal-agarwal-hd-pink-jacket-y1vf86qu41qijogi.webp" alt="Photo3" />
                    </div>
                </Slider>
            </div>


        </div>
    )
}

export default Home
