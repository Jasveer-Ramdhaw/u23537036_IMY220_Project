import React, { useState, useEffect } from 'react'; //u23537036 Jasveer Ramdhaw
import { useNavigate } from 'react-router-dom';
import Comment from './Comment';
import AddComment from './AddComment';

const PlaylistPreview = ({ playlist }) => {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const navigate = useNavigate();  

    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem(`playlist-${playlist.id}-comments`)) || [];
        setComments(storedComments);
    }, [playlist.id]);

    const handleAddComment = (newComment) => {
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        localStorage.setItem(`playlist-${playlist.id}-comments`, JSON.stringify(updatedComments));
    };

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const handleNavigateToPlaylist = () => {
        navigate(`/playlist/${playlist.id}`);  
    };

    return (
        <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h3 
                style={{ cursor: 'pointer', color: 'blue' }} 
                onClick={handleNavigateToPlaylist}
            >
                {playlist.name}
            </h3>
            <p>Created by: {playlist.creator}</p>
            
            <button onClick={toggleComments}>
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </button>

            {showComments && (
                <div>
                    <h4>Comments</h4>
                    {comments.length > 0 ? (
                        comments.map((comment, index) => <Comment key={index} comment={comment} />)
                    ) : (
                        <p>No comments yet</p>
                    )}
                    <AddComment onAdd={handleAddComment} />
                </div>
            )}
        </div>
    );
};

export default PlaylistPreview;
