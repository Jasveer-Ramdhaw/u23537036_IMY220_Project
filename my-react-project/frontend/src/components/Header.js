import React from 'react'; //u23537036 Jasveer Ramdhaw
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const navigate = useNavigate();

    const handleProfileClick = () => {
        if (currentUser && currentUser.id) {
            navigate(`/profile/${currentUser.id}`);
        }
    };

    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/home" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/search-profiles" style={styles.navLink}>Search Profiles</Link>
                </li>
                {currentUser && (
                    <li style={styles.navItem}>
                        <button onClick={handleProfileClick} style={styles.profileButton}>
                            {currentUser.username || 'Profile'}
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        background: '#333',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center'
    },
    navList: {
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0
    },
    navItem: {
        margin: '0 15px'
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px'
    },
    profileButton: {
        background: 'none',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px'
    }
};

export default Header;
