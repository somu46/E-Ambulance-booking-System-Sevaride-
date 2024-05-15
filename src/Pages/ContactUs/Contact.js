import React from 'react'
import "./Contact.css";
import user from "../../Assets/person.png";
import email from "../../Assets/email.png";
import mobile from "../../Assets/phone.png";
import contact from "../../Assets/contactus.png"
function Contact() {
  return (

      <>
      <div className='flex flex-wrap  justify-center items-center text-4xl text-red-600 font-bold text-center min-h-screen'>Contact Us  ! This page is under Devlopment</div>
      </>  

    <div className="contact">
      <div className="contactus">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.51860354846207!2d88.43279703281547!3d22.573536319478688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027576fbe9413f%3A0x4cc52b8725f7cddf!2sVDesk.space!5e0!3m2!1sen!2sin!4v1715680991179!5m2!1sen!2sin"
            width="550"
            height="500">
          </iframe>
        </div>
        <div className="details">
          <h2>HEAD QUATERS</h2>
          <p><b>Address:</b> Godrej Genesis Building, Block EP&GP, Sector V,<br />
            Bidhannagar, Kolkata, West Bengal 700091
          </p>
          <h2>MAIL US</h2>
          <p>contact@sevaride.com<br /> support@sevaride.com</p>
          <h2>CONTACT US</h2>
          <p>+91 8584999307 <br /> +919123863528 <br /> +91 6574123459</p>
        </div>
      </div>
      {/*Suggestions...*/}
      <div className="suggestions">
        <div className="form">
               <div className="input">
                <img src={user} alt="user" />
                <input type="text" className="inputBox" placeholder="Enter Your Name"/>
              </div><br/>
              <div className="input">
                <img src={mobile} alt="user" />
                <input type="number" className="inputBox" placeholder="Enter Your Mobile Number" />
              </div><br/>
              <div className="input">
                <img src={email} alt="user"/>
                <input type="text" className="inputBox" placeholder="Your Suitable Suggestions" />
              </div><br/>
        </div>
        <div className="image">
          <img src={contact} alt='pic'/>
        </div>
      </div>
    </div>



  )
}

export default Contact