import React, { useEffect, useState } from 'react'; //u23537036 Jasveer Ramdhaw
import { useParams } from 'react-router-dom';
import PlaylistList from '../components/PlaylistList';
import SongList from '../components/SongList';
import AddPlaylist from '../components/AddPlaylist';
import FollowerFollowing from '../components/FollowerFollowing';
import EditProfile from '../components/EditProfile'; 
import Header from '../components/Header';  

const Profile = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [playlists, setPlaylists] = useState([]);
    const [storedplaylists, storeallPlaylists] = useState([]);
    const [songs, setSongs] = useState([]);
    const [isEditing, setIsEditing] = useState(false); 
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        const allUsers = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = allUsers.find(user => user.id === parseInt(id, 10));
        setProfile(foundUser);

        const storedPlaylists = JSON.parse(localStorage.getItem('playlists')) || [];
        const storedSongs = JSON.parse(localStorage.getItem('songs')) || [];
        storeallPlaylists(storedPlaylists);

        if (foundUser) {
            const userPlaylists = storedPlaylists.filter(
                playlist => playlist.creator === foundUser.username || playlist.creator === foundUser.name
            );
            setPlaylists(userPlaylists);
        }
        setSongs(storedSongs);
    }, [id]);

    const handleUpdateProfile = (updatedProfile) => {
        const allUsers = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = allUsers.map(user => {
            if (user.id === updatedProfile.id) {
                return updatedProfile; 
            }
            return user;
        });

        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.setItem('currentUser', JSON.stringify(updatedProfile)); 
        setProfile(updatedProfile); 
        setIsEditing(false); 
    };

    const handleAddPlaylist = (newPlaylistName) => {
        if (!profile) return;

        const newPlaylist = {
            id: storedplaylists.length + 1,
            name: newPlaylistName,
            creator: profile.username || profile.name,
        };

        const updatedPlaylists = [...playlists, newPlaylist];
        setPlaylists(updatedPlaylists);

        const allPlaylists = JSON.parse(localStorage.getItem('playlists')) || [];
        const updatedAllPlaylists = [...allPlaylists, newPlaylist];
        localStorage.setItem('playlists', JSON.stringify(updatedAllPlaylists));
    };

    if (!profile) {
        return <div>Profile not found</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <Header /> {}
            <h1>{profile.username || profile.name}</h1>
            <p>Name: {profile.name}</p>
            <p>Pronouns: {profile.pronouns || 'Not specified'}</p>
            <p>Bio: {profile.bio || 'No bio available'}</p>
            <p>Socials: {profile.socials || 'No socials available'}</p>

            {}
            {currentUser && currentUser.id === profile.id && (
                <>
                    <button onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </button>
                    {isEditing && (
                        <EditProfile profile={profile} onUpdate={handleUpdateProfile} />
                    )}
                </>
            )}

            <FollowerFollowing profileId={profile.id} currentUser={currentUser} />

            <h2>Playlists Created by {profile.username || profile.name}</h2>
            {playlists.length > 0 ? (
                <PlaylistList playlists={playlists} />
            ) : (
                <p>No playlists created yet.</p>
            )}

            {currentUser && currentUser.id === profile.id && (
                <>
                    <h3>Create a New Playlist</h3>
                    <AddPlaylist onAdd={handleAddPlaylist} />
                </>
            )}

            <h2>All Songs</h2>
            <SongList songs={songs} />
        </div>
    );
};

export default Profile;
