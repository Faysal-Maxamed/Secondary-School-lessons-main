import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
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
import Dashboard from './Pages/Dashboard';
import Form2 from './Pages/Form2';
import F2Lessons from './Pages/F2Lessons';
import Form3 from './Pages/Form3';
import Form4 from './Pages/Form4';
import F1Lessons from './Pages/F1Lessons';
import F3Lessons from './Pages/F3Lessons';
import F4Lessons from './Pages/F4Lessons';
import { auth } from './firebase';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContent = ({ user, setUser, users, setUsers, handleLogout, handleLogin, handleRegister }) => {
  const location = useLocation();

  return (
    <>
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
          <Route path="/courses/:courseId/F1Lessons/:lessonId" element={user ? <Lesson /> : <Navigate to='/login' />} />
          <Route path='/form1/:courseId/lessons' element={user ? <F1Lessons /> : <Navigate to='/login' />} />
          <Route path='/profile' element={user ? <Profile user={user} setUser={setUser} /> : <Navigate to='/login' />} />
          <Route path='/contact-us' element={user ? <ContactUs /> : <Navigate to='/login' />} />
          <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser} onLogout={handleLogout} />} />
          <Route path='/form2' element={user ? <Form2 /> : <Navigate to='/login' />} />
          <Route path='/form2/:courseId/lessons' element={user ? <F2Lessons /> : <Navigate to='/login' />} />
          <Route path='/form3' element={user ? <Form3 /> : <Navigate to='/login' />} />
          <Route path='/form3/:courseId/lessons' element={user ? <F3Lessons /> : <Navigate to='/login' />} />
          <Route path='/form4' element={user ? <Form4 /> : <Navigate to='/login' />} />
          <Route path='/form4/:courseId/lessons' element={user ? <F4Lessons /> : <Navigate to='/login' />} />
        </Routes>
      </main>
    </>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userData = JSON.parse(localStorage.getItem('user'));
        setUser({ ...currentUser, ...userData });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        toast.success('Login successful!');
      })
      .catch((error) => {
        toast.error('Invalid credentials');
      });
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      localStorage.removeItem('user');
      toast.success('Logged out successfully');
    }).catch((error) => {
      toast.error('Error logging out');
    });
  };

  const handleRegister = (formData) => {
    setUsers([...users, formData]);
    localStorage.setItem('users', JSON.stringify([...users, formData]));
    toast.success('Registered successfully! Please login.');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ToastContainer />
        <AppContent user={user} setUser={setUser} users={users} setUsers={setUsers} handleLogout={handleLogout} handleLogin={handleLogin} handleRegister={handleRegister} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;