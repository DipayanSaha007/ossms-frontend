import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SignIn.css';

function AdminLogin() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        const { username, password } = credentials;

        if (username === 'admin' && password === 'Admin@118') {
            alert('Welcome, Admin!');
            navigate('/admin-dashboard'); // Redirect to Admin Dashboard
        } else {
            setError('Invalid username or password!');
        }
    };

    return (
        <div className="login-container">
            <h2>Admin Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Login</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default AdminLogin;
