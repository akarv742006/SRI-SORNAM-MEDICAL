import React, { useState } from 'react';
import PhoneIcon from './icons/PhoneIcon';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <a href="#" className="navbar-logo">
                    <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Sri Sornam Medical Logo" className="logo-img" />
                    <span>SRI SORNAM MEDICAL</span>
                </a>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>
                        <PhoneIcon size={18} />
                        Contact
                    </a>
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
