import React, { useState } from 'react'
import Hero from '../component/Hero/Hero.jsx'
import Program from '../component/program/Program.jsx';
import Title from '../component/Title/Title.jsx';
import About from '../component/About/About.jsx';
import Campus from '../component/Campus/Campus.jsx';
import Testimonials from '../component/Testimonials/Testimonials.jsx';
import Contact from '../component/Contact/Contact.jsx';
import VideoPlayer from '../component/VideoPlayer/VideoPlayer.jsx';
import HeroSection from '../component/HeroSection/HeroSection.jsx';
import SisterOrg from '../component/SisterOrg/SisterOrg.jsx';
import Message from '../component/Message/Message.jsx';
import MeetOurTeam from '../component/MeetOurTeam/MeetOurTeam.jsx';

const Home = () => {
    const [playState, setPlayState] = useState(false);
    return (
        <div>
            <Hero />
            <div className="container">

                <Title subTitle='Our Program' title=' What We Offer' />
                <Program />
                <About setPlayState={setPlayState} />
                <Title title='Meet Our Team' subTitle={'Meet Our Dedicated Team, Guiding You Toward Academic Excellence and Success'} />
                <MeetOurTeam />
            </div>

            <HeroSection />



            <div className='container'>
                <Title subTitle='Gallery' title='Campus Photos' />
                <Campus />
                <Title subTitle='TESTIMONIALS' title='What Student Says' />
                <Testimonials />
                <Title subTitle='Expanding Opportunities and Collaboration for Excellence and Innovation' title='Our Sister Institute' />
                <SisterOrg />
                <Title subTitle='Contact Us' title='Get in Touch' />
                <Contact />
            </div>

            <VideoPlayer playState={playState} setPlayState={setPlayState} />
        </div>
    )
}

export default Home