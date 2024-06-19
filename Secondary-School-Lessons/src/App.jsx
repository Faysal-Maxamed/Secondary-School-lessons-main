import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
import CourseImage from './pages/CourseImage';
import Login from './Components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === '123@gmail.com' && password === '123') {
      setUser({ email });
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/about-us" element={user ? <AboutUs /> : <Navigate to="/login" />} />
            <Route path="/courses" element={user ? <Courses /> : <Navigate to="/login" />} />
            <Route path="/courses/:courseId" element={user ? <CourseImage /> : <Navigate to="/login" />} />
            <Route path="/login" element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
