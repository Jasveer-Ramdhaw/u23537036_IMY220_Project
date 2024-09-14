import React from 'react'; //u23537036 Jasveer Ramdhaw

const ProfilePreview = ({ profile, onClick }) => (
    <div onClick={() => onClick(profile.id)} style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}>
        <h3>{profile.name}</h3>
        <p>Email: {profile.email}</p>
    </div>
);

export default ProfilePreview;
