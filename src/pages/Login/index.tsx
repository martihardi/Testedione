
import './styles.css'
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');

  }
  return (
    <div className="Login">
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
          <button onClick={handleLogin} className="submit">entrar</button>
        </div>
      </div>
    </div>
  )
}

