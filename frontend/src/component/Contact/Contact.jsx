import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/img/msg-icon.png';
import mail_icon from '../../assets/img/mail-icon.png';
import phone_icon from '../../assets/img/phone-icon.png';
import location_icon from '../../assets/img/location-icon.png';




const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f31efdce-580e-44b1-89b1-c3c42ec8a9bf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="message icon" /></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet metus nec tortor placerat cursus. Duis aliquet tempor tincidunt. Praesent enim nisi</p>
        <ul>
          <li> <img src={mail_icon} alt="mail icon" />Contact@Lorem.com</li>
          <li><img src={phone_icon} alt="phone icon" />941-475-0708</li>
          <li><img src={location_icon} alt="location icon" /><p>3599 Medical Center Drive <br /> Englewood <br />USA</p></li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <label htmlFor="">Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
          <label htmlFor="">Write yourmessage here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact
