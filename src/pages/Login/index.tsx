

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
    <div className=" flex justify-center h-screen bg-neutral-200 content-center py-96 ">
      <div className="bg-slate-50 w-96 h-96 flex flex-col justify-center content-center rounded-lg shadow-lg ">
        <div className="target:next-center text-2xl font-bold text-purple-800 p-4">Login</div>
        <div className="flex flex-col justify-center items-center">
          <input
            className="p-2 border border-purple-800 rounded mb-4"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="coloque seu usuario"
          />
          <input
            className="p-2 border border-purple-800 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="coloque sua senha"
            type="password"
          />
        </div>
        <div>
          <button onClick={handleLogin} className="w-48 border border-purple-800 m-4 p-2">entrar</button>
        </div>
      </div>
    </div>
  )

}
