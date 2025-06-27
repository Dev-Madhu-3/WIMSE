import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import { Rotate } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (<>
        <footer id='footer' className="footer">
            <div className="footer-content">
                <div className="footer-section address">
                    <div className='logo-container my-5'>
                        <img
                            className='logo'
                            src='https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739532323/VIMS_COLLEGE_LOGO_2_copy_1_umczs1.png'
                            alt='LOGO'
                        />
                        <div className='logo-text-container'>
                            <h1 className='logo-text'>WIMSE</h1>
                            <h5 className='logo-text-span'>EDUCATIONAL CONSULTANCY</h5>
                        </div>

                    </div>
                    <p>23/1219, SODHAN NAGAR, BEHIND APSRTC BUSSTAND, NELLORE, ANDHRA PRADESH -524001</p>
                    <p>Phone: +917382744791, +919030030126</p>
                    <p>Email: WIMSE51@GMAIL.COM</p>
                </div>

                <div className="footer-section links">
                    <h4 style={{ fontSize: '1.2rem' }}>Follow Us</h4>
                    <div className="social-icons">
                        <Rotate cascade damping={0.1}>
                            <a href="https://www.facebook.com/hari.kishor.5494/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="icon" />
                            </a>
                            <a href="https://instagram.com/__mr__attitude_7/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </a>
                            <a href="mailto:wimse51@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            </a>
                        </Rotate>
                    </div>
                    <div className="useful-links">
                        <h3>Useful Links</h3>
                        <div className='footer-nav-links'>
                            <Link className='nav-link-item' onClick={scrollToTop} to="/">Home</Link>
                            {/* <Link to='/courses' className='no-text-decoration'>All Courses</Link> */}
                            <Link to='/courses/distance' className='course-dropdown-icon-container no-text-decoration'>
                                Distance Learning
                            </Link>
                            <Link className='nav-link-item' to="/courses/regular">Regular Cources</Link>
                            <Link className='nav-link-item' to="/universities">Universities</Link>
                            {/* <Link className='nav-link-item' to="/student-support">Student Support</Link> */}
                            <Link className='nav-link-item' to="/about">About Us</Link>
                        </div>
                    </div>

                </div>

                <div className="footer-section social-media">
                    <h3 className='text-[1rem] mt-2 mb-1'>Our Location</h3>
                    <div className="map-container" style={{ width: '100%', height: '250px' }}>
                        <iframe
                            title="WIMSE Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.930657263064!2d79.98124423082674!3d14.45315045223795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf391f2a5cf85%3A0xadc5d152f6815c7e!2sWIMSE%20Educational%20Consultancy!5e0!3m2!1sen!2sin!4v1719249402504!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>


            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 WIMSE CONSULTANCY. All Rights Reserved.</p>
            </div>
        </footer>
    </>
    )

}

export default Footer