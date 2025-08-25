import { GiSmartphone } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";
import { IoBulbOutline } from "react-icons/io5";
import { Fade } from 'react-awesome-reveal';

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-2/5 flex justify-center">
            <Fade direction="left" duration={1500}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
                <img 
                  className="relative w-full max-w-md rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105" 
                  src='https://res.cloudinary.com/dpk6qsn0e/image/upload/v1745663922/istockphoto-123500051-612x612-removebg-preview_rhr9s6.png' 
                  alt='student' 
                />
              </div>
            </Fade>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5">
            <Fade cascade damping={0.4} direction="right">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 transform transition-all duration-500 hover:shadow-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-indigo-600 border-b-4 border-indigo-600 pb-2">Why</span> Choose Us?
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
                  Our extensive experience and deep understanding of the Indian education landscape
                  enable us to provide personalized guidance, helping students navigate the complexities
                  of university applications and choose the best path to achieve their academic and career goals.
                  At Wimse, we're committed to your success, offering expert advice and support every step of the way.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Support Card */}
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-red-600 mb-4 animate-bounce-slow">
                      <GiSmartphone className="text-white text-4xl" />
                    </div>
                    <h3 className="text-xl font-bold text-red-700">SUPPORT</h3>
                    <p className="mt-2 text-gray-600">24/7 guidance throughout your educational journey</p>
                  </div>

                  {/* Certification Card */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 mb-4 animate-bounce-slow">
                      <PiCertificate className="text-white text-4xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">CERTIFICATION</h3>
                    <p className="mt-2 text-gray-600">Recognized qualifications from accredited institutions</p>
                  </div>

                  {/* Faithful Card */}
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-red-600 mb-4 animate-bounce-slow">
                      <IoBulbOutline className="text-white text-4xl" />
                    </div>
                    <h3 className="text-xl font-bold text-red-700">FAITHFUL</h3>
                    <p className="mt-2 text-gray-600">Committed to your success with integrity</p>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                    Discover More Benefits
                  </button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;