import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const UserRegistrationPopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (event) => {
    event.preventDefault();
    signup(username, email, password, confPassword);
  };

  return (
    <div className="edit-popup">
      {/* <div className="popup-content"> */}
        <h2>Create New User</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <label>Confirm Password:</label>
          <input type="password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} required />
          <div style={{display:"flex" , gap:"79px"}}>
          <button className='fbutton_CreateUser' form_button_cancel type="submit" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create User'}
          </button>
          {error && <p className="error-message">{error}</p>}
          <button className="form_button_cancel" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    // </div>
  );
};

export default UserRegistrationPopup;
