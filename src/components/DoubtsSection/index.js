import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiHelpCircle } from "react-icons/fi";
import { studentsQandA } from '../../assets/data';
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import AppContext from '../../Context/context';
import { useContext } from 'react';

const DoubtsSection = () => {
    const [opened, setOpened] = useState(null);
    const { changeFormTitle,openedApplyForm,changeApplyFormStatus } = useContext(AppContext);

    const onClickContact = () => {
        changeFormTitle("Contact Us");
        changeApplyFormStatus(!openedApplyForm);
    };
    
    const toggleQuestion = (index) => {
        setOpened(opened === index ? null : index);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
            {/* Floating background elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <Fade cascade damping={0.2} triggerOnce direction="up" className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <FiHelpCircle className="text-5xl text-indigo-600 animate-pulse-slow" />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full animate-zoomInOut"></div>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full animate-pulse-slow"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our programs, admission process, and more.
                    </p>
                </Fade>
                
                {/* FAQ Items */}
                <div className="space-y-6">
                    {studentsQandA.map((each, index) => (
                        <motion.div
                            key={each.qNo}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Question */}
                            <div 
                                className="flex justify-between items-center p-6 cursor-pointer group"
                                onClick={() => toggleQuestion(index)}
                            >
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 mr-4">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${opened === index ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' : 'bg-indigo-100 text-indigo-500 group-hover:bg-indigo-200'}`}>
                                            <span className="font-medium">{index + 1}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-sm md:text-xl font-semibold text-gray-800 pr-4">
                                        {each.question}
                                    </h3>
                                </div>
                                <div className="flex-shrink-0 ml-4">
                                    <motion.div
                                        animate={{ rotate: opened === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`p-2 rounded-full ${opened === index ? 'bg-indigo-100' : 'bg-gray-100 group-hover:bg-indigo-100'} transition-colors duration-300`}
                                    >
                                        {opened === index ? (
                                            <FiChevronUp className="text-indigo-600 text-2xl" />
                                        ) : (
                                            <FiChevronDown className="text-gray-500 text-2xl group-hover:text-indigo-600 transition-colors duration-300" />
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                            
                            {/* Answer */}
                            <AnimatePresence>
                                {opened === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-12">
                                                {each.ans}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            
                            {/* Decorative Element */}
                            <div className={`h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 transform origin-left transition-transform duration-500 ${opened === index ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Call to Action */}
                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <div className="inline-block relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                        <button onClick={onClickContact} className="relative bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform group-hover:scale-105 flex items-center">
                            <span>Still Have Questions? Contact Us</span>
                            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DoubtsSection;