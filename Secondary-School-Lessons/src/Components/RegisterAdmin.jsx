import React, { useState } from 'react';

const RegisterAdmin = () => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [adminType, setAdminType] = useState('Admin');

  const handleRegister = () => {
    if (email && number && password && adminType !== 'none') {
      if (!email.includes('@gmail.com')) {
        alert('Please enter a valid Gmail address!');
      } else {
        alert('You are registered as a new admin!');
        const admin = {
          email,
          number,
          password,
          adminType,
        };
        // Save admin to local storage
        localStorage.setItem('admin', JSON.stringify(admin));
      }
    } else {
      alert('Please fill in all the fields!');
    }
  };

  return (
    <div className="container w-96 mx-96 mt-24 mt-8 rounded-3xl py-5 shadow-md">
      <h1 className="text-3xl font-bold mb-4 ml-16">Register Admin</h1>
      <div className="flex items-center space-x-4 ml-44">
        <label htmlFor="admin-type">Type:</label>
        <select
          id="admin-type"
          value={adminType}
          onChange={(e) => setAdminType(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded"
        >
          <option value="regular">Admin</option>
        </select>
      </div>
      <div className="flex flex-col space-y-4 mt-8 w-2/3 ml-16">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded rounded-3xl"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded rounded-3xl"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded rounded-3xl"
        />

        <button
          onClick={handleRegister}
          className="bg-gray-600 text-white py-2 px-4 rounded rounded-3xl hover:bg-blue-600"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterAdmin;