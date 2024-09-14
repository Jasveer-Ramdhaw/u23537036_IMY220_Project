import React, { useState, useEffect } from 'react'; //u23537036 Jasveer Ramdhaw
import { useNavigate } from 'react-router-dom';
import ProfilePreview from './ProfilePreview'; 

const FollowerFollowing = ({ profileId, currentUser }) => {
    const [profile, setProfile] = useState(null);
    const [isFollowing, setIsFollowing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const allUsers = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = allUsers.find(user => user.id === profileId);
        setProfile(foundUser);

        if (currentUser && foundUser) {
            setIsFollowing(currentUser.following.includes(foundUser.id));
        }
    }, [profileId, currentUser]);

    const handleFollowToggle = () => {
        const allUsers = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = allUsers.map(user => {
            if (user.id === profile.id) {
                return {
                    ...user,
                    followers: isFollowing 
                        ? user.followers.filter(followerId => followerId !== currentUser.id)
                        : [...user.followers, currentUser.id]
                };
            }
            if (user.id === currentUser.id) {
                return {
                    ...user,
                    following: isFollowing
                        ? user.following.filter(followingId => followingId !== profile.id)
                        : [...user.following, profile.id]
                };
            }
            return user;
        });

        localStorage.setItem('users', JSON.stringify(updatedUsers));

        const updatedCurrentUser = updatedUsers.find(user => user.id === currentUser.id);
        localStorage.setItem('currentUser', JSON.stringify(updatedCurrentUser));
        setIsFollowing(!isFollowing);
    };

    const handleProfileClick = (profileId) => {
        navigate(`/profile/${profileId}`);
    };

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {currentUser.id !== profile.id && (
                <button onClick={handleFollowToggle}>
                    {isFollowing ? 'Unfollow' : 'Follow'}
                </button>
            )}

            <div style={{ marginTop: '20px' }}>
                <h3>Followers ({profile.followers.length})</h3>
                <ul>
                    {profile.followers.map(followerId => {
                        const follower = JSON.parse(localStorage.getItem('users')).find(user => user.id === followerId);
                        return follower ? (
                            <ProfilePreview key={followerId} profile={follower} onClick={handleProfileClick} />
                        ) : (
                            <li key={followerId}>Unknown User</li>
                        );
                    })}
                </ul>

                <h3>Following ({profile.following.length})</h3>
                <ul>
                    {profile.following.map(followingId => {
                        const following = JSON.parse(localStorage.getItem('users')).find(user => user.id === followingId);
                        return following ? (
                            <ProfilePreview key={followingId} profile={following} onClick={handleProfileClick} />
                        ) : (
                            <li key={followingId}>Unknown User</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default FollowerFollowing;
