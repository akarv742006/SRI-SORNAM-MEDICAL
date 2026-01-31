import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            name: "Ravi Kumar",
            comment: "Excellent service! They always have the medicines I need.",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            name: "Priya S.",
            comment: "Very helpful staff and quick delivery. Highly recommended.",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            name: "Anitha M.",
            comment: "Trustworthy pharmacy with genuine products.",
            rating: "⭐⭐⭐⭐"
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">What Our Customers Say</h2>
                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="rating">{review.rating}</p>
                            <p className="comment">"{review.comment}"</p>
                            <h4 className="customer-name">- {review.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
