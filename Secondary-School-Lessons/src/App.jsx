import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Courses from './Pages/Form1';
import CourseDetails from './Pages/CourseDetails';
import Lesson from './Pages/Lesson';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import ContactUs from './Pages/ContactUs';
import Admin from './Pages/Admin';
import RegisterAdmin from './Components/RegisterAdmin';
import Dashboard from './Pages/Dashboard';
import Form2 from './Pages/Form2'; // Import Form2 component
import Form3 from './Pages/Form3'; // Import Form3 component
import Form4  from './Pages/Form4';

const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (email, password, userType) => {
    const adminEmail = '123@gmail.com';
    const adminPassword = '123';

    if (userType === 'admin' && email === adminEmail && password === adminPassword) {
      const adminUser = {
        fullName: 'Pheyzal',
        age: 21,
        address: 'Taleh',
        email: adminEmail,
        phone: '0614388477',
        district: 'hodan',
        school: 'Ablaal',
        class: 'F4',
        isAdmin: true
      };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
    } else {
      const registeredUser = users.find((user) => user.email === email && user.password === password);
      if (registeredUser) {
        const normalUser = { ...registeredUser, isAdmin: false };
        setUser(normalUser);
        localStorage.setItem('user', JSON.stringify(normalUser));
      } else {
        alert('Invalid credentials');
        return false; // Prevent navigation
      }
    }
    return true; // Allow navigation
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleRegister = (formData) => {
    setUsers([...users, formData]);
    alert('Registered successfully! Please login.');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {user && location.pathname !== '/login' && location.pathname !== '/register' && (
          <Header user={user} onLogout={handleLogout} />
        )}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/about-us" element={user ? <AboutUs /> : <Navigate to="/login" />} />
            <Route path="/courses" element={user ? <Courses /> : <Navigate to="/login" />} />
            <Route path="/courses/:courseId" element={user ? <CourseDetails /> : <Navigate to="/login" />} />
            <Route path="/courses/:courseId/lesson/:lessonId" element={user ? <Lesson /> : <Navigate to="/login" />} />
            <Route path="/profile" element={user ? <Profile user={user} setUser={setUser} /> : <Navigate to="/login" />} />
            <Route path="/contact-us" element={user ? <ContactUs /> : <Navigate to="/login" />} />
            <Route path="/RegisterAdmin" element={<RegisterAdmin onRegister={handleRegister} />} />
            <Route path="/dashboard" element={<Dashboard user={user} onLogout={handleLogout} />} />
            <Route path="/form2" element={user ? <Form2 /> : <Navigate to="/login" />} /> {/* New route for Form2 */}
            <Route path="/form3" element={user ? <Form3 /> : <Navigate to="/login" />} /> {/* New route for Form3 */}
            <Route path="/form4" element={user ? <Form4 /> : <Navigate to="/login" />} /> {/* New route for Form3 */}
            {user && user.isAdmin && <Route path="/admin" element={<Admin users={users} setUsers={setUsers} />} />}
          </Routes>
        </main>
        
      </div>
    </Router>
  );
};

export default App;
