import { useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Contact.css'

function Contact() {
    const contactFormInitials = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [contactFormDetails, setContactFormDetails] = useState(contactFormInitials);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setContactFormDetails({
          ...contactFormDetails,
          [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("Message sent successfully! Thank you!")
        setButtonText("Sending...");
        const response = await fetch("http://localhost:3000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactFormDetails),
        });
        setButtonText("Send");
        const result = await response.json();
        setContactFormDetails(contactFormInitials);
        if (result.code === 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
        
      };
    

    return (
        <section className="contact-form" id="contact">
            <h2 className="contact-title">Contact Me</h2>
            <div className="contactme-container">
                {/* <div className="row align-items-center"> */}
                <div className="contact-image" size={12} md={6}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src="https://plus.unsplash.com/premium_photo-1682310473661-7a334b46e164?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact Us" id="contact-form-image"/>
                    }
                    </TrackVisibility>
                </div>
                <div className="col" size={12} md={6}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""} id="getInTouch">
                        <h2 className="getInTouchTitle">Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                        <div className="form-container">
                            <div className="col">
                            <input type="text" value={contactFormDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required/>
                            </div>
                            <div className="col">
                            <input type="text" value={contactFormDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                            </div>
                            <div className="col">
                            <input type="email" value={contactFormDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required/>
                            </div>
                            <div className="col">
                            <input type="tel" value={contactFormDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} required/>
                            </div>
                            <div className="col">
                            <textarea rows="6" value={contactFormDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                            <button type="submit"><span>{buttonText}</span></button>
                            </div>
                            {
                            status.message &&
                            <div className="col">
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </div>
                            }
                        </div>
                        </form>
                    </div>}
                    </TrackVisibility>
                </div>
                </div>
            {/* </div> */}
        </section>
    )
}

export default Contact;