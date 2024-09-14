import React from 'react'; //u23537036 Jasveer Ramdhaw

const SearchBar = ({ value, onChange }) => {
    return (
        <input
            type="text"
            placeholder="Search playlists or songs..."
            value={value}
            onChange={onChange}
            style={{
                padding: '10px',
                width: '100%',
                margin: '20px 0',
                border: '1px solid #ccc',
                borderRadius: '5px'
            }}
        />
    );
};

export default SearchBar;
