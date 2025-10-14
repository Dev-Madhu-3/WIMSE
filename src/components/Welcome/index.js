import { Fade } from "react-awesome-reveal";
import { CoursesList } from '../../assets/data';
import { motion } from "framer-motion";
import { useContext } from 'react';
import AppContext from '../../Context/context';


const Welcome = () => {
  const { openedApplyForm, changeApplyFormStatus, changeFormTitle } = useContext(AppContext);

  const onClickStartJourney = () => {
    changeFormTitle("Start Your Journey");
    changeApplyFormStatus(!openedApplyForm);
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <Fade triggerOnce cascade damping={0.2} direction="up" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-float">
            WELCOME TO <span className="text-indigo-600">WIMSE</span> EDUCATIONAL CONSULTANCY
          </h1>
          <motion.div
            initial={{ width: 0 }}
            // whileInView={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 2, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full">
          </motion.div>
          <h2 className="text-xl md:text-2xl text-indigo-700 font-medium tracking-wider animate-pulse-slow">
            EMPOWERING ACADEMIC AND CAREER SUCCESS SINCE 1995
          </h2>
        </Fade>

        {/* Description Section */}
        <Fade triggerOnce cascade damping={0.2} direction="up" className="bg-slate-200 rounded-2xl shadow-xl p-6 md:p-8 mb-16 transform transition-all duration-500 hover:shadow-2xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            We're thrilled you're considering us for your educational journey. At Wimse, we believe that education is the key to unlocking your full potential, and we're here to guide you every step of the way.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Whether you're looking to pursue an Undergraduate degree, a Postgraduate qualification, or a Diploma, we offer a diverse range of courses through both Distance Education and Regular Admissions. We understand that everyone's circumstances are unique, and we strive to provide flexible learning options to suit your needs.
          </p>
        </Fade>

        {/* Courses Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">OUR PROGRAMS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CoursesList.map((courseData, index) => (
              <Fade triggerOnce duration={1000} delay={index * 100} key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center group-hover:animate-bounce-slow">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="ml-4 text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                        {courseData.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {courseData.about}
                    </p>
                    {/* <div className="mt-6">
                      <button className="w-full py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Learn More
                      </button>
                    </div> */}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Fade triggerOnce cascade damping={0.2} direction="up" className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-1 ">
            <button onClick={onClickStartJourney} className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
              START YOUR JOURNEY TODAY
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Welcome;