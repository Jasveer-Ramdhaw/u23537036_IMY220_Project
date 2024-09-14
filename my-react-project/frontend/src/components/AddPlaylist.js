import React, { useState } from 'react'; //u23537036 Jasveer Ramdhaw

const AddPlaylist = ({ onAdd }) => {
    const [playlistName, setPlaylistName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (playlistName.trim()) {
            onAdd(playlistName);
            setPlaylistName(''); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New Playlist Name"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
            />
            <button type="submit">Create Playlist</button>
        </form>
    );
};

export default AddPlaylist;
