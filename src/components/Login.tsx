import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { useNavigate } from 'react-router-dom'; 

 function Login() {
    const navigate = useNavigate(); 

   const handleLogin = () => {
    console.log('Login');
    navigate('/home');
    
    }
  return (
    <div className="Loginz">
    <div className="LoginBox">
      <div className="LoginHeader">Login</div>
      <div className="inputs">
        <input 
        className="User" 
        placeholder="coloque seu usuario"
        />
        <input 
        className="Password" 
        placeholder="coloque sua senha"
        type="password"
        />
      </div>
      <div>
        <button className="Button1"  onClick={handleLogin} className="submit">entrar</button>
      </div>
    </div>
    </div>
  )
}

export default Login
