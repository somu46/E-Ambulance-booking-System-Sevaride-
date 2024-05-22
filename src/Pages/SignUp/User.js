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
  const location = useLocation();
  const userRoll = location.state?.Roll;
  const [userName, setUserName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState(""); // State to store the generated OTP
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const PatientData = {
      userName,
      mobileNumber,
      otp,
      Roll: userRoll || "user",
    };

    if (!PatientData.userName || !PatientData.mobileNumber) {
      toast.error("All fields are required!");
      return;
    }

    if (!isOtpSent) {
      // Generate OTP
      const otps = Math.floor(100000 + Math.random() * 900000).toString();
      const finalOtp = `Welcome in SevaRide ${PatientData.userName}, your OTP is: ${otps}`;
      setGeneratedOtp(otps);

      // Send OTP
      const data = qs.stringify({
        "token": "ur0xsrzgr2gtvtgu",
        "to": PatientData.mobileNumber,
        "body": finalOtp,
      });

      const config = {
        method: 'post',
        url: 'https://api.ultramsg.com/instance86018/messages/chat',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
      };

      try {
        await axios(config);
        toast.success(`OTP sent to ${PatientData.mobileNumber}`);
        setIsOtpSent(true);
      } catch (error) {
        toast.error("Failed to send OTP. Please try again.");
        console.error(error);
      }
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
      setTimeout(() => {
        navigate("/BookNow");
      }, 3000);
      
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
