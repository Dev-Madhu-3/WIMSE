import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhone, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const socialLinks = [
        { icon: faFacebook, url: "https://www.facebook.com/hari.kishor.5494/", label: "Facebook" },
        { icon: faInstagram, url: "https://instagram.com/__mr__attitude_7/", label: "Instagram" },
        { icon: faEnvelope, url: "mailto:wimse51@gmail.com", label: "Email" }
    ];

    const usefulLinks = [
        { name: "Home", path: "/" },
        { name: "Distance Learning", path: "/courses/distance" },
        { name: "Regular Courses", path: "/courses/regular" },
        { name: "Universities", path: "/universities" },
        { name: "Student Support", path: "/student-support" },
        { name: "About Us", path: "/about" }
    ];

    const developerInfo = {
        name: "Mr Madhu",
        url: "https://mrmadhu.vercel.app/",
        title: "Web Developer"
    };

    return (
        <footer className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white pt-10 pb-2 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-purple-500 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-blue-500 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Logo and Address Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-start"
                    >
                        <div className="flex items-center mb-6">
                            <img
                                className="w-16 h-16 object-contain"
                                src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1760853336/WIMSE_logo-white_qxdbfw.png"
                                alt="WIMSE Logo"
                            />
                            <div className="ml-4">
                                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">WIMSE</h1>
                                <p className="text-sm text-white">EDUCATIONAL CONSULTANCY</p>
                            </div>
                        </div>

                        <div className="space-y-3 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-300 mr-3" />
                                <p className="text-sm">23/1219, Sodhan Nagar, Behind APSRTC Bus Stand,<br />Nellore, Andhra Pradesh -524001</p>
                            </div>
                            <div className="flex items-center justify-center md:justify-start">
                                <FontAwesomeIcon icon={faPhone} className="text-blue-300 mr-3" />
                                <p className="text-sm">+91 73827 44791, +91 90300 30126</p>
                            </div>
                            <div className="flex items-center justify-center md:justify-start">
                                <FontAwesomeIcon icon={faEnvelope} className="text-blue-300 mr-3" />
                                <p className="text-sm">wimse51@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex space-x-6 m-8">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.1 } }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xl text-blue-200 hover:text-white hover:bg-blue-500/30 transition-all duration-100"
                                >
                                    <FontAwesomeIcon icon={social.icon} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links and Social Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >

                        {/* <div className="flex space-x-6 mb-8">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.1 } }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xl text-blue-200 hover:text-white hover:bg-blue-500/30 transition-all duration-100"
                                >
                                    <FontAwesomeIcon icon={social.icon} />
                                </motion.a>
                            ))}
                        </div> */}

                        <div>
                            {/* <h4 className="text-lg font-semibold mb-4 text-center">Useful Links</h4> */}
                            <h3 className="text-xl font-bold mb-6 text-center relative pb-2">
                                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Useful Links</span>
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                            </h3>
                            <div className="grid gap-3 text-center">
                                {usefulLinks.map((link, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={scrollToTop}
                                            className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"
                                        >
                                            <span className="mr-2">›</span> {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h3 className="text-xl font-bold mb-6 text-center relative pb-2">
                            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Our Location</span>
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                        </h3>

                        <div className="w-full h-[13rem] rounded-xl overflow-hidden shadow-xl border-2 border-white/10">
                            <iframe
                                title="WIMSE Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.930657263064!2d79.98124423082674!3d14.45315045223795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf391f2a5cf85%3A0xadc5d152f6815c7e!2sWIMSE%20Educational%20Consultancy!5e0!3m2!1sen!2sin!4v1719249402504!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="transition-all duration-500"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 mt-2 pt-6 text-center"
                >
                    <p className="text-blue-200 text-[0.8rem]">
                        &copy; {new Date().getFullYear()} WIMSE CONSULTANCY. All Rights Reserved. |
                        <span> Designed & Developed by </span>
                        <a
                            href={developerInfo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-300 hover:text-green-200 transition-colors duration-300 font-medium"
                        >
                            {developerInfo.name}
                        </a>
                    </p>
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="mt-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto shadow-lg"
                        aria-label="Back to top"
                    >
                        <FontAwesomeIcon icon={faArrowUp} className="text-white" />
                    </motion.button>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
