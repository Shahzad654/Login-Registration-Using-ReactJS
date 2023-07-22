import {React, useContext} from 'react'
import {LoginContext} from '../../Context'

const Profile = () => {
    const {username} = useContext(LoginContext)
  return (
    <div>
        <h1>Profile</h1>
        <h4>Welcome</h4>
        <h5>{username}</h5>
    </div>
  )
}

export default Profile