import './Navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="Navbox"> 
        <div className="Navtext">
     Navbar
        </div>

        <button onClick ={() => navigate('/') } className="submitH">home</button>
        <button onClick ={() => navigate('/about') } className="submitA">about</button>
        <button onClick ={() => navigate('/contact') } className="submitC">contact</button>
        <button onClick ={() => navigate('/dashboard') } className="submitD">dashboard</button>
        </div>
    )
}

export default Navbar