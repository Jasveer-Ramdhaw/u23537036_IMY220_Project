import React from 'react'; //u23537036 Jasveer Ramdhaw
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import '/frontend/src/pages/SplashPage.css'; 

const SplashPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home');
    };

    const handleSignup = () => {
        navigate('/home');
    };

    return (
        <div className="splash-page">
            <div className="logo">MUSE</div>
            <div className="splash-content">
                <img src="/path-to-image" alt="Art" className="splash-image"/>
                <div className="auth-buttons">
                    <LoginForm onLogin={handleLogin} />
                    <SignupForm onSignup={handleSignup} />
                </div>
            </div>
        </div>
    );
};

export default SplashPage;
