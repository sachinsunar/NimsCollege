import React from 'react';
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
    return (
        <div className="action-section">
            <div className="action-container">
                <div className="action-content">
                    <span className="action-subtitle">Are you ready to start your journey with us?</span>
                    <h2 className="action-title">Education for Individual and Social Responsibility</h2>
                    <div className="action-buttons">
                        <a className="btn btn-primary" href="#">Become A Student</a>
                        <a className="btn btn-white" style={{ backgroundColor: "#fff", color: "#000F38" }} href="#">Discover More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;