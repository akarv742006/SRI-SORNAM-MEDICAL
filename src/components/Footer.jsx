import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>Sri Sornam Medical</h3>
                    <p>Your trusted partner for quality medicines and healthcare products.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>📍 1/600,south groundfloor,kalavasal busstop keelarajakularaman 626136 vembakottai taluk virdhunagar district tamilnadu </p>
                    <p>📞 +91 77088 97598</p>
                    <p>✉️ ashok770ac@gmail.com</p>
                </div>
                <div className="footer-section">
                    <h3>Opening Hours</h3>
                    <p>Mon - sun: 8:00 AM - 9:00 PM</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sri Sornam Medical. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
