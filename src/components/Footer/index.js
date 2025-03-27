import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './index.css'
import { Rotate } from 'react-awesome-reveal'

const links = ['Our Courses', 'University', 'Help', 'About Us']

function Footer() {

    return (<>
        <footer id='footer' className="footer">
            <div className="footer-content">

                <div className="footer-section address">
                    <div className='logo-container'>
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
                        <div>
                            {links.map((link, index) => (
                                <nav key={index}>
                                    <a href="#Home">{link}</a>
                                </nav>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="footer-section social-media">
                    <form className="twitter-form">
                        <h3>Quick Contact</h3>
                        <input type="email" placeholder="Enter Email" />
                        <textarea placeholder="Enter Message"></textarea>
                        <button type="submit">Submit</button>
                    </form>
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