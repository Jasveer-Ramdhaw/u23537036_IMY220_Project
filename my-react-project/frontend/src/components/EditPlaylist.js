import React, { useState } from 'react'; //u23537036 Jasveer Ramdhaw

const EditPlaylist = ({ playlist, onUpdate }) => {
    const [updatedPlaylist, setUpdatedPlaylist] = useState(playlist);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(updatedPlaylist);
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
            <input 
                type="text" 
                value={updatedPlaylist.name} 
                onChange={(e) => setUpdatedPlaylist({ ...updatedPlaylist, name: e.target.value })} 
            />
            <textarea 
                value={updatedPlaylist.description} 
                onChange={(e) => setUpdatedPlaylist({ ...updatedPlaylist, description: e.target.value })} 
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default EditPlaylist;
