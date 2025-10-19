import { motion } from "framer-motion";
import { courses } from '../../assets/data';
import { Link } from 'react-router-dom';
import AppContext from '../../Context/context';
import { useContext } from 'react';

const CousrseCard = ({ couresDetainls }) => {
    const { course, imageURL, icon, specializations } = couresDetainls;
    const { changeActiveCourseTab } = useContext(AppContext);
    
    const onCourseTabUpdate = (icon) => {
        changeActiveCourseTab(icon);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Link to="/courses/distance" className="group block">
            <motion.div
                onClick={() => onCourseTabUpdate(icon)}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-48"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                            {course}
                        </h2>
                        <p className="text-gray-600 font-medium">
                            {specializations?.length} Courses
                        </p>
                    </div>
                    
                    {/* Icon/Image */}
                    <div className="flex justify-end mt-4">
                        <div className="absolute bottom-[20px] w-20 h-20 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center group-hover:animate-bounce-slow overflow-hidden">
                            <img 
                                className="h-[120%]" 
                                src={imageURL} 
                                alt={`${course} icon`} 
                            />
                        </div>
                    </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-tl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.div>
        </Link>
    );
};

const CoursesSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-indigo-600">Choose</span> Your Area of Interest
                    </motion.h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Cards Container - Responsive Grid */}
                <motion.div 
                    className="grid grid-cols-1 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* All Courses Card */}
                    <CousrseCard 
                        couresDetainls={{
                            course: "All Courses", 
                            imageURL: "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739783306/MBA-7f490bed00b340e59d5859966ba7b727_exfs4t.webp", 
                            icon: ""
                        }} 
                    />
                    
                    {/* Individual Course Cards */}
                    {courses.map((each, idx) => (
                        <CousrseCard key={idx} couresDetainls={each} />
                    ))}
                </motion.div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <Link 
                            to="/courses/distance" 
                            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-1 animate-pulse-slow"
                        >
                            <div className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
                                Explore All Programs
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CoursesSection;