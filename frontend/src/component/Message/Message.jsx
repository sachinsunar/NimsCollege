import React, { useState, useEffect } from "react";
import "./PrincipalMessage.css"; // Import external CSS

const messages = [
    {
        name: "Bidya Shrestha",
        position: "Chairperson",
        image: "https://nirvanacollege.edu.np/wp-content/uploads/2022/01/Chairman-1.png", // Replace with actual image URL
        message:
            "Education fundamentally deals with human experience. It is a process of comprehending and interpreting human experiences. Now is the time for students to create their own dreams, follow their own paths, and emerge as leaders.",
    },
    {
        name: "John Doe",
        position: "Principal",
        image: "https://nirvanacollege.edu.np/wp-content/uploads/2022/01/Chairman-1.png", // Replace with actual image URL
        message:
            "We believe in transforming students into responsible citizens. Our learning approach includes social engagement, critical thinking, and leadership programs to prepare students for the future.",
    },
    {
        name: "Jane Smith",
        position: "Vice Principal",
        image: "https://nirvanacollege.edu.np/wp-content/uploads/2022/01/Chairman-1.png", // Replace with actual image URL
        message:
            "Our vision is to create a learning atmosphere where students grow not just academically but holistically. We focus on psychological, social, and analytical skills for lifelong learning.",
    },
];

const Message = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="message-container">
            <h2 className="message-title">Warm Greetings from Us</h2>
            <div className="message-card">
                <img
                    src={messages[currentIndex].image}
                    alt={messages[currentIndex].name}
                    className="message-image"
                />
                <div className="message-content">
                    <h3 className="message-person">{messages[currentIndex].name}</h3>
                    <p className="message-position">{messages[currentIndex].position}</p>
                    <p className="message-text">{messages[currentIndex].message}</p>
                </div>
            </div>
            <div className="dots">
                {messages.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Message;
