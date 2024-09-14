import React, { useState } from 'react'; //u23537036 Jasveer Ramdhaw

const AddSongToPlaylist = ({ playlists, songs, onAdd }) => {
    const [playlistId, setPlaylistId] = useState('');
    const [selectedSong, setSelectedSong] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!playlistId || !selectedSong) {
            setError('Please select both a playlist and a song');
            return;
        }

        const songToAdd = songs.find(song => song.title === selectedSong);

        if (!songToAdd) {
            setError('Selected song not found');
            return;
        }

        onAdd({ playlistId, song: songToAdd });
        setPlaylistId('');
        setSelectedSong('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
            <select value={playlistId} onChange={(e) => setPlaylistId(e.target.value)}>
                <option value="">Select Playlist</option>
                {playlists.map((playlist) => (
                    <option key={playlist.id} value={playlist.id}>
                        {playlist.name}
                    </option>
                ))}
            </select>

            <select value={selectedSong} onChange={(e) => setSelectedSong(e.target.value)}>
                <option value="">Select Song</option>
                {songs.map((song, index) => (
                    <option key={index} value={song.title}>
                        {song.title} - {song.artist}
                    </option>
                ))}
            </select>

            {error && <p style={{color: 'red'}}>{error}</p>}
            <button type="submit">Add Song to Playlist</button>
        </form>
    );
};

export default AddSongToPlaylist;
