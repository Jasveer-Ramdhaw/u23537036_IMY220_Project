import React, { useState } from 'react'; //u23537036 Jasveer Ramdhaw

const AddSong = ({ onAdd }) => {
    const [song, setSong] = useState({
        title: '',
        artist: '',
        album: '',
        year: '',
        genre: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, artist } = song;
        if (!title || !artist) {
            setError('Title and artist are required');
            return;
        }
        onAdd(song);
        setSong({ title: '', artist: '', album: '', year: '', genre: '' });
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
            <input 
                type="text" 
                placeholder="Song Title" 
                value={song.title} 
                onChange={(e) => setSong({ ...song, title: e.target.value })} 
            />
            <input 
                type="text" 
                placeholder="Artist" 
                value={song.artist} 
                onChange={(e) => setSong({ ...song, artist: e.target.value })} 
            />
            <input 
                type="text" 
                placeholder="Album" 
                value={song.album} 
                onChange={(e) => setSong({ ...song, album: e.target.value })} 
            />
            <input 
                type="text" 
                placeholder="Year" 
                value={song.year} 
                onChange={(e) => setSong({ ...song, year: e.target.value })} 
            />
            <input 
                type="text" 
                placeholder="Genre" 
                value={song.genre} 
                onChange={(e) => setSong({ ...song, genre: e.target.value })} 
            />
            {error && <p style={{color: 'red'}}>{error}</p>}
            <button type="submit">Add Song</button>
        </form>
    );
};

export default AddSong;
