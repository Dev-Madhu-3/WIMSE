import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { studentsQandA } from '../../assets/data';
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const DoubtsSection = () => {
    const [opened, setOpened] = useState(null);
    
    const toggleQuestion = (index) => {
        setOpened(opened === index ? null : index);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <Fade cascade damping={0.2} direction="up"
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our programs, admission process, and more.
                    </p>
                </Fade>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {studentsQandA.map((each, index) => (
                        <motion.div
                            key={each.qNo}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Question */}
                            <div 
                                className="flex justify-between items-center p-6 cursor-pointer"
                                onClick={() => toggleQuestion(index)}
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">
                                    {each.question}
                                </h3>
                                <div className="flex-shrink-0 ml-4">
                                    <motion.div
                                        animate={{ rotate: opened === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {opened === index ? (
                                            <FiChevronUp className="text-indigo-600 text-2xl" />
                                        ) : (
                                            <FiChevronDown className="text-gray-500 text-2xl" />
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
                                            <p className="text-gray-600 leading-relaxed">
                                                {each.ans}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Decorative Element */}
                            <div className={`h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 transition-transform duration-500 ${opened === index ? 'scale-x-100' : ''}`}></div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-1">
                        <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
                            Still Have Questions?
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DoubtsSection;