import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const benefits = [
        {
            title: "100% Genuine Medicines",
            description: "We source directly from manufacturers to ensure authenticity.",
            icon: "🛡️"
        },
        {
            title: "Fast Home Delivery",
            description: "Get your medicines delivered to your doorstep quickly.",
            icon: "🚚"
        },
        {
            title: "Expert Pharmacists",
            description: "Qualified team to guide you on dosage and usage.",
            icon: "👨‍⚕️"
        }
    ];

    return (
        <section className="why-choose-us">
            <div className="container">
                <h2 className="section-title">Why Choose Sri Sornam Medical?</h2>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
