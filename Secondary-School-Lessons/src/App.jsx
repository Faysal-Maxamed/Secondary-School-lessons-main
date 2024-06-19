import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-300">
      <h1 className="text-6xl mb-8 ">Welcome to Our Project</h1>
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded">Login</Link>
        <Link to="/signup" className="px-4 py-2 bg-green-500 text-white rounded">Sign Up</Link>
      </div>
    </div>
    
    </div>
  );
}

export default App;