import React, { useEffect, useState } from 'react';
import { Router } from './routes/Router';
import { Login } from './pages/Login';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('login');
        if (token) {
            setIsLoggedIn(true);

        }
    }, [ ]);

    return (
        <>
        {isLoggedIn ? <router /> : <Login />}

        </>
    );
};

export default App;