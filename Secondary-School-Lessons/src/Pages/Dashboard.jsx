import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from '../Components/Profile'; // Import your Profile component

const Dashboard = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  console.log('Dashboard user:', user); // Debugging log

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      onLogout();
      navigate('/login');
    }
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
    setShowCourses(false); // Hide courses when profile is clicked
  };

  const handleCoursesClick = () => {
    setShowCourses(!showCourses);
    setShowProfile(false); // Hide profile when courses are clicked
  };

  const navigateToForm2 = () => {
    navigate('/form2'); 
  };
  const navigateToForm3 = () => {
    navigate('/form3'); 
  };
  const navigateToForm4 = () => {
    navigate('/form4'); 
  };

  return (
    <div className="min-h-screen flex">
      <div className="bg-gray-600 text-white p-6 w-64 h-full flex flex-col items-start space-y-6">
        <h1 className='text-4xl italic'>Dashboard</h1>
       
        <nav className="flex flex-col space-y-2 w-full">
          <button
            onClick={() => navigate('/home')}
            className="hover:bg-blue-500 hover:border-blue-500 transition duration-300 text-left w-full px-4 py-2 rounded-full"
          >
            Home
          </button>
          <button
            onClick={handleCoursesClick}
            className="hover:bg-blue-500 hover:border-blue-500 transition duration-300 text-left w-full px-4 py-2 rounded-full"
          >
            Courses
          </button>
          {showCourses && (
            <>
              <button
                onClick={() => navigate('/courses')}
                className="hover:bg-blue-500 hover:border-blue-500 transition duration-300 text-left w-full px-4 py-2 rounded-full"
              >
                Form 1 Course
              </button>
              <button
                onClick={navigateToForm2} 
                className="hover:bg-blue-500 hover:border-blue-500 transition duration-300 text-left w-full px-4 py-2 rounded-full"
              >
                Form 2 Course
              </button>
              <button
                onClick={navigateToForm3} 
                className="hover:bg-blue-500 hover:border-blue-500 transition duration-300 text-left w-full px-4 py-2 rounded-full"
              >
                Form 3 Course
              </button>
              <button
                onClick={navigateToForm4} 
                className="hover:bg-blue-500 hover:border-blue-500 transition duration-300 text-left w-full px-4 py-2 rounded-full"
              >
                Form 4 Course
              </button>
            </>
          )}
          <button
            onClick={handleProfileClick} // Handle click to show profile section
            className="hover:bg-blue-500 hover:border-blue-500 transition duration-300 text-left w-full px-4 py-2 rounded-full"
          >
            Profile
          </button>
          {user?.isAdmin && (
            <>
              <button
                onClick={() => navigate('/admin')}
                className="hover:bg-blue-500 hover:border-blue-500 transition duration-300 text-left w-full px-4 py-2 rounded-full"
              >
                See Users
              </button>
              <button
                onClick={() => navigate('/RegisterAdmin')}
                className="hover:bg-blue-500 hover:border-blue-500 transition duration-300 text-left w-full px-4 py-2 rounded-full"
              >
                Register Admin
              </button>
            </>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition duration-300 px-4 py-2 rounded-full mt-4 w-full text-left"
          >
            Logout
          </button>
        </nav>
      </div>
      <div className="ml-64 p-8 flex-grow">
        {!showCourses && !showProfile && (
          <p className="text-lg mb-8">Welcome to the Dashboard! Enjoy Your Time</p>
        )}
        {showProfile && <Profile user={user} />}
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default Dashboard;
