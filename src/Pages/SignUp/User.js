import React, { useState } from 'react';
// import {useEffect} from 'react';
import './user.css'
import user from '../../Assets/person.png'
import mobile from '../../Assets/phone.png'
import {  useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button'
import toast from 'react-hot-toast';//toast come from one of the react 3rd party library react-hot-toast 


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

    const PatientData={
      userName,
      mobileNumber,
      Roll:userRoll?userRoll:"user",
    }
    console.log(PatientData)
    if(!PatientData.userName|| !PatientData.mobileNumber){
       toast.error("All field are Require!")
       return;
    }
    toast.success(`${PatientData.userName} :  successfully! Logged In as Patient`);

    
    setTimeout(() => {
      navigate("/BookNow");
    }, 3000);
    
    // localStorage.setItem(data.userName,data)
    
    // console.log(`So the from data is :${data} ${data.mobileNumber} ${data.userRoll} : ${data.userName}`)
   }

  return (
   
     <div className='user-container-login '>
      <h2>Hello User</h2>
      <form 
        className='flex flex-wrap justify-center'
       onSubmit={handleSubmit}
      >
        <div className='user-login '>
          <img src={user} alt='user'/>
          <input
           type='text' 
           placeholder='Name'
           value={userName}
           onChange={(e)=>setUserName(e.target.value )}
          />
        </div>
        <div className='user-login'>
          <img src={mobile} alt='mobile'/>
          <input
           type='number'
            placeholder='Mobile Number'
            value={mobileNumber}
            onChange={(e)=>setMobileNumber(e.target.value)}
            />
        </div>
        <button type='submit' className='mb-1 '>
          <Button title={"Submit"} />
        </button>
        </form>
     </div>
   
  )
}


export default User;
