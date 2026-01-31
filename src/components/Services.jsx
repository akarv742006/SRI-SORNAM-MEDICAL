import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Prescription Medicines",
            description: "Wide range of genuine prescription drugs available.",
            icon: "💊"
        },
        {
            title: "OTC Products",
            description: "Over-the-counter essentials for cold, pain, and first aid.",
            icon: "🩺"
        },
        {
            title: "Health Supplements",
            description: "Vitamins, minerals, and protein powders for your wellness.",
            icon: "💪"
        },
        {
            title: "Baby & Mom Care",
            description: "Essentials for mothers and babies, from diapers to skincare.",
            icon: "👶"
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
