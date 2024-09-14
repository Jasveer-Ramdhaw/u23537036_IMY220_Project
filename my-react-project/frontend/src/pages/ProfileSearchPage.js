import React, { useState, useEffect } from 'react'; //u23537036 Jasveer Ramdhaw
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';  


const ProfilePreview = ({ profile, onClick }) => (
    <div onClick={() => onClick(profile.id)} style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}>
        <h3>{profile.name}</h3>
        <p>Email: {profile.email}</p>
    </div>
);

const ProfileSearchPage = () => {
    const [profiles, setProfiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const allUsers = JSON.parse(localStorage.getItem('users')) || [];
        setProfiles(allUsers);
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProfiles = profiles.filter(
        (profile) => profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleProfileClick = (profileId) => {
        navigate(`/profile/${profileId}`);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Header />
            <h2>Search Profiles</h2>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
                style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
            />

            {filteredProfiles.length > 0 ? (
                filteredProfiles.map((profile) => (
                    <ProfilePreview key={profile.id} profile={profile} onClick={handleProfileClick} />
                ))
            ) : (
                <p>No profiles found.</p>
            )}
        </div>
    );
};

export default ProfileSearchPage;
