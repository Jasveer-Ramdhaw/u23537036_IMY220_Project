import React, { useState, useEffect } from 'react'; //u23537036 Jasveer Ramdhaw
import { useNavigate } from 'react-router-dom';
import Feed from '../components/Feed';
import AddSong from '../components/AddSong';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';  

const Home = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('currentUser'));

    const defaultSongs = [
        { title: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', year: '1975', genre: 'Rock' },
        { title: 'Billie Jean', artist: 'Michael Jackson', album: 'Thriller', year: '1982', genre: 'Pop' },
        { title: 'Imagine', artist: 'John Lennon', album: 'Imagine', year: '1971', genre: 'Rock' }
    ];

    const [songs, setSongs] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const storedSongs = JSON.parse(localStorage.getItem('songs')) || [];
        const storedPlaylists = JSON.parse(localStorage.getItem('playlists')) || [];
        
        setSongs(storedSongs.length === 0 ? defaultSongs : storedSongs);
        setPlaylists(storedPlaylists);
    }, []);

    const handleProfileClick = () => {
        if (user && user.id) {
            navigate(`/profile/${user.id}`);
        }
    };

    const handleAddSong = (newSong) => {
        const updatedSongs = [...songs, newSong];
        setSongs(updatedSongs);
        localStorage.setItem('songs', JSON.stringify(updatedSongs));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredPlaylists = playlists.filter(playlist =>
        playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header /> {}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Home</h1>
                {user && (
                    <div
                        onClick={handleProfileClick}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: `url(${user.profilePicture || 'https://via.placeholder.com/40'})`,
                            backgroundSize: 'cover',
                            cursor: 'pointer'
                        }}
                    />
                )}
            </div>

            <SearchBar value={searchTerm} onChange={handleSearchChange} />

            <Feed 
                playlists={searchTerm ? filteredPlaylists : playlists}
                songs={searchTerm ? filteredSongs : songs}
            />

            {filteredPlaylists.length === 0 && filteredSongs.length === 0 && searchTerm && (
                <p>No results found for "{searchTerm}".</p>
            )}

            <h3>Add New Song</h3>
            <AddSong onAdd={handleAddSong} />
        </div>
    );
};

export default Home;
