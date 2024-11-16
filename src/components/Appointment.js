import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Appointment.module.css';

function Appointment() {
    const [appointmentDetails, setAppointmentDetails] = useState(null);
    const navigate = useNavigate();

    // Retrieve stored appointment details from localStorage when the component mounts
    useEffect(() => {
        const storedDetails = localStorage.getItem('appointmentDetails');
        if (storedDetails) {
            setAppointmentDetails(JSON.parse(storedDetails));
        }
    }, []);

    const handleCancelAppointment = () => {
        // Clear the appointment details from localStorage and state
        localStorage.removeItem('appointmentDetails');
        setAppointmentDetails(null);
        alert('Appointment cancelled successfully');
        navigate('/dashboard'); // Redirect to dashboard after cancellation
    };

    return (
        <div className="container">
            <h2>Your Appointment</h2>
            {appointmentDetails ? (
                <div className="appointment-details">
                    <p><strong>Service:</strong> {appointmentDetails.serviceName}</p>
                    <p><strong>Cost:</strong> ₹{appointmentDetails.serviceCost}</p>
                    <p><strong>Appointment Date:</strong> {appointmentDetails.appointmentDate}</p>
                    <p><strong>Payment Option:</strong> {appointmentDetails.paymentOption}</p>
                    <p><strong>Payment Method:</strong> {appointmentDetails.paymentMethod}</p>
                    <button onClick={handleCancelAppointment}>Cancel Appointment</button>
                </div>
            ) : (
                <p>No appointment details found.</p>
            )}
            <div>
                <button className="go-back-btn" onClick={() => navigate('/dashboard')}>Go Back</button>
            </div>
        </div>
    );
}

export default Appointment;
