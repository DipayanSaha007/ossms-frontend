import React, { useState } from 'react';
import './styles/AddStaff.css';

function AddStaff() {
    const [formData, setFormData] = useState({
        name: '',
        rating: '',
        specialty: '',
        contact: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/add-staff`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message); // Display success message
                setFormData({ name: '', rating: '', specialty: '', contact: '' }); // Reset form
            } else {
                const errorData = await response.json();
                setMessage(errorData.error || 'Failed to add staff.');
            }
        } catch (error) {
            console.error('Error adding staff:', error);
            setMessage('Error occurred while adding staff.');
        }
    };

    return (
        <div className="add-staff-container">
            <h2>Add Staff</h2>
            <form className="add-staff-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Rating:
                    <input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        min="0"
                        max="5"
                        step="0.1"
                        required
                    />
                </label>
                <label>
                    Specialty:
                    <input
                        type="text"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Contact:
                    <input
                        type="email"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Add Staff</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default AddStaff;
