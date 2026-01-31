import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>Your Trusted Neighborhood Pharmacy</h1>
                    <p>Genuine medicines, health supplements, and baby care products delivered with care. Sri Sornam Medical is here for your family's wellness.</p>
                    <a href="#products" className="btn hero-btn">Order Medicines</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
