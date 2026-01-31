import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = ({ prefilledItems }) => {
    // Placeholder - Replace with actual number
    const phoneNumber = "917708897598";

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        medicines: ''
    });

    React.useEffect(() => {
        if (prefilledItems && prefilledItems.length > 0) {
            const list = prefilledItems.map(item => `• ${item}`).join('\n');
            setFormData(prev => ({
                ...prev,
                medicines: list
            }));
        }
    }, [prefilledItems]);

    const [isLocating, setIsLocating] = useState(false);

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            setIsLocating(true);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
                    setFormData(prev => ({
                        ...prev,
                        address: `${prev.address ? prev.address + '\n' : ''}Google Maps Location: ${mapsLink}`
                    }));
                    setIsLocating(false);
                },
                (error) => {
                    setIsLocating(false);
                    let errorMessage = "Unable to fetch location.";
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            errorMessage = "Location permission denied. Please allow access in browser settings.";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            errorMessage = "Location information is unavailable.";
                            break;
                        case error.TIMEOUT:
                            errorMessage = "The request to get user location timed out.";
                            break;
                        default:
                            errorMessage = "An unknown error occurred.";
                            break;
                    }
                    alert(errorMessage);
                    console.error("Error fetching location:", error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `*New Order Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Address:* ${formData.address}%0A%0A*Medicines/Items Needed:*%0A${formData.medicines}`;

        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    };

    return (
        <section id="order" className="order-form-section">
            <div className="container">
                <div className="form-wrapper">
                    <h2 className="section-title">Order Medicines</h2>
                    <p className="form-subtitle">Type your list and order directly on WhatsApp!</p>

                    <form onSubmit={handleSubmit} className="order-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Your Contact Number"
                            />
                        </div>

                        <div className="form-group">
                            <label>Delivery Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                placeholder="Full Address with Landmark"
                            ></textarea>
                            <button
                                type="button"
                                className="location-btn"
                                onClick={handleLocationClick}
                                disabled={isLocating}
                            >
                                {isLocating ? '⏳ Fetching Location...' : '📍 Use My Current Location'}
                            </button>
                        </div>

                        <div className="form-group">
                            <label>Medicines / Items List</label>
                            <textarea
                                name="medicines"
                                value={formData.medicines}
                                onChange={handleChange}
                                required
                                placeholder="List required medicines or products..."
                                rows="5"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn submit-btn">Send Order via WhatsApp 🚀</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default OrderForm;
