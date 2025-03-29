import React from 'react'
import './Program.css';
import program_1 from '../../assets/img/bca.png';
import program_2 from '../../assets/img/bsw.png';
import program_3 from '../../assets/img/bbs.png';
import program_4 from '../../assets/img/ba.png';
import program_5 from '../../assets/img/ma.png';
import program_6 from '../../assets/img/mbs.png';
import program_icon_1 from '../../assets/img/program-icon-1.png';
import program_icon_2 from '../../assets/img/program-icon-2.png';
import program_icon_3 from '../../assets/img/program-icon-3.png';

const Program = () => {
  return (
    <>
      <div className='programs '>
        <div className="program">
          <img src={program_1} alt=" A student Photo" />
          <div className="caption">
            <img src={program_icon_1} alt=" program Icon" />
            <p style={{ textAlign: "center" }}>BCA <br /> (Bachelor in Computer Application)</p>
          </div>
        </div>

        <div className="program">
          <img src={program_2} alt=" A student Photo" />
          <div className="caption">
            <img src={program_icon_2} alt=" program Icon" />
            <p style={{ textAlign: "center" }}>BSW <br /> (Bachelor of Social Work)</p>
          </div>
        </div>

        <div className="program">
          <img src={program_3} alt=" A student Photo" />
          <div className="caption">
            <img src={program_icon_3} alt=" program Icon" />
            <p>Post Graduation</p>
          </div>
        </div>
        <div className="program">
          <img src={program_4} alt=" A student Photo" />
          <div className="caption">
            <img src={program_icon_1} alt=" program Icon" />
            <p style={{ textAlign: "center" }}>BCA <br /> (Bachelor in Computer Application)</p>
          </div>
        </div>

        <div className="program">
          <img src={program_5} alt=" A student Photo" />
          <div className="caption">
            <img src={program_icon_2} alt=" program Icon" />
            <p style={{ textAlign: "center" }}>BSW <br /> (Bachelor of Social Work)</p>
          </div>
        </div>

        <div className="program">
          <img src={program_6} alt=" A student Photo" />
          <div className="caption">
            <img src={program_icon_3} alt=" program Icon" />
            <p>Post Graduation</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Program
