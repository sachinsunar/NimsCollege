import React from 'react'
import { NavLink } from 'react-router'

const SubHeader = ({ subheader, imageUrl }) => {
    return (
        <div className='hero abouthero container' style={{
            backgroundImage: `linear-gradient(rgba(26, 40, 68, 0.705), rgba(26, 40, 68, 0.705)), url(${imageUrl})`
        }}>
            <div className="hero-text">
                <h1>{subheader}</h1>
                <p>  <NavLink to="/" smooth='true' offset={-260} duration={500}>
                    Home
                </NavLink>/ <span style={{ color: '#a61d37' }}>{subheader}</span></p>
            </div>
        </div>
    )
}

export default SubHeader