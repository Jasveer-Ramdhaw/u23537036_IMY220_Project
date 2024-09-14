import React, { useState } from 'react'; //u23537036 Jasveer Ramdhaw

const EditProfile = ({ profile, onUpdate }) => {
    const [formData, setFormData] = useState(profile);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <h2>Edit Profile</h2>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Pronouns:
                <input
                    type="text"
                    name="pronouns"
                    value={formData.pronouns}
                    onChange={handleChange}
                />
            </label>
            <label>
                Bio:
                <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                />
            </label>
            <label>
                Socials:
                <input
                    type="text"
                    name="socials"
                    value={formData.socials}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditProfile;
