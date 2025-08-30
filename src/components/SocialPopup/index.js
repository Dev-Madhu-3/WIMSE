import { motion, AnimatePresence } from "framer-motion";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp ,
    FaEnvelope,
    FaTimes
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

const SocialPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const popupRef = useRef(null);

    // Show icons after a short delay on page load
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // const socialLinks = [
    //     { icon: faFacebook, url: "https://www.facebook.com/hari.kishor.5494/", label: "Facebook" },
    //     { icon: faInstagram, url: "https://instagram.com/__mr__attitude_7/", label: "Instagram" },
    //     { icon: faEnvelope, url: "mailto:wimse51@gmail.com", label: "Email" }
    // ];

    // Social media platforms with their colors and links
    const socialPlatforms = [
        {
            name: "Facebook",
            icon: <FaFacebookF />,
            color: "#1877F2",
            hoverColor: "#0d66d9",
            link: "https://www.facebook.com/hari.kishor.5494/",
            aria: "Follow us on Facebook"
        },
        {
            name: "Twitter",
            icon: <FaTwitter />,
            color: "#1DA1F2",
            hoverColor: "#0c85d0",
            link: "/something-went-wrong/",
            aria: "Follow us on Twitter"
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            color: "#E4405F",
            hoverColor: "#c1351d",
            link: "https://instagram.com/__mr__attitude_7/",
            aria: "Follow us on Instagram"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedinIn />,
            color: "#0077B5",
            hoverColor: "#005885",
            link: "/something-went-wrong/",
            aria: "Connect with us on LinkedIn"
        },
        {
            name: "WhatsApp",
            icon: <FaWhatsapp />,
            color: "#25D366",
            hoverColor: "#128C7E",
            link: "https://wa.me/7382744791",
            aria: "Contact us on WhatsApp"
        },
        {
            name: "Email",
            icon: <FaEnvelope />,
            color: "#EA4335",
            hoverColor: "#c23321",
            link: "mailto:wimse51@gmail.com",
            aria: "Send us an email"
        }
    ];

    // Animation variants for the main FAB
    const fabVariants = {
        initial: { scale: 0 },
        animate: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 15
            }
        },
        whileHover: {
            scale: 1.1,
            rotate: 15,
            transition: { duration: 0.3 }
        },
        whileTap: {
            scale: 0.9,
            rotate: -15,
            transition: { duration: 0.3 }
        }
    };

    // Animation variants for social icons
    const iconVariants = {
        initial: { opacity: 0, y: 20 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }),
        exit: (index) => ({
            opacity: 0,
            y: 20,
            transition: {
                delay: (socialPlatforms.length - index - 1) * 0.05,
                duration: 0.2
            }
        }),
        hover: {
            scale: 1.2,
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-4"
            initial="initial"
            animate="animate"
            ref={popupRef}
        >
            {/* Social icons container */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="flex flex-col gap-4 mb-4"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        
                    >
                        {socialPlatforms.map((platform, index) => (
                            <motion.a
                                key={platform.name}
                                href={platform.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={platform.aria}
                                variants={iconVariants}
                                custom={index}
                                className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300"
                                style={{ backgroundColor: platform.color }}
                                whileHover={{
                                    backgroundColor: platform.hoverColor,
                                    y: -5,
                                    boxShadow: `0 10px 25px -5px ${platform.color}80`
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {platform.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            {isVisible && (
                <motion.button
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-xl z-10"
                    variants={fabVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    whileTap="whileTap"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close social menu" : "Open social menu"}
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaTimes className="text-xl" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="share"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaMessage   className="text-xl" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            )}

            {/* Floating particles effect */}
            <AnimatePresence>
                {isOpen && (
                    <div  className="absolute inset-0 pointer-events-none">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-white/30"
                                style={{
                                    width: Math.random() * 8 + 2,
                                    height: Math.random() * 8 + 2,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    x: [0, (Math.random() - 0.5) * 100],
                                    y: [0, (Math.random() - 0.5) * 100],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 2 + 1,
                                    repeat: Infinity,
                                    delay: Math.random() * 0.5,
                                }}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default SocialPopup;