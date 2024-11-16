import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css'; // Import a CSS file for styling

function Home() {
    return (
        <div className="home-container">
            <header className="hero-section">
                <h1 className="hero-title">Welcome to the Online Salon Service</h1>
                <p className="hero-subtitle">Your one-stop destination for premium salon services at your convenience.</p>
            </header>
            <nav className="navbar">
                <Link to="/signup" className="nav-link">Sign Up</Link>
                <Link to="/signin" className="nav-link">Sign In</Link>
            </nav>
            <footer className="footer">
                <p>&copy; 2024 Online Salon Service by Dipayan Saha. All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Home;