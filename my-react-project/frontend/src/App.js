import React from 'react'; //u23537036 Jasveer Ramdhaw
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PlaylistPage from './pages/PlaylistPage';
import SongPage from './pages/SongPage'; 
import ProfileSearchPage from './pages/ProfileSearchPage'; 
import Header from './components/Header'; 

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SplashPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/playlist/:id" element={<PlaylistPage />} />
                <Route path="/song/:title" element={<SongPage />} />
                <Route path="/search-profiles" element={<ProfileSearchPage />} /> {}
            </Routes>
        </Router>
    );
};

export default App;
