import React, { useState, useEffect } from 'react'; //u23537036 Jasveer Ramdhaw
import PlaylistList from './PlaylistList';
import SongList from './SongList';

const Feed = ({ playlists, songs }) => {
    const defaultPlaylists = [
        { id: 1, name: 'Chill Vibes', creator: 'User1' },
        { id: 2, name: 'Workout Mix', creator: 'User2' }
    ];

    const [localSongs, setLocalSongs] = useState([]);
    const [localPlaylists, setLocalPlaylists] = useState([]);

    useEffect(() => {
        const storedSongs = JSON.parse(localStorage.getItem('songs')) || [];
        setLocalSongs(storedSongs);

        const storedPlaylists = JSON.parse(localStorage.getItem('playlists')) || [];

        if (storedPlaylists.length === 0) {
            localStorage.setItem('playlists', JSON.stringify(defaultPlaylists));
            setLocalPlaylists(defaultPlaylists);
        } else {
            setLocalPlaylists(storedPlaylists);
        }
    }, []);

    return (
        <div>
            {playlists.length > 0 && (
                <>
                    <h2>Playlists</h2>
                    <PlaylistList playlists={playlists} />
                </>
            )}

            {songs.length > 0 && (
                <>
                    <h2>Songs</h2>
                    <SongList songs={songs} />
                </>
            )}
        </div>
    );
};

export default Feed;
