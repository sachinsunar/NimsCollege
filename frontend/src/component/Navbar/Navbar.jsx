import React, { useEffect, useState } from 'react'
import './Navbar.css'
import './UpperNav.css'
import logo from '../../assets/img/logo.png';
import menu_icon2 from '../../assets/img/menu-icon2.png';
import cross from '../../assets/img/cross.png'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router';


const Navbar = () => {


  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <>
      {/* Upper Navbar */}
      <div className="upper-nav">
        <div className="upper-nav-content">
          <span><i className="ri-map-2-fill"></i> Kumaripati, Lalitpur</span>
          <span><i className="ri-phone-fill"></i> 01-5438017</span>
          <span><i className="ri-mail-fill"></i>  nimscollege75@gmail.com</span>

        </div>
        <div className="upper-nav-social">
          <span><i className="ri-time-fill"></i>   Opening 6:30AM-10:00AM</span>
          <a href="https://www.facebook.com/NIMScollege756" className="social-icon" target='_blank'><i className="ri-facebook-fill"></i></a>
          <a href="#" className="social-icon"><i className="ri-instagram-fill"></i></a>
          <a href="#" className="social-icon"><i className="ri-whatsapp-fill"></i></a>
          <a href="#" className="social-icon"><i className="ri-linkedin-fill"></i></a>
        </div>
      </div>

      <nav className={`container dark-nav`}>
        <Link to='/'>
          <img src={logo} alt="Logo of website" className='logo' />
        </Link>

        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <NavLink to="/" smooth='true' offset={-260} duration={500}>
            <li>Home</li>
          </NavLink>

          <NavLink to="/about">
            <li>About Us</li>
          </NavLink>

          <NavLink to="/program">
            <li>Our Programs</li>
          </NavLink>

          <NavLink to="/newsandnotice">
            <li>News and Notice</li>
          </NavLink>

          <NavLink to="/gallery">
            <li>Gallery</li>
          </NavLink>

          <NavLink to="/contact" >
            <li >Contact</li>
          </NavLink>

          <NavLink to="/admission">
            <button className='btn dark-btn' style={{ marginLeft: '30px', backgroundColor: '#a61d37' }}>Admission Form</button>
          </NavLink>



        </ul>
        {
          mobileMenu ? <img src={cross} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
            : <img src={menu_icon2} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
        }

      </nav>
    </>
  )
}

export default Navbar
