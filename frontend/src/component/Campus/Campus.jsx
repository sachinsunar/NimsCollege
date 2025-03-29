import React from 'react'
import './Campus.css';
import gallery_1 from '../../assets/img/gallery-1.png';
import gallery_2 from '../../assets/img/gallery-2.png';
import gallery_3 from '../../assets/img/gallery-3.png';
import gallery_4 from '../../assets/img/gallery-4.png';
import white_arrow from '../../assets/img/white-arrow.png';

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="Campus Photo of Library" />
        <img src={gallery_2} alt="Campus Photo of Study Desk" />
        <img src={gallery_3} alt="Campus Photo of Students with Degree" />
        <img src={gallery_4} alt="Campus Photo of Student with Degree" />
      </div>
      <button className='btn dark-btn'>See More Here</button>
    </div>
  )
}

export default Campus
