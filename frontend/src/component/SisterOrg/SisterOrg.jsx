import React from 'react';
import './SisterOrg.css'; // External CSS file

const SisterOrg = () => {
    return (
        <div className="sister-org-card">
            <div className="sister-org-logo">
                <img src='https://nirvanacollege.edu.np/wp-content/uploads/2022/01/Nirvana-school-college-logo-1.png' alt="Sister Organization Logo" />
            </div>
            <div className="sister-org-content">
                <h2>Nirvana School & College</h2>
                <p>
                    Kumaripati, Lalitpur,
                    01-5435872
                    nirvanacollege@gmail.com
                </p>
                <a
                    href="https://nirvanacollege.edu.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                >
                    Visit Website
                </a>
                <a
                    href="https://nirvanacollege.edu.np/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ marginLeft: '10px', backgroundColor: '#f2f2f2', color: '#000F38' }}
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
};

export default SisterOrg;