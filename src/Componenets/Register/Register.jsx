import {React, useContext} from 'react'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {LoginContext} from '../../Context'

const Register = () => {
  const{setProfile} = useContext(LoginContext)

  function handleClick(){
    alert("Signup Successfully!")
    setProfile(true)
  }
  return (
    <div>
       <div className='main_login'>

<div className='login_card'>
    <h2 className='heading'>SIGNUP</h2>
    <label htmlFor="">Email</label>
    <br/>
    <input className='email_input' 
    type="text" 
   />

    <br/>
    <br/>

    <label htmlFor="">First Name</label>
    <br/>
    <input className='email_input' 
    type="text" 
   />

    <br/>
    <br/>

    <label htmlFor="">Last Name</label>
    <br/>
    <input className='email_input' 
    type="text" 
   />

    <br/>
    <br/>

    <label htmlFor="">Password</label>

    <br/>
    <input type="text" />

    <br/>
    <br/>

    <button className='signup-btn' onClick={handleClick}>SIGNUP</button>

    <p className='passowrd_para'>Forgot Password?</p>
    <FcGoogle className='social-icons'/>
    <FaFacebookF className='social-icons'/>
    <FaLinkedinIn className='social-icons'/>
    
    
</div>
</div>
    </div>
  )
}

export default Register