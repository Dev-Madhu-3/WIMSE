import { FaLocationDot } from "react-icons/fa6";
import { useContext } from 'react';
import { motion } from "framer-motion";
import AppContext from '../../Context/context';
import { regularCountriesData, regulardashBoardData, topCities } from '../../assets/data';
import { Fade } from "react-awesome-reveal";

const RegularRoute = () => {
    const { openedApplyForm, changeApplyFormStatus, updateCourceName, changeFormTitle} = useContext(AppContext);

    const onTriggerApply = name => {
        changeApplyFormStatus(!openedApplyForm);
        updateCourceName('');
        changeFormTitle(name);
    };

    // Animation variants
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">WIMSE</span> Educational Consultancy
                        </motion.h2>

                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-8"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        ></motion.div>

                        <motion.p
                            className="text-lg text-gray-600 mb-10 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            We are a team of experienced consultants passionate about helping students achieve their academic goals. Founded in 1995, we provide personalized admission consulting services for colleges, graduate schools, and professional programs. Our team of former admissions officers and industry experts is committed to helping you craft a compelling application that showcases your unique strengths and aspirations.
                        </motion.p>

                        <motion.button
                            onClick={()=>onTriggerApply("Get Started")}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                        >
                            Get Started
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Top Cities Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            TOP CITIES YOU CAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">STUDY WITH US</span> IN INDIA
                        </motion.h2>

                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        ></motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Fade direction="up" cascade damping={0.1} triggerOnce> 
                            {topCities.map((city, index) => (
                                <div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            src={city.imgUrl}
                                            alt={city.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                            <FaLocationDot className="text-white" />
                                            <p className="font-bold text-xl text-white">{city.title}</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <motion.button
                                            onClick={()=>onTriggerApply("Enquiry Now")}
                                            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                            viewport={{ once: true }}
                                        >
                                            Enquiry Now
                                        </motion.button>
                                    </div>
                                </div>
                            ))}</Fade>

                    </div>
                </div>
            </section>

            {/* Study Abroad Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Study Abroad</span> Destination
                        </motion.h2>

                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        ></motion.div>

                        <motion.p
                            className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            Spread your wings, the entire world is open for you! Here is a platform to guide and assist students interested in securing higher education abroad.
                        </motion.p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-center text-blue-800 mb-8">MBBS in Neighbouring Countries:</h3>

                        <motion.div
                            className="flex flex-wrap justify-center gap-8"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                        >
                            {regularCountriesData.map((country, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex flex-col items-center group"
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                                        <img
                                            className="relative w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-110"
                                            src={country.image}
                                            alt={country.country}
                                        />
                                    </div>
                                    <div className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full">
                                        <p className="font-bold text-blue-800">{country.country}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <p className="text-lg text-gray-600 text-center">
                            With new medical colleges coming up in neighbouring countries, the process to find a seat is much easier—some of the popular choices for Indian students. Students wanting to apply for MBBS abroad would be required to have an aggregate percentage of at least 50%.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Services</span>
                        </motion.h2>

                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        ></motion.div>

                        <motion.p
                            className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            Well-versed in all aspects of admissions through the Best Admission Consultancy in Nellore
                        </motion.p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        {regulardashBoardData.map((service, index) => (
                            // <Fade
                            //     direction={index % 2 === 0 ? "up" : "down"}
                            //     delay={index * 100}
                            // >
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                                >
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center mb-6">
                                        <img className="w-12 h-12 object-contain" src={service.image} alt={service.title} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </motion.div>
                            // </Fade>

                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        className="w-16 h-1 bg-white mx-auto rounded-full mb-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        transition={{ duration: 0.7 }}
                    ></motion.div>

                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        HOW WE CAN HELP
                    </motion.h2>

                    <motion.p
                        className="text-xl mb-10 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Well-versed in all aspects of admissions through the Best Admission Consultancy in Nellore
                    </motion.p>

                    <motion.p
                        className="text-lg mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        Reset your research strategy with top admission consultancy in Nellore by browsing through our lists of top colleges, exams, courses and careers based on your area of interest!
                    </motion.p>

                    <motion.button
                        onClick={()=>onTriggerApply("Contact Us Today")}
                        className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        Contact Us Today
                    </motion.button>
                </div>
            </section>
        </main>
    );
};

export default RegularRoute;