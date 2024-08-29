import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'entrou' from "./entrou";

function App() {
  return (
    <div className="Login">
    <div className="LoginBox">
      <div className="LoginHeader">Login</div>
      <div className="inputs">
        <input 
        ClassName="User" 
        placeholder="coloque seu usuario"
        />
        <input 
        ClassName="Password" 
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

export default App
