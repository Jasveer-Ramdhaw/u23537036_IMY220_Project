import React, { useState, useEffect } from 'react'; //u23537036 Jasveer Ramdhaw
import { useParams } from 'react-router-dom';
import SongList from '../components/SongList';
import EditPlaylist from '../components/EditPlaylist';
import Header from '../components/Header';  


const PlaylistPage = () => {
    const { id } = useParams();  

    const allPlaylists = [
        { id: '1', name: 'Chill Vibes', description: 'A playlist for relaxing and unwinding.', creator: 'User1', songs: [{ title: 'Song 1', artist: 'Artist 1' }, { title: 'Song 2', artist: 'Artist 2' }] },
        { id: '2', name: 'Workout Mix', description: 'Get pumped for your workout!', creator: 'User2', songs: [{ title: 'Song 3', artist: 'Artist 3' }, { title: 'Song 4', artist: 'Artist 4' }] }
    ];

    const [playlist, setPlaylist] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const foundPlaylist = allPlaylists.find(playlist => playlist.id === id);
        if (foundPlaylist) {
            setPlaylist(foundPlaylist);
        }
    }, [id]);

    const handleUpdatePlaylist = (updatedPlaylist) => {
        setPlaylist(updatedPlaylist);
        setIsEditing(false);
    };

    if (!playlist) {
        return <div>Playlist not found</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <Header />
            {isEditing ? (
                <EditPlaylist playlist={playlist} onUpdate={handleUpdatePlaylist} />
            ) : (
                <div>
                    <h1>{playlist.name}</h1>
                    <p>{playlist.description}</p>
                    <p>Created by: {playlist.creator}</p>
                    <button onClick={() => setIsEditing(true)}>Edit Playlist</button>
                </div>
            )}

            <h2>Songs</h2>
            <SongList songs={playlist.songs} />
        </div>
    );
};

export default PlaylistPage;
