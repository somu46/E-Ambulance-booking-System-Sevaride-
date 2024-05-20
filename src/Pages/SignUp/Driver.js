import React, { useState } from "react";
import "./driver.css";
import user from "../../Assets/person.png";
import mobile from "../../Assets/phone.png";
import dl from "../../Assets/License.png";
import email from "../../Assets/email.png";
import Button from "../../components/Button/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Driver = () => {
  
  const navigate=useNavigate();
  const [driverName, setDriverName] = useState("");
  const [mobileNumber, setMobileNumber] = useState(0);
  const [emailId, setEmailId] = useState("");
  const [licence, setLicence] = useState("");

  const handleSubmitDriver = (event) => {
    event.preventDefault();
    const driverData = {
      driverName,
      mobileNumber,
      emailId,
      licence,
      Roll:"Driver",
    };

     if(!driverData.driverName || !driverData.mobileNumber || !driverData.emailId || !driverData.licence){

    toast.error("All fields are Require");
    return;

     }
      
     toast.success(`${driverData.driverName}: successfully ! is Logged In as a Ambulance Driver`)
    
     setTimeout(() => {
       navigate("/ride");
     }, 3000);
    console.log(driverData);
  };

  return (
    <>
      <div className="driver-container ">
        <h2>Hello driver</h2>
        <form
          className="flex flex-wrap justify-center"
          onSubmit={handleSubmitDriver}
        >
          <div className="driver-login">
            <img src={user} alt="driver" />
            <input
              placeholder="Name"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
            />
          </div>

          <div className="driver-login">
            <img src={mobile} alt="driver" />
            <input
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="driver-login">
            <img src={email} alt="driver-mail" />
            <input
              placeholder="Email ID"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          <div className="driver-login">
            <img src={dl} alt="driver DL" />
            <input
              placeholder="driving licence Number"
              value={licence}
              onChange={(e) => setLicence(e.target.value)}
            />
          </div>
          <button type="submit">
            <Button title={"Submit"} />
          </button>
        </form>
      </div>
    </>
  );
};
export default Driver;
