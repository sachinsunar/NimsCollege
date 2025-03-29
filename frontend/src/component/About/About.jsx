import React from 'react';
import about_img from '../../assets/img/about.png';
import play_icon from '../../assets/img/play-icon.png';
import './About.css';

const About = ({ setPlayState }) => {
  return (
    <>
      <div className="personal-education-section">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-content">
              <div className="section-title">
                <h2>WELCOME TO <span style={{ color: "#a61d37", fontWeight: "700" }}>NIMS COLLEGE</span></h2>
                <p className="lead">
                  NIMS College was established in 2007. Over a decade of successful run it is now one of the popular College of Management. In 2018, the College was led by a new academic team of highly reputed professionals in research and education.
                </p>
              </div>
              <p className="description">
                NIMS College is renowned for its innovation labs in areas like Strategic Planning, Digital Marketing, Patan Metal Crafts, Himalayan Natural Products, Social Marketing, Deliberative Governance, and Social Entrepreneurship. The college also organizes and participates in events such as think tank forums, environmental sociology fellowships, and grant-writing and fundraising initiatives.                  </p>
              <a href="#" className="btn">Read More</a>
            </div>
            <div className="image-content">
              <div className="image-grid">
                <div className="image-large">
                  <img src='https://themes.potenzaglobalsolutions.com/html/academic/images/about/01.jpg' alt="Large Image" />
                </div>
                <div className="image-small">
                  <img src='https://themes.potenzaglobalsolutions.com/html/academic/images/about/02.jpg' className='img2' alt="Small Image 1" />
                  <div className="image-with-overlay">
                    <img src='https://themes.potenzaglobalsolutions.com/html/academic/images/about/03.jpg' alt="Small Image 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  )
}

export default About
