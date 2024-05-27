import React, { useState } from "react";
import "./driver.css";
import user from "../../Assets/person.png";
import mobile from "../../Assets/phone.png";
import dl from "../../Assets/License.png";
import email from "../../Assets/email.png";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import qs from "qs";

const Driver = () => {
  const navigate = useNavigate();
  const [driverName, setDriverName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [licence, setLicence] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitDriver = async (event) => {
    event.preventDefault();

    if (!isOtpSent) {
      // First step: Validate the input fields and send OTP
      if (!driverName || !mobileNumber || !emailId || !licence) {
        toast.error("All fields are required");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobilePattern = /^[0-9]{10}$/;

      if (!emailPattern.test(emailId)) {
        toast.error("Invalid email format");
        return;
      }

      if (!mobilePattern.test(mobileNumber)) {
        toast.error("Mobile number should be 10 digits");
        return;
      }

      setIsLoading(true);

      // Generate OTP
      const otps = Math.floor(100000 + Math.random() * 900000).toString();
      const finalOtp = `Welcome in SevaRide ${driverName}, Your OTP is: ${otps}`;
      setGeneratedOtp(otps);

      // Send OTP
      const data = qs.stringify({
        token: "ur0xsrzgr2gtvtgu",
        to: mobileNumber,
        body: finalOtp,
      });

      const config = {
        method: "post",
        url: "https://api.ultramsg.com/instance86018/messages/chat",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      try {
        await axios(config);
        setIsOtpSent(true);
        toast.success(`OTP sent to ${mobileNumber}`);
      } catch (error) {
        toast.error("Failed to send OTP. Please try again.");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      // Second step: Validate the OTP
      if (!otp) {
        toast.error("Please enter the OTP sent to your mobile number.");
        return;
      }

      if (otp === generatedOtp) {
        toast.success(`${driverName}: successfully logged in as an Ambulance Driver`);

        setTimeout(() => {
          navigate("/driverRide");
        }, 3000);

        console.log({ driverName, mobileNumber, emailId, licence, Role: "Driver" });
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    }
  };

  return (
    <div className="driver-container-login">
      <Toaster />
      <h2>Hello Driver</h2>
      <form className="flex flex-wrap justify-center" onSubmit={handleSubmitDriver}>
        <div className="driver-login">
          <img src={user} alt="driver" />
          <input
            type="text"
            placeholder="Name"
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
          />
        </div>

        <div className="driver-login">
          <img src={mobile} alt="driver" />
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        <div className="driver-login">
          <img src={email} alt="driver-mail" />
          <input
            type="text"
            placeholder="Email ID"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </div>

        <div className="driver-login">
          <img src={dl} alt="driver DL" />
          <input
            type="text"
            placeholder="Driving Licence Number"
            value={licence}
            onChange={(e) => setLicence(e.target.value)}
          />
        </div>

        {isOtpSent && (
          <div className="driver-login">
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        )}

        <button type="submit" className="mb-1" disabled={isLoading}>
          <Button title={isOtpSent ? "Validate OTP" : "Submit"} />
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Driver;
