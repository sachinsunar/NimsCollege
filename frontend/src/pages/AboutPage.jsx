import React from 'react'
import SubHeader from '../component/SubHeader/SubHeader.jsx'
import abouthero from '../assets/img/abouthero.jpeg'
import About from '../component/About/About.jsx'
import MeetOurTeam from '../component/MeetOurTeam/MeetOurTeam.jsx'
import Title from '../component/Title/Title.jsx'



const AboutPage = () => {
    return (
        <>
            <SubHeader subheader={"About us"} imageUrl={abouthero} />
            <div className='container'>
                <About />
                <Title title='Meet Our Team' subTitle={'Meet Our Dedicated Team, Guiding You Toward Academic Excellence and Success'} />
                <MeetOurTeam />
            </div>
        </>
    )
}

export default AboutPage