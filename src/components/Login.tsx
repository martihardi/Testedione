import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

export function Login() {
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
        <button className="submit">entrar</button>
      </div>
    </div>
    </div>
  )
}

export default Login
