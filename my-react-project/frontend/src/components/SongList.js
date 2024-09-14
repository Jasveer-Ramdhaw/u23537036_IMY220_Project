import React from 'react'; //u23537036 Jasveer Ramdhaw
import { useNavigate } from 'react-router-dom';
import SongPreview from './SongPreview';

const SongList = ({ songs }) => {
    const navigate = useNavigate();

    const handleSongClick = (title) => {
        navigate(`/song/${title}`);
    };

    return (
        <div>
            {songs.map((song, index) => (
                <div key={index} onClick={() => handleSongClick(song.title)} style={{ cursor: 'pointer' }}>
                    <SongPreview song={song} />
                </div>
            ))}
        </div>
    );
};

export default SongList;
