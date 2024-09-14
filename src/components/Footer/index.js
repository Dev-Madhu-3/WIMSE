import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './index.css'

function Footer() {

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section address">
                    <h4>Address</h4>
                    <p>23/1219, SODHAN NAGAR, BEHIND APSRTC BUSSTAND, NELLORE, ANDHRA PRADESH -524001</p>
                </div>

                <div className="footer-section contact">
                    <h4>Contact</h4>
                    <p>Phone: +917382744791, +919030030126</p>
                    <p>Email: WIMSE51@GMAIL.COM</p>
                </div>

                <div className="footer-section social-media">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/hari.kishor.5494/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                        </a>
                        <a href="https://instagram.com/__mr__attitude_7/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                        <a href="mailto:wimse51@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 WIMSE CONSULTANCY. All Rights Reserved.</p>
            </div>
        </footer>
    )

}

export default Footer