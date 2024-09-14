import React, { useState } from 'react'; //u23537036 Jasveer Ramdhaw
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const allUsers = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = allUsers.find(user => user.email === email && user.password === password);

        if (foundUser) {
            localStorage.setItem('currentUser', JSON.stringify(foundUser));  
            navigate('/home');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Log In</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Log In</button>
        </form>
    );
};

export default LoginForm;
