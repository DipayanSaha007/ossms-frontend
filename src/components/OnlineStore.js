import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OnlineStore() {
    const navigate = useNavigate();

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpDate, setCardExpDate] = useState('');
    const [cardCVV, setCardCVV] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [purchaseMessage, setPurchaseMessage] = useState('');

    const products = [
        { name: 'Shampoo', price: 200 },
        { name: 'Conditioner', price: 250 },
        { name: 'Soap', price: 100 },
        { name: 'Hair Oil', price: 150 },
        { name: 'Hair Color', price: 350 },
        { name: 'Face Mask', price: 400 },
    ];

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
    };

    const handlePayment = (e) => {
        e.preventDefault();
        if (!address || !paymentMethod) {
            setErrorMessage('Please provide address and select a payment method');
            return;
        }

        if (paymentMethod === 'Card' && !cardNumber) {
            setErrorMessage('Please enter card number for card payment');
            return;
        }

        // Simulate the purchase process
        setErrorMessage('');
        setPurchaseMessage(`You have successfully purchased ${selectedProduct.name} for ₹${selectedProduct.price}.`);

        // Redirect to the dashboard after a successful purchase
        setTimeout(() => {
            navigate('/dashboard');
        }, 2000);
    };

    const handleGoBack = () => {
        navigate('/dashboard');
    };

    return (
        <div className="container">
            <h2>Online Store</h2>
            <div className="card">
                <div className="card-title">
                    <h3>Beauty Products</h3>
                </div>
                <div className="card-body">
                    <p>Here are some great beauty products for you. Check them out!</p>
                    <ul>
                        {products.map((product, index) => (
                            <li key={index} className="product-item">
                                <button onClick={() => handleSelectProduct(product)}>
                                    {product.name} - ₹{product.price}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {selectedProduct && (
                        <div className="purchase-section">
                            <h4>Payment for {selectedProduct.name}</h4>
                            <form onSubmit={handlePayment}>
                                <div className="form-group">
                                    <label>Enter Address:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Select Payment Method:</label>
                                    <select
                                        value={paymentMethod}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    >
                                        <option value="">Select Payment Method</option>
                                        <option value="Online">Online Payment</option>
                                        <option value="Offline">Cash on Delivery</option>
                                    </select>
                                </div>

                                {paymentMethod === 'Online' && (
                                    <div className="form-group">
                                        <label>Select Payment Method:</label>
                                        <select
                                            value={paymentMethod}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        >
                                            <option value="">Select Method</option>
                                            <option value="GPay">GPay</option>
                                            <option value="Card">Credit/Debit Card</option>
                                        </select>
                                    </div>
                                )}

                                {paymentMethod === 'Card' && (
                                    <div className="card-details">
                                        <div className="form-group">
                                            <label>Enter Card Number:</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your card number"
                                                value={cardNumber}
                                                onChange={(e) => setCardNumber(e.target.value)}
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

                                {errorMessage && <div className="error-message">{errorMessage}</div>}
                                {purchaseMessage && <div className="success-message">{purchaseMessage}</div>}
                                <button type="submit">Submit Payment</button>
                            </form>
                        </div>
                    )}
                    <button onClick={handleGoBack} className="go-back-btn">Go Back to Dashboard</button>
                </div>
            </div>
        </div>
    );
}

export default OnlineStore;
