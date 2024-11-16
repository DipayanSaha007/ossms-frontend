import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/NewService.module.css';

function NewService() {
    const [serviceName, setServiceName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [paymentOption, setPaymentOption] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(''); // For online payment method
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpDate, setCardExpDate] = useState('');
    const [cardCVV, setCardCVV] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const services = [
        { name: 'Haircut', cost: 200 },
        { name: 'Massage', cost: 500 },
        { name: 'Haircut Style', cost: 1000 },
        { name: 'Nail Style', cost: 400 },
        { name: 'Facial Treatment', cost: 700 },
        { name: 'Body Scrub', cost: 600 },
        { name: 'Manicure', cost: 350 },
        { name: 'Pedicure', cost: 450 },
        { name: 'Hair Coloring', cost: 1200 },
        { name: 'Shaving', cost: 150 },
        { name: 'Waxing', cost: 300 },
        { name: 'Bridal Makeup', cost: 2500 },
        { name: 'Deep Tissue Massage', cost: 800 }
    ];

    const handleAddService = (e) => {
        e.preventDefault();

        if (!serviceName || !appointmentDate || !paymentOption) {
            setErrorMessage('All fields are required');
            return;
        }

        // If payment option is online and card details are required
        if (paymentOption === 'Online' && (paymentMethod === 'Card' && (!cardNumber || !cardExpDate || !cardCVV))) {
            setErrorMessage('Please provide card number, expiration date, and CVV');
            return;
        }

        // Find the selected service
        const selectedService = services.find(service => service.name === serviceName);

        if (!selectedService) {
            setErrorMessage('Please select a valid service');
            return;
        }

        // Store appointment details in localStorage
        const appointmentDetails = {
            serviceName: selectedService.name,
            serviceCost: selectedService.cost,
            appointmentDate,
            paymentOption,
            paymentMethod,
            cardNumber,
            cardExpDate,
            cardCVV
        };
        localStorage.setItem('appointmentDetails', JSON.stringify(appointmentDetails));

        setErrorMessage('');
        alert('Service and appointment booked successfully');
        navigate('/dashboard');
    };

    return (
        <div className="container">
            <h2>Add a New Service</h2>
            <form onSubmit={handleAddService}>
                <div className="form-group">
                    <select
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                    >
                        <option value="">Select Service</option>
                        {services.map((service) => (
                            <option key={service.name} value={service.name}>
                                {service.name} - Rs. {service.cost} 
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Appointment Date:</label>
                    <input
                        type="date"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Payment Option:</label>
                    <select
                        value={paymentOption}
                        onChange={(e) => setPaymentOption(e.target.value)}
                    >
                        <option value="">Select Payment Option</option>
                        <option value="Online">Online</option>
                        <option value="Cash">Cash</option>
                    </select>
                </div>

                {paymentOption === 'Online' && (
                    <div className="form-group">
                        <label>Payment Method:</label>
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            <option value="">Select Payment Method</option>
                            <option value="Gpay">GPay</option>
                            <option value="Card">Card</option>
                        </select>
                    </div>
                )}

                {paymentMethod === 'Card' && (
                    <div className="card-details">
                        <div className="form-group">
                            <label>Card Number:</label>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="Enter card number"
                            />
                        </div>
                        <div className="form-group">
                            <label>Card Expiry Date:</label>
                            <input
                                type="text"
                                value={cardExpDate}
                                onChange={(e) => setCardExpDate(e.target.value)}
                                placeholder="MM/YY"
                            />
                        </div>
                        <div className="form-group">
                            <label>CVV:</label>
                            <input
                                type="text"
                                value={cardCVV}
                                onChange={(e) => setCardCVV(e.target.value)}
                                placeholder="Enter CVV"
                            />
                        </div>
                    </div>
                )}

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewService;
