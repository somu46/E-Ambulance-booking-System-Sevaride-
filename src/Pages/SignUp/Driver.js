import React from 'react'
import './driver.css'
import user from '../../Assets/person.png'
import mobile from '../../Assets/phone.png'
import dl from '../../Assets/License.png'
import email from '../../Assets/email.png'
 const Driver = () => {
  return (
   
    <div className='driver-container'>
      <h2>hello driver</h2>
        <div className='driver-login'>
          <img src={user} alt='driver'/>
          <input placeholder='Name'/>
        </div>
        <div className='driver-login'>
          <img src={mobile} alt='driver'/>
          <input placeholder='Mobile Number'/>
        </div>
        <div className='driver-login'>
          <img src={email} alt='driver-mail'/>
          <input placeholder='Email ID'/>
        </div>
        <div className='driver-login'>
          <img src={dl} alt='driver DL'/>
          <input placeholder='driving licence Number'/>
        </div>
        <button type='submit'>Submit</button>
     </div>
   
  )
}
export default Driver;
