import React from 'react'; //u23537036 Jasveer Ramdhaw
import PlaylistPreview from './PlaylistPreview';

const PlaylistList = ({ playlists }) => (
    <div>
        {playlists.map((playlist, index) => (
            <PlaylistPreview key={index} playlist={playlist} />
        ))}
    </div>
);

export default PlaylistList;
