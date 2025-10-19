import { useContext, useState } from 'react';
import { FaRegCalendar, FaGraduationCap, FaBook, FaClock, FaStar, FaFire, FaAward, FaSearch, FaTimes, FaChevronDown } from "react-icons/fa";
import AppContext from '../../Context/context';
import { courses } from '../../assets/data';
import { motion, AnimatePresence } from 'framer-motion';

const CoursesRoute = () => {
    const { openedApplyForm, changeApplyFormStatus, updateCourceName, changeActiveCourseTab, activeCourseTab, changeFormTitle } = useContext(AppContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const onTriggerApply = (name) => {
        changeApplyFormStatus(!openedApplyForm);
        updateCourceName(name);
        changeFormTitle("Quick Apply");
    };

    const currentCourse = courses.filter(each => each.icon === activeCourseTab)[0];

    // Filter courses based on search query and active tab
    const filteredCourses = courses
        .filter((e) => activeCourseTab === 'All' || e.icon.includes(activeCourseTab))
        .map(course => {
            const filteredSpecializations = course.specializations.filter(spec =>
                spec.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                spec.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
            return { ...course, specializations: filteredSpecializations };
        })
        .filter(course => course.specializations.length > 0);

    // Custom animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
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

    const renderStars = (rating = 4.5) => {
        return (
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <FaStar
                        key={i}
                        className={i < Math.floor(rating) ? "text-yellow-400" : i === Math.floor(rating) && rating % 1 >= 0.5 ? "text-yellow-400" : "text-gray-600"}
                    />
                ))}
            </div>
        );
    };

    const clearSearch = () => {
        setSearchQuery('');
    };

    const handleCourseSelect = (courseIcon) => {
        setIsDropdownOpen(false);
        changeActiveCourseTab(courseIcon);
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-200 to-purple-200 text-white py-16 max-sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div> */}

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

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16 max-sm:mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Course Dropdown */}
                    <motion.div
                        className="relative inline-block mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-3 bg-slate-800/70 backdrop-blur-lg border border-slate-700/50 rounded-xl px-6 py-3 text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:bg-slate-700/70 transition-all duration-300"
                        >
                            {currentCourse ? `${currentCourse.course}` : 'All Courses'}
                            <FaChevronDown className={`text-cyan-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    className="absolute left-0 mt-2 min-w-64 bg-purple-900/90 backdrop-blur-lg border border-slate-700/50 rounded-xl shadow-xl z-50 overflow-hidden"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="max-h-96 overflow-y-auto">
                                        {/* All Courses Option */}
                                        <button
                                            onClick={() => handleCourseSelect('All')}
                                            className={`w-full text-left px-5 py-3 hover:bg-slate-700/50 transition-colors duration-200 flex items-center gap-3 ${activeCourseTab === 'All' ? 'bg-cyan-900/30 text-cyan-300' : 'text-slate-200'}`}
                                        >
                                            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                                                <FaBook className="text-white" />
                                            </div>
                                            <span className="font-medium">All Courses</span>
                                        </button>

                                        {/* Course Categories */}
                                        {courses.map((course) => (
                                            <button
                                                key={course.icon}
                                                onClick={() => handleCourseSelect(course.icon)}
                                                className={`w-full text-left px-5 py-3 hover:bg-slate-700/50 transition-colors duration-200 flex items-center gap-3 ${activeCourseTab === course.icon ? 'bg-cyan-900/30 text-cyan-300' : 'text-slate-200'}`}
                                            >
                                                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                                                    <FaBook className="text-white" />
                                                </div>
                                                <span className="font-medium">{course.course}</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full"></div>

                    {/* Search Bar */}
                    <motion.div
                        className="mt-8 max-w-2xl mx-auto relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search courses..."
                                className="w-full py-4 pl-14 pr-12 rounded-2xl bg-white backdrop-blur-lg border border-slate-700/50 text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent shadow-lg"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl" />
                            {searchQuery && (
                                <button
                                    onClick={clearSearch}
                                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-400 transition-colors"
                                >
                                    <FaTimes />
                                </button>
                            )}
                        </div>
                        {searchQuery && (
                            <motion.div
                                className="mt-2 text-slate-300 text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                Showing {filteredCourses.reduce((acc, course) => acc + course.specializations.length, 0)} results for "{searchQuery}"
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>

                {/* Courses Display */}
                {filteredCourses.length > 0 ? (
                    <motion.div
                        className="space-y-16 max-sm:space-y-12 md:space-y-20"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredCourses.flatMap(each =>
                            each.specializations.map((course, index) => (
                                <motion.div
                                    key={course.name + index}
                                    variants={itemVariants}
                                    className={`flex flex-col max-sm:flex-col md:flex-row items-center gap-8 max-sm:gap-6 md:gap-8 lg:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Image Section */}
                                    <motion.div
                                        className="w-full max-sm:w-full md:w-2/5 lg:w-2/5 h-64 max-sm:h-56 md:h-80 rounded-2xl overflow-hidden shadow-2xl relative group"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 z-10"></div>
                                        <img
                                            className="w-full h-full object-cover"
                                            src={course.image || 'https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740403385/WhatsApp_Image_2025-02-24_at_18.37.33_f83a8656_avexnv.jpg'}
                                            alt={course.name}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 z-20">
                                            <div className="flex items-center gap-2">
                                                <FaGraduationCap className="text-cyan-400 text-xl" />
                                                <span className="text-white font-medium">Learn More</span>
                                            </div>
                                        </div>

                                        {/* Popular Badge */}
                                        {/* {index < 2 && (
                                            <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 rounded-full">
                                                <FaFire className="text-white text-sm" />
                                                <span className="text-white text-xs font-bold">POPULAR</span>
                                            </div>
                                        )} */}
                                    </motion.div>

                                    {/* Content Section */}
                                    <motion.div
                                        className="w-full max-sm:w-full md:w-3/5 lg:w-3/5 bg-white backdrop-blur-lg rounded-2xl p-6 max-sm:p-5 md:p-8 border border-gray-200 shadow-xl"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                                                <FaBook className="text-white text-2xl" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl max-sm:text-lg md:text-2xl lg:text-2xl font-bold mb-2 text-gray-800">{course.name}</h3>
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span className="px-3 py-1 bg-cyan-100 rounded-full text-sm text-cyan-700 flex items-center gap-1">
                                                        <FaGraduationCap />
                                                        Online & Offline
                                                    </span>
                                                    {renderStars()}
                                                    {/* {index < 2 && (
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs text-white font-bold flex items-center gap-1">
                        <FaAward />
                        Most Preffered
                    </span>
                )} */}
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-6 leading-relaxed text-base max-sm:text-sm md:text-base">
                                            {course.description}
                                        </p>

                                        {course.duration && (
                                            <div className="flex flex-wrap gap-4 mb-8">
                                                <div className="flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-lg border border-indigo-200">
                                                    <FaClock className="text-indigo-600" />
                                                    <span className="text-sm md:text-base text-gray-700">{course.duration} Years</span>
                                                </div>
                                                <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-lg border border-purple-200">
                                                    <FaRegCalendar className="text-purple-600" />
                                                    <span className="text-sm md:text-base text-gray-700">{course.semester} Semesters</span>
                                                </div>
                                            </div>
                                        )}

                                        <motion.button
                                            onClick={() => onTriggerApply(course.name)}
                                            className="w-full py-3 max-sm:py-2.5 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20 text-base max-sm:text-sm md:text-base"
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
                ) : (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-5xl mb-4 text-slate-400">🔍</div>
                        <h3 className="text-2xl font-bold text-white mb-2">No courses found</h3>
                        <p className="text-slate-400 max-w-md mx-auto">
                            We couldn't find any courses matching "{searchQuery}". Try a different search term or browse all courses.
                        </p>
                        <motion.button
                            onClick={clearSearch}
                            className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Clear Search
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </main>
    );
};
export default CoursesRoute;