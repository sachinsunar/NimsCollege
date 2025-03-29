import React from 'react';
import './CallToAction.css'; // Import the CSS file
import next_icon from '../../assets/img/next-icon.png';

const CallToAction = () => {
    return (
        <section className="call-to-action">
            <div className="cta-container">
                <div className="cta-row">
                    <div className="cta-content">
                        <div className="cta-box">
                            <div className="cta-inner-row">
                                <div className="cta-text">
                                    <h2>Subscribe</h2>
                                    <p>Now go push your own limits and succeed!</p>
                                </div>
                                <div className="cta-form">
                                    <form>
                                        <input type="email" placeholder="Enter your email" />
                                        <button type="submit">
                                            <img src={next_icon} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;