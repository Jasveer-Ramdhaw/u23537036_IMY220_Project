import React from 'react'; //u23537036 Jasveer Ramdhaw

const Comment = ({ comment }) => (
    <div style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
        <p>{comment.user}: {comment.text}</p>
    </div>
);

export default Comment;
