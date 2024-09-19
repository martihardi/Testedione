

import { useState } from 'react';

export function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    if (user === 'admin' && password === 'admin') {
      localStorage.setItem('login', 'true');
      window.location.href = '/dashboard' ;
    } else {
      alert('Usuário ou senha inválidos');
    }
  }

  
  return (
    <div className=" flex justify-center h-screen bg-neutral-200 content-cente py-96 ">
      <div className="bg-slate-50 justify-center content-center rounded-lg shadow-lg ">
        <div className="LoginHeader">Login</div>
        <div className="inputs">
          <input
            className="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="coloque seu usuario"
          />
          <input
            className="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="coloque sua senha"
            type="password"
          />
        </div>
        <div>
          <button onClick={handleLogin} className="submit">entrar</button>
        </div>
      </div>
    </div>
  )

}
