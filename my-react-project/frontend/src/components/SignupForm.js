import React, { useState } from 'react'; //u23537036 Jasveer Ramdhaw
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        const allUsers = JSON.parse(localStorage.getItem('users')) || [];
        const newId = allUsers.length + 1;

        const newUser = { id: newId, name, email, password, followers: [], following: [] };
        allUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(allUsers));
        localStorage.setItem('currentUser', JSON.stringify(newUser));  

        navigate('/home');
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
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
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;
