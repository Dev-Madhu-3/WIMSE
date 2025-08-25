import { useContext } from 'react';
import { FaRegCalendar, FaGraduationCap, FaBook, FaClock } from "react-icons/fa";
import AppContext from '../../Context/context';
import { courses } from '../../assets/data';
import { motion } from 'framer-motion';

const CoursesRoute = () => {
    const { openedApplyForm, changeApplyFormStatus, updateCourceName, activeCourseTab } = useContext(AppContext);
    
    const onTriggerApply = (name) => {
        changeApplyFormStatus(!openedApplyForm);
        updateCourceName(name);
    };

    const currentCourse = courses.filter(each => each.icon === activeCourseTab)[0];
    
    // Custom animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-20 px-4 sm:px-6 lg:px-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1 
                        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
                        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                    >
                        {currentCourse ? `${currentCourse.course}` : 'All Courses'}
                    </motion.h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Courses Display */}
                <motion.div 
                    className="space-y-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {courses
                        .filter((e) => e.icon.includes(activeCourseTab))
                        .flatMap(each =>
                            each.specializations.map((course, index) => (
                                <motion.div 
                                    key={course.name + index}
                                    variants={itemVariants}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Image Section */}
                                    <motion.div 
                                        className="md:w-2/5 h-80 rounded-2xl overflow-hidden shadow-2xl relative group"
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <img 
                                            className="w-full h-full object-cover bg-slate-400" 
                                            src={course.image || 'https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740403385/WhatsApp_Image_2025-02-24_at_18.37.33_f83a8656_avexnv.jpg'} 
                                            alt={course.name} 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                            <div className="flex items-center gap-2">
                                                <FaGraduationCap className="text-white text-xl" />
                                                <span className="text-white font-medium">Learn More</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                    
                                    {/* Content Section */}
                                    <motion.div 
                                        className="md:w-3/5 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl"
                                        whileHover={{ y: -10 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl">
                                                <FaBook className="text-white text-2xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                                                <div className="flex items-center gap-2 text-pink-300">
                                                    <span className="px-3 py-1 bg-pink-900/50 rounded-full text-sm">Online & Offline</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-200 mb-6 leading-relaxed">
                                            {course.description}
                                        </p>
                                        
                                        {course.duration && (
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="flex items-center gap-2 bg-indigo-900/50 px-4 py-2 rounded-lg">
                                                    <FaClock className="text-indigo-300" />
                                                    <span>{course.duration} Years</span>
                                                </div>
                                                <div className="flex items-center gap-2 bg-purple-900/50 px-4 py-2 rounded-lg">
                                                    <FaRegCalendar className="text-purple-300" />
                                                    <span>{course.semester} Semesters</span>
                                                </div>
                                            </div>
                                        )}
                                        
                                        <motion.button
                                            onClick={() => onTriggerApply(course.name)}
                                            className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Apply Now
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            ))
                        )}
                </motion.div>

                {/* Floating Action Button */}
                <motion.div 
                    className="fixed bottom-8 right-8 z-50"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
                >
                    <motion.button
                        onClick={() => onTriggerApply('')}
                        className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaGraduationCap className="text-2xl" />
                    </motion.button>
                </motion.div>
            </div>
        </main>
    );
};

export default CoursesRoute;