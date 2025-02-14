import React, { useState, useEffect } from 'react';
import './index.css';
import slide1 from '../../assets/back-school-university-concept-portrait-young-cheerful-male-student-with-dreads-hipster-going.jpg'
import slide2 from '../../assets/jason-goodman-Oalh2MojUuk-unsplash.jpg'
import slide3 from '../../assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg'
import slide4 from '../../assets/multiethnic-group-young-cheerful-students-walking.jpg'

const slides = [
  { id: 1, image: slide1, text: 'First Slide' },
  { id: 2, image: slide2, text: 'Second Slide' },
  { id: 3, image: slide3, text: 'Third Slide' },
  { id: 4, image: slide4, text: 'Fourth Slide' },
];

const ImageSlider=()=> {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
  };

  const nextSlide = () => {
    if (currentIndex === slides.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    } else {
      goToSlide(currentIndex + 1);
    }
  }
  const prevSlide = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length);
    } else {
      goToSlide(currentIndex - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === slides.length) {
        setIsTransitioning(false);
        setCurrentIndex(0);
      } else {
        goToSlide(currentIndex + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 2s ease-in-out' : 'none',
        }}
      >
        {slides.concat(slides[0]).map((slide, idx) => (
          <div key={idx} className="slider-slide">
            <img src={slide.image} alt={slide.text} className="slide-image" />
            <div className='slide-content-container'>
                <h1>WIMSE EDUCATIONAL<br />CONSULTANCY</h1>
                  <p>EDUCATION AND JOB CONSULTANCY SERVISES</p>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-button slider-button-left" onClick={prevSlide}>❮</button>
      <button className="slider-button slider-button-right" onClick={nextSlide}>❯</button>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${currentIndex === index ? 'active' : ''}`} onClick={() => goToSlide(index)}></span>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider