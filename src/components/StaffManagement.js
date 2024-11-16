import React from 'react';
import { useNavigate } from 'react-router-dom'; // Modified import

function StaffManagement() {
    const navigate = useNavigate(); // Modified hook

    // Example list of staff members with their details
    const staffList = [
        { name: 'Amit Sharma', rating: 4.5, specialty: 'Hair Cutting & Styling' },
        { name: 'Priya Patel', rating: 4.7, specialty: 'Manicure & Pedicure' },
        { name: 'Ravi Kumar', rating: 4.3, specialty: 'Massage Therapy' },
        { name: 'Neha Gupta', rating: 4.8, specialty: 'Skin Care & Facials' },
        { name: 'Suresh Reddy', rating: 4.6, specialty: 'Hair Coloring & Treatments' },
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
