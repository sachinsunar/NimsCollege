import React from 'react'
import SubHeader from '../component/SubHeader/SubHeader'
import Contact from '../component/Contact/Contact'
import Title from '../component/Title/Title.jsx'
import contacthero from '../assets/img/contacthero.jpg'

const ContactPage = () => {
    return (
        <div>
            <SubHeader subheader={"Contact us"} imageUrl={contacthero} />

            <div className='container'>
                <section className="location">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4857466804547!2d85.31743237618691!3d27.67137802707565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19da04835ff9%3A0xb0752fe02aef5c81!2sNirvana%20College!5e0!3m2!1sen!2snp!4v1742303870007!5m2!1sen!2snp"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>
                <Title title={"Get in Touch"} />

                <Contact />
            </div>


        </div>
    )
}

export default ContactPage