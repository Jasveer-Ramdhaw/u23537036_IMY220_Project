import React, { useState } from 'react'; //u23537036 Jasveer Ramdhaw

const AddComment = ({ onAdd }) => {
    const [commentText, setCommentText] = useState('');
    const [error, setError] = useState('');
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!commentText) {
            setError('Comment text is required');
            return;
        }
        if (!currentUser) {
            setError('You must be logged in to comment');
            return;
        }
        
        const newComment = {
            user: currentUser.name,  
            text: commentText
        };
        
        onAdd(newComment);
        setCommentText('');  
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
            <textarea 
                placeholder="Your comment" 
                value={commentText} 
                onChange={(e) => setCommentText(e.target.value)} 
            />
            {error && <p style={{color: 'red'}}>{error}</p>}
            <button type="submit">Add Comment</button>
        </form>
    );
};

export default AddComment;
