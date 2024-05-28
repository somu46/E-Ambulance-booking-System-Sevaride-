import React from 'react'
import "./Contact.css";
import user from "../../Assets/person.png";
import email from "../../Assets/email.png";
import mobile from "../../Assets/phone.png";
// import contact from "../../Assets/contactus.png"
import getintouch from "../../Assets/contact-us.png"

function Contact() {
  return (

    <>  

    <div className="contact">
      <div className="contactus">
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6598570986534!2d88.44885553788362!3d22.629173624046448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f1492f6354b%3A0x795ae2f7973148c!2sRay!5e0!3m2!1sen!2sin!4v1716341640892!5m2!1sen!2sin" 
        width="850" 
        height="600" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        title='google Map'
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>
          
        </div>
        <div className="details">
          <img src={getintouch} alt="error"/>
          <h2>HEAD QUATERS</h2>
          <p><b>Address:</b> Upahar, Rajarhat Main Rd, Tali Park, Newtown, Kolkata, West Bengal 700052
          </p>
          <h2>MAIL US</h2>
          <p>contact@sevaride.com<br /> support@sevaride.com</p>
          <h2>CONTACT US</h2>
          <p>+91 8584999307 <br /> +91 9123813528 <br /> +91 6574123459</p>
        </div>
      </div>
      {/*Suggestions...*/}

      <div className="suggestions">
        
        <div className="form">
              <div className="input-contact">
                <img src={user} alt="user" />
                <input type="text" className="inputBox-contact" placeholder="Enter Your Name"/>
              </div>
              <div className="input-contact">
                <img src={mobile} alt="user" />
                <input type="number" className="inputBox-contact" placeholder="Enter Your Mobile Number" />
              </div>
              <div className="input-contact">
                <img src={email} alt="user"/>
                <input type="text" className="inputBox-contact" placeholder="Your Suitable Suggestions" />
              </div>
              <button type='submit' className='submit-button'>Submit</button>
        </div>
      </div>
    </div>
    </>

  )
}

export default Contact