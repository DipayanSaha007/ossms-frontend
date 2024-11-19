import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Modified import
import './styles/StaffManagement.css';

function StaffManagement() {
    const navigate = useNavigate(); // Modified hook
    const [staffList, setStaffList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch staff list from the backend
        const fetchStaffList = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/staff-management`); // API endpoint for fetching staff
                if (response.ok) {
                    const data = await response.json();
                    setStaffList(data); // Set the staff list
                } else {
                    console.error('Failed to fetch staff list');
                }
            } catch (error) {
                console.error('Error fetching staff list:', error);
            } finally {
                setLoading(false); // Stop loading spinner
            }
        };

        fetchStaffList();
    }, []);

    const handleGoBack = () => {
        // Navigate to the dashboard page
        navigate('/dashboard');
    };

    return (
        <div className="container">
            <h2>Staff Management</h2>
            <div className="card">
                <div className="card-title">
                    <h3>Staff List</h3>
                </div>
                <div className="card-body">
                    {loading ? (
                        <p>Loading staff list...</p>
                    ) : staffList.length > 0 ? (
                        <ul>
                            {staffList.map((staff, index) => (
                                <li key={index} className="staff-item">
                                    <div className="staff-info">
                                        <h4>{staff.name}</h4>
                                        <p>Rating: {staff.rating} / 5</p>
                                        <p>Specialty: {staff.specialty}</p>
                                        <p>Contact: {staff.contact}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No staff found.</p>
                    )}
                    <button onClick={handleGoBack} className="go-back-btn">Go Back to Dashboard</button>
                </div>
            </div>
        </div>
    );
}

export default StaffManagement;
