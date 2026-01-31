import React from 'react';
import PhoneIcon from './icons/PhoneIcon';
import './FloatingCallButton.css';

const FloatingCallButton = () => {
    const phoneNumber = "+917708897598";
    const displayPhoneNumber = "+91 77088 97598";

    return (
        <a
            href={`tel:${phoneNumber}`}
            className="floating-call-btn"
            aria-label={`Call us at ${displayPhoneNumber}`}
            title="Call Us Now"
        >
            <PhoneIcon size={24} color="white" />
            <span className="call-tooltip">Call Now</span>
        </a>
    );
};

export default FloatingCallButton;
