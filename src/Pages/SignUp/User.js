import React from 'react'
import './user.css'
import user from '../../Assets/person.png'
import mobile from '../../Assets/phone.png'
const User = () => {
  return (
   
     <div className='user-container-login'>
      <h2>hello User</h2>
        <div className='user-login'>
          <img src={user} alt='user'/>
          <input type='text' placeholder='Name'/>
        </div>
        <div className='user-login'>
          <img src={mobile} alt='mobile'/>
          <input type='number' placeholder='Mobile Number'/>
        </div>
        <button type='submit'>Submit</button>
     </div>
   
  )
}


export default User;
