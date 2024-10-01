import React, { useState } from 'react';
import axios from 'axios';

const PostingPost = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [matchMessage, setMatchMessage] = useState('');

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const uploadImage = async (e) => {
        e.preventDefault();
        if (!selectedImage) {
            setMessage('Please select an image to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedImage);
        formData.append('description', description);

        try {
            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(response.data.message);
            setDescription(''); // Clear description
            setSelectedImage(null); // Clear selected image
        } catch (error) {
            setMessage('Error uploading image.');
        }
    };

    const matchImage = async (e) => {
        e.preventDefault();
        if (!selectedImage) {
            setMatchMessage('Please select an image to match.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedImage);

        try {
            const response = await axios.post('/match', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMatchMessage(response.data.message);
        } catch (error) {
            setMatchMessage('Error matching image.');
        }
    };

    return (
        <div className="image-upload">
            <h2>Upload Image</h2>
            <form onSubmit={uploadImage}>
                <input type="file" accept="image/*" onChange={handleImageChange} required />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
            <h2>Match Image</h2>
            <form onSubmit={matchImage}>
                <input type="file" accept="image/*" onChange={handleImageChange} required />
                <button type="submit">Match</button>
            </form>
            {matchMessage && <p>{matchMessage}</p>}
        </div>
    );
};

export default PostingPost;
