import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1> Exceptional Education Exceptional Value.</h1>
        <p>NIMS College for Bachelor and Master Level Programs Affiliated to Tribhuvan University.  </p>
        <button className='btn' style={{ backgroundColor: '#ffffff', color: '#1a2844' }}> Read More </button>
        <Link to="personal-education-section" smooth={true} offset={-260} duration={500}><button className='btn' style={{ marginLeft: '10px' }}> Explore More </button></Link>
      </div>

    </div>
  )
}

export default Hero
