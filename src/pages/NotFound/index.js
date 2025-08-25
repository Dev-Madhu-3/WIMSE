import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const NotFound = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const floatingVariants = {
        float: {
            y: [0, -15, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-purple-500/10"
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
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    {/* 404 Text with Animation */}
                    <motion.div variants={itemVariants} className="relative mb-8">
                        <motion.h1 
                            className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                            animate={{ 
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                            }}
                            transition={{ 
                                duration: 8, 
                                repeat: Infinity, 
                                repeatType: "reverse" 
                            }}
                        >
                            404
                        </motion.h1>
                        
                        {/* Floating Error Icon */}
                        <motion.div 
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            variants={floatingVariants}
                            animate="float"
                        >
                            <FaExclamationTriangle className="text-white text-5xl md:text-7xl opacity-70" />
                        </motion.div>
                    </motion.div>
                    
                    {/* Error Message */}
                    <motion.h2 
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Oops! Page Not Found
                    </motion.h2>
                    
                    <motion.p 
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                    >
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </motion.p>
                    
                    {/* Search Bar */}
                    {/* <motion.div 
                        variants={itemVariants}
                        className="w-full max-w-md mx-auto mb-10"
                    >
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for what you need..."
                                className="w-full py-4 px-6 pr-12 rounded-full bg-gray-800/70 backdrop-blur-sm text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-full">
                                <FaSearch />
                            </button>
                        </div>
                    </motion.div>
                     */}
                    {/* Action Buttons */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <FaHome />
                                Back to Home
                            </Link>
                        </motion.div>
                        
                        {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <button
                                onClick={() => window.history.back()}
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-800/70 backdrop-blur-sm text-white font-bold rounded-full border border-gray-700 hover:bg-gray-700/70 transition-all duration-300"
                            >
                                <FaArrowLeft />
                                Go Back
                            </button>
                        </motion.div> */}
                    </motion.div>
                    
                    {/* Helpful Links */}
                    <motion.div 
                        variants={itemVariants}
                        className="mt-16 text-gray-400"
                    >
                        <p className="mb-4">You might be looking for:</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/courses/regular" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                                Courses
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link to="/universities" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                                Universities
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link to="/about" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                                About Us
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link to="/contact" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-purple-500"
                        style={{
                            width: Math.random() * 10 + 2,
                            height: Math.random() * 10 + 2,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default NotFound;