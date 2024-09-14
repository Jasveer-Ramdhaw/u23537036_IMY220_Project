import React, { useState, useEffect } from 'react'; //u23537036 Jasveer Ramdhaw
import { useParams } from 'react-router-dom';
import Header from '../components/Header';  


const SongPage = () => {
    const { title } = useParams();  

    const [song, setSong] = useState({
        title,
        artist: '',
        album: '',
        year: '',
        genre: ''
    });

    useEffect(() => {
        const storedSongs = JSON.parse(localStorage.getItem('songs')) || [];
        const foundSong = storedSongs.find((s) => s.title === title);
        if (foundSong) {
            setSong(foundSong);
        }
    }, [title]);

    return (
        <div style={{ padding: '20px' }}>
            <Header />
            <h1>{song.title}</h1>
            <p>Artist: {song.artist}</p>
            <p>Album: {song.album || 'Unknown'}</p>
            <p>Year: {song.year || 'Unknown'}</p>
            <p>Genre: {song.genre || 'Unknown'}</p>
        </div>
    );
};

export default SongPage;
