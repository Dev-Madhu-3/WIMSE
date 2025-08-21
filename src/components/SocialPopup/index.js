import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialPopup = () => {

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
            {/* Instagram Button */}
            <a
                href="https://instagram.com/__mr__attitude_7/"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:scale-110 hover:shadow-xl animate-zoomInOut"
                aria-label="Instagram"
            >
                <FaInstagram size={24} />
            </a>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/7382744791"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 hover:shadow-xl animate-zoomInOut"
                aria-label="WhatsApp"
            >
                <FaWhatsapp size={24} />
            </a>
{/* 
            <a
                href="https://www.facebook.com/hari.kishor.5494/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:scale-110 hover:shadow-xl animate-zoomInOut"
                aria-label="Facebook"
            >
                <FaFacebook size={24} />
            </a> */}
        </div>
    );
};

export default SocialPopup;
