import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaHome, FaRedo, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceUnavailable = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
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
            
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Icon */}
                    <motion.div 
                        className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-8"
                        animate={{ 
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, 0, -5, 0]
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <FaExclamationTriangle className="text-white text-4xl" />
                    </motion.div>
                    
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-red-500">
                        Service Currently Unavailable
                    </h1>
                    
                    {/* Divider */}
                    <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-10"></div>
                    
                    {/* Message */}
                    <motion.div 
                        className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 mb-10 border border-slate-700/30 shadow-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <p className="text-xl text-slate-200 mb-6">
                            We're sorry, but this service is currently unavailable for upgrades.
                        </p>
                        <p className="text-slate-400 mb-6">
                            Our team is working hard to improve your experience.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                            {/* <div className="flex items-center gap-2 bg-indigo-900/50 px-4 py-2 rounded-lg border border-indigo-700/30">
                                <FaClock className="text-indigo-300" />
                                <span className="text-slate-200">Estimated downtime: 2-3 hours</span>
                            </div> */}
                            <div className="flex items-center gap-2 bg-purple-900/50 px-4 py-2 rounded-lg border border-purple-700/30">
                                <FaEnvelope className="text-purple-300" />
                                <span className="text-slate-200">wimse51@gmail.com</span>
                            </div>
                        </div>
                        
                        <p className="text-slate-500 text-sm">
                            We apologize for any inconvenience this may cause.
                        </p>
                    </motion.div>
                    
                    {/* Action Buttons */}
                    <motion.div 
                        className="flex flex-col sm:flex-row justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
                        >
                            <FaRedo />
                            Try Again
                        </motion.button>
                        
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                <FaHome />
                                Back to Home
                            </motion.button>
                        </Link>
                    </motion.div>
                    
                    {/* Additional Info */}
                    <motion.div 
                        className="mt-16 text-slate-500 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <p>If you need immediate assistance, please contact our support team.</p>
                        <p className="mt-2">Status updates will be posted on our social media channels.</p>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
};

export default ServiceUnavailable;