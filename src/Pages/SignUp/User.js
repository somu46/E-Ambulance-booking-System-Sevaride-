import React, { useState } from 'react';
import './user.css';
import user from '../../Assets/person.png';
import mobile from '../../Assets/phone.png';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import qs from 'qs';

const User = () => {
   
  const location=useLocation();
  const userRoll=location.state?.Roll;
  const [userName,setUserName]=useState("");
   const [mobileNumber,setMobileNumber]=useState(0);
   const navigate=useNavigate();
  
  //  useEffect(() => {
  //   console.log(`User roll is: ${userRoll}`);
  // }, [userRoll]); 

   const handleSubmit=(event)=>{
    event.preventDefault();

    const PatientData = {
      userName,
      mobileNumber,
      Roll:userRoll?userRoll:"user",
    }
    console.log(PatientData)
    if(!PatientData.userName|| !PatientData.mobileNumber){
       toast.error("All field are Require!")
       return;
    }

    if (!PatientData.otp) {
      toast.error("Please enter the OTP sent to your mobile number.");
      return;
    }

    // Validate OTP
    if (PatientData.otp === generatedOtp) {
      toast.success(`${PatientData.userName} successfully logged in as Patient!`, {
        duration: 3000,
        
      });
     
      setTimeout(()=>{
        navigate("/BookNow");
      },3000)
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className='user-container-login'>
      <Toaster />
      <h2>Hello User</h2>
      <form className='flex flex-wrap justify-center' onSubmit={handleSubmit}>
        <div className='user-login'>
          <img src={user} alt='user' />
          <input
            type='text'
            placeholder='Name'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className='user-login'>
          <img src={mobile} alt='mobile' />
          <input
            type='text'
            placeholder='Mobile Number'
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        {isOtpSent && (
          <div className='user-login'>
            <input
              type='number'
              placeholder='Enter OTP'
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        )}
        <button type='submit' className='mb-1'>
          <Button title={isOtpSent ? "Validate OTP" : "Submit"} />
        </button>
      </form>
    </div>
  );
};

export default User;
