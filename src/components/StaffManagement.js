import React from 'react';
import { useNavigate } from 'react-router-dom'; // Modified import
import './styles/StaffManagement.css'

function StaffManagement() {
    const navigate = useNavigate(); // Modified hook
    const staffList = [
        { name: 'Amit Sharma', rating: 4.5, specialty: 'Hair Cutting & Styling', contact: 'Amit189@gmail.com' },
        { name: 'Priya Patel', rating: 4.7, specialty: 'Manicure & Pedicure', contact: 'Priya845@gmail.com' },
        { name: 'Ravi Kumar', rating: 4.3, specialty: 'Massage Therapy', contact: 'Ravi784@gmail.com' },
        { name: 'Neha Gupta', rating: 4.8, specialty: 'Skin Care & Facials', contact: 'Neha763@gmail.com' },
        { name: 'Suresh Reddy', rating: 4.6, specialty: 'Hair Coloring & Treatments', contact: 'Suresh179@gmail.com' },
    ];

    const handleGoBack = () => {
        // Navigate to the dashboard page
        navigate('/dashboard'); // Modified navigation
    };

    return (
        <div className="container">
            <h2>Staff Management</h2>
            <div className="card">
                <div className="card-title">
                    <h3>Staff List</h3>
                </div>
                <div className="card-body">
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
                    <button onClick={handleGoBack} className="go-back-btn">Go Back to Dashboard</button>
                </div>
            </div>
        </div>
    );
}

export default StaffManagement;
