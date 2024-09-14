import React from 'react'; //u23537036 Jasveer Ramdhaw

const FriendList = () => {
    const friends = [
        { profileImage: "/path-to-friend-image", username: "Friend 1" },
        { profileImage: "/path-to-friend-image", username: "Friend 2" },
    ];

    return (
        <div className="friend-list">
            {friends.map((friend, index) => (
                <div key={index} className="friend-preview">
                    <img src={friend.profileImage} alt="Friend Profile" />
                    <p>{friend.username}</p>
                </div>
            ))}
        </div>
    );
};

export default FriendList;
