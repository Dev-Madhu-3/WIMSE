import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaUsers, FaHandshake } from "react-icons/fa";
import React, { useContext } from 'react'
import AppContext from '../../Context/context'

const About = () => {
  const { openedApplyForm, changeApplyFormStatus, updateCourceName,changeFormTitle } = useContext(AppContext)
    
    const onChangeFormStatus = () => {
      updateCourceName('')
        changeFormTitle('Contact Us')
        changeApplyFormStatus(!openedApplyForm)
    }
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { icon: <FaGraduationCap />, value: "25+", label: "Years of Excellence" },
    { icon: <FaAward />, value: "1000+", label: "University Partnerships" },
    { icon: <FaUsers />, value: "15000+", label: "Happy Students" },
    { icon: <FaHandshake />, value: "98%", label: "Success Rate" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-500/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 mb-6"
              variants={itemVariants}
            >
              Welcome To WIMSE Educational Consultancy
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8"
              variants={itemVariants}
            ></motion.div>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
              variants={itemVariants}
            >
              25 Years Of Excellence
              <span className="block text-lg md:text-xl font-normal text-gray-600 mt-2">
                India’s most trusted Admission Consultant
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-10 leading-relaxed"
              variants={itemVariants}
            >
              We are happy to introduce ourselves as the only professional
              higher education admission consultancy services in India with
              registered offices in all universities specializing in
              <span className="font-bold text-indigo-700">
                {" "}
                arts, commerce, science, engineering, management, MBBS, BDS, MD,
                MS and abroad admissions
              </span>
              .
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="text-indigo-600 text-xl">{stat.icon}</div>
                  <div>
                    <div className="font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onChangeFormStatus}
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-30"></div>

              {/* Image */}
              <motion.img
                className="relative w-full max-w-lg rounded-2xl shadow-2xl"
                src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1745744312/about-02_ke6gis.png"
                alt="About WIMSE"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <FaAward className="text-white text-3xl" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaGraduationCap className="text-white text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
