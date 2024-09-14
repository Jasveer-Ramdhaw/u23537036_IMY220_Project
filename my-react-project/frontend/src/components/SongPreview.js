import React, { useState, useEffect } from 'react'; //u23537036 Jasveer Ramdhaw
import Comment from './Comment';
import AddComment from './AddComment';

const SongPreview = ({ song }) => {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem(`song-${song.title}-comments`)) || [];
        setComments(storedComments);
    }, [song.title]);

    const handleAddComment = (newComment) => {
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        localStorage.setItem(`song-${song.title}-comments`, JSON.stringify(updatedComments));
    };

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h3>{song.title}</h3>
            <p>Artist: {song.artist}</p>
            
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

export default SongPreview;
