import {React, useState }from 'react';
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Login from './Componenets/Login/Login';
import Register from './Componenets/Register/Register';
import Home from './Componenets/Home/Home';
import Profile from './Componenets/Profile/Profile';
import {LoginContext} from './Context'

function App() {
  const [username, setUsername] = useState('')
  const [profile, setProfile] = useState(false)

  return (

     <div className='App'>

    <nav>
        <Link className='nav_menu' to='/'>Home</Link>
        <Link className='nav_menu' to='login'>Login</Link>
        <Link className='nav_menu' to='signup'>SignUp</Link>
      </nav>

      
      <LoginContext.Provider value={{username,setUsername,setProfile}}>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='login' element={profile ? <Profile/>  :<Login/>}/>
        <Route path='signup' element={profile? <Login/> : <Register/>}/>

        
      </Routes>
      </LoginContext.Provider>


     </div>
    
      
      
      
     
   
  );
}

export default App;
