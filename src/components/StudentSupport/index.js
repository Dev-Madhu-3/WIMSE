import { useState, useContext } from 'react';
import { motion } from "framer-motion";
import { FaHeadset, FaBook, FaUserGraduate, FaComments, FaCheckCircle, FaStar } from "react-icons/fa";
import AppContext from '../../Context/context';

const StudentSupport = () => {
    const { openedApplyForm, changeApplyFormStatus, updateCourceName,changeFormTitle } = useContext(AppContext);
    const [activeTab, setActiveTab] = useState('academic');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const supportServices = [
        {
            id: 'academic',
            title: 'Academic Support',
            icon: <FaBook className="text-3xl" />,
            description: 'Get help with coursework, study techniques, and academic resources.',
            features: [
                'Tutoring Services',
                'Study Groups',
                'Exam Preparation',
                'Research Assistance'
            ]
        },
        {
            id: 'career',
            title: 'Career Guidance',
            icon: <FaUserGraduate className="text-3xl" />,
            description: 'Plan your career path with expert guidance and resources.',
            features: [
                'Career Counseling',
                'Resume Building',
                'Interview Preparation',
                'Job Placement Assistance'
            ]
        },
        {
            id: 'counseling',
            title: 'Personal Counseling',
            icon: <FaComments className="text-3xl" />,
            description: 'Confidential support for personal and emotional well-being.',
            features: [
                'Individual Counseling',
                'Group Therapy',
                'Crisis Intervention',
                'Mental Health Resources'
            ]
        },
        {
            id: 'technical',
            title: 'Technical Support',
            icon: <FaHeadset className="text-3xl" />,
            description: 'Assistance with technical issues related to online learning platforms.',
            features: [
                'Platform Navigation',
                'Software Troubleshooting',
                'Hardware Support',
                'Accessibility Services'
            ]
        }
    ];

    const testimonials = [
        {
            name: 'Priya Sharma',
            course: 'MBA',
            text: 'The academic support team helped me improve my grades significantly. The tutors are knowledgeable and supportive.',
            rating: 5
        },
        {
            name: 'Rahul Verma',
            course: 'MCA',
            text: 'Career guidance services were instrumental in helping me land my dream job. Highly recommended!',
            rating: 4
        },
        {
            name: 'Ananya Patel',
            course: 'M.Sc Psychology',
            text: 'The counseling services provided me with the support I needed during a difficult time. Thank you!',
            rating: 5
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        // console.log('Form submitted:', formData);
        alert('Your support request has been submitted. We will contact you soon!');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const handleContactSupport = () => {
        updateCourceName('');
        changeFormTitle("Contact Support");
        changeApplyFormStatus(!openedApplyForm);
    };

    // Animation variants
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"} />
        ));
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-7xl mx-auto relative z-10 text-center">
                        <motion.h1 
                            className="text-4xl md:text-5xl font-bold mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            Student Support Services
                        </motion.h1>
                        <motion.p 
                            className="text-xl max-w-3xl mx-auto mb-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            We're here to help you succeed academically, personally, and professionally.
                        </motion.p>
                        <motion.button
                            onClick={handleContactSupport}
                            viewport={{ once: true }}
                            className="px-8 py-3 bg-white text-indigo-700 font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            Contact Support
                        </motion.button>
                    </div>
                </section>

                {/* Support Services Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <motion.h2 
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                Our Support Services
                            </motion.h2>
                            <motion.div 
                                className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: 96 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            ></motion.div>
                        </div>

                        {/* Service Tabs */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {supportServices.map((service) => (
                                <motion.button
                                    key={service.id}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                        activeTab === service.id 
                                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                    onClick={() => setActiveTab(service.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {service.title}
                                </motion.button>
                            ))}
                        </div>

                        {/* Service Details */}
                        <motion.div 
                            className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {supportServices.map((service) => (
                                activeTab === service.id && (
                                    <motion.div key={service.id} variants={itemVariants} className="flex flex-col md:flex-row gap-8">
                                        <div className="md:w-1/3 flex justify-center">
                                            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <div className="md:w-2/3">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                            <p className="text-gray-600 mb-6">{service.description}</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {service.features.map((feature, index) => (
                                                    <div key={index} className="flex items-center gap-2">
                                                        <FaCheckCircle className="text-green-500" />
                                                        <span className="text-gray-700">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <motion.h2 
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                Student Testimonials
                            </motion.h2>
                            <motion.div 
                                viewport={{ once: true }}
                                className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: 96 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            ></motion.div>
                        </div>

                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <motion.div 
                                viewport={{ once: true }}
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                            <p className="text-gray-600">{testimonial.course}</p>
                                        </div>
                                    </div>
                                    <div className="flex mb-4">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <motion.h2 
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                Contact Support
                            </motion.h2>
                            <motion.div 
                                className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: 96 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                viewport={{ once: true }}
                            ></motion.div>
                            <motion.p 
                                className="mt-6 text-gray-600 max-w-2xl mx-auto"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                Fill out the form below and our support team will get back to you as soon as possible.
                            </motion.p>
                        </div>

                        <motion.div 
                            className="bg-white rounded-2xl shadow-xl p-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        required
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Submit Request
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Information Section */}
                {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <motion.h2 
                                className="text-3xl md:text-4xl font-bold mb-4"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                Get In Touch
                            </motion.h2>
                            <motion.div 
                                className="w-24 h-1 bg-white mx-auto rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: 96 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                viewport={{ once: true }}
                            ></motion.div>
                        </div>

                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                        >
                            <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                                    <FaEnvelope className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                                <p className="mb-4">support@wimse.com</p>
                                <a href="mailto:support@wimse.com" className="text-indigo-200 hover:text-white transition-colors duration-300">
                                    Send an Email
                                </a>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                                    <FaPhone className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                                <p className="mb-4">+91 12345 67890</p>
                                <a href="tel:+911234567890" className="text-indigo-200 hover:text-white transition-colors duration-300">
                                    Call Now
                                </a>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                                    <FaMapMarkerAlt className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                                <p className="mb-4">123 Education Street, Knowledge City</p>
                                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                                    Get Directions
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </section> */}
            </div>
        </>
    );
};

export default StudentSupport;