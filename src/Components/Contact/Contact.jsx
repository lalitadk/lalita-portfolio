import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import youtube from '../../assets/youtube.svg'
import github from '../../assets/github.svg'
import linkedIn from '../../assets/linkedIn.svg'
import instagram_icon from '../../assets/instagram_icon.svg'
import facebook_icon from '../../assets/facebook_icon.svg'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "859c06eb-483b-4199-baa5-55ededf84d81");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(response.message);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='Contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'am currently available to take on new projects,so feel free to send me a message about anything that you want to work on.You can contact anytime</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>lalitakshirsagar22@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 8805245024</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Pune,Maharashtra</p>
            </div>
          </div>
          <div className="connect-info">
            <p>Connect with me</p>
            <div className='icons'>
              <a href="https://www.linkedin.com/in/lalita-kshirsagar" target="_blank" rel="noopener noreferrer">
                <img src={linkedIn} alt="" />
              </a>
              <a href="https://github.com/lalitadk" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="" />
              </a>
              <a href="https://www.youtube.com/@lalitakshirsagar8583" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="" />
              </a>
              <a href="https://www.instagram.com/_lalita_4712" target="_blank" rel="noopener noreferrer">
                <img src={instagram_icon} alt="" />
              </a>
              <a href="https://www.facebook.com/lalita.kshirsagar.908" target="_blank" rel="noopener noreferrer">
                <img src={facebook_icon} alt="" />
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlfor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' required/>
            <label htmlfor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' required/>
            <label htmlfor="">Write your message here</label>
            <textarea name='message' rows="8" placeholder='Enter your message' required></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}
export default Contact;

