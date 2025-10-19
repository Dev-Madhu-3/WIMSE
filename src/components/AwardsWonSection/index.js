import { motion } from "framer-motion";
import { FaRegSmile } from "react-icons/fa";       // Font Awesome
import { LuNotepadText } from "react-icons/lu";    // Lucide
import { LiaCertificateSolid, LiaUniversitySolid } from "react-icons/lia"; // Line Awesome

const AwardsWonSection = () => {
    const stats = [
        {
            icon: <FaRegSmile className="text-4xl" />,
            value: "15000+",
            label: "Happy Students",
            color: "from-pink-500 to-rose-500"
        },
        {
            icon: <LuNotepadText className="text-4xl" />,
            value: "200+",
            label: "Our Courses",
            color: "from-purple-500 to-indigo-500"
        },
        {
            icon: <LiaCertificateSolid className="text-4xl" />,
            value: "25+",
            label: "Years of Excellence",
            color: "from-amber-500 to-orange-500"
        },
        {
            icon: <LiaUniversitySolid className="text-4xl" />,
            value: "30+",
            label: "Universities",
            color: "from-emerald-500 to-teal-500"
        }
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-100 opacity-50 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pink-100 opacity-30 blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Achievements</span>
                    </motion.h2>
                    <motion.div 
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    ></motion.div>
                    <motion.p 
                        className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Numbers that speak volumes about our commitment to excellence in education.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-200">
                                {/* Icon with gradient background */}
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">
                                        {stat.icon}
                                    </div>
                                </div>
                                
                                {/* Value with animated counter effect */}
                                <motion.div 
                                    className="text-4xl font-bold text-gray-800 mb-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {stat.value}
                                </motion.div>
                                
                                {/* Label */}
                                <p className="text-gray-600 text-lg font-medium">
                                    {stat.label}
                                </p>
                                
                                {/* Decorative element */}
                                <div className={`mt-4 h-1 w-16 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwardsWonSection;