// src/pages/Register.jsx
import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic here
    console.log('Registered:', email, password);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Register</button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
