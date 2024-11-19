import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/Dashboard.module.css'; // CSS module for styling

function AdminDashboard() {
    const navigate = useNavigate();

    const handleAddStaff = () => {
        // Navigate to the Add Staff page
        navigate('/add-staff');
    };

    const handleSignOut = () => {
        // Clear authentication state here if needed (localStorage/sessionStorage)
        // Navigate to the home page ("/")
        navigate('/');
    };

    return (
        <div className={styles.container}>
            {/* Admin Dashboard Header */}
            <h2>Welcome, Admin!</h2>

            {/* Add Staff Button */}
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h3>Add Staff</h3>
                </div>
                <div className={styles.cardBody}>
                    <button onClick={handleAddStaff} className={styles.actionBtn}>
                        Add Staff
                    </button>
                </div>
            </div>

            {/* Sign Out Button */}
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h3>Sign Out</h3>
                </div>
                <div className={styles.cardBody}>
                    <button onClick={handleSignOut} className={styles.actionBtn}>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;

