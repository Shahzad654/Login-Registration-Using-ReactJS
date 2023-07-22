import {React, useContext} from 'react'
import '../Login/login.css'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {LoginContext} from '../../Context'


const Login = () => {
    const {setUsername, setProfile} = useContext(LoginContext)

    function handleProfile(){
        setProfile(true)
    }
  return (
    <div className='main_login'>

        <div className='login_card'>
            <h2 className='heading'>LOGIN</h2>
            <label htmlFor="">User Name</label>
            <br/>
            <input className='email_input' 
            type="text" 
            onChange={(e)=>{

                setUsername(e.target.value)


            }}/>

            <br/>
            <br/>

            <label htmlFor="">Password</label>

            <br/>
            <input type="text" />

            <br/>
            <br/>

            <button className='signup-btn' onClick={handleProfile}>LOGIN</button>

            <p className='passowrd_para'>Forgot Password?</p>
            <FcGoogle className='social-icons'/>
            <FaFacebookF className='social-icons'/>
            <FaLinkedinIn className='social-icons'/>
            
            
        </div>
    </div>
  )
}

export default Login