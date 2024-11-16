import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import NewService from './components/NewService';
import Appointment from './components/Appointment';
import OnlineStore from './components/OnlineStore';
import StaffManagement from './components/StaffManagement';
import EditProfile from './components/EditProfile'; // Ensure correct import
import CustomerQuery from './components/CustomerQuery'; // Ensure correct import
// import './styles.css';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-service" element={<NewService />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/online-store" element={<OnlineStore />} />
          <Route path="/staff-management" element={<StaffManagement />} />
          <Route path="/edit-profile" element={<EditProfile />} /> {/* Add EditProfile Route */}
          <Route path="/customer-query" element={<CustomerQuery />} /> {/* Add CustomerQuery Route */}
          <Route path="*" element={<div>Page not found</div>} /> {/* Fallback Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
