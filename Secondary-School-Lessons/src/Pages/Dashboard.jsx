import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faBook, faUsers, faUserPlus, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import Profile from '../Components/Profile';
import RegisterAdmin from '../Components/RegisterAdmin';
import Admin from '../Pages/Admin'; // Import the Admin component

const Dashboard = ({ user, setUser, onLogout }) => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showRegisterAdmin, setShowRegisterAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      onLogout();
      navigate('/login');
    }
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
    setShowCourses(false);
    setShowUsers(false);
    setShowRegisterAdmin(false);
  };

  const handleCoursesClick = () => {
    setShowCourses(!showCourses);
    setShowProfile(false);
    setShowUsers(false);
    setShowRegisterAdmin(false);
  };

  const handleUsersClick = () => {
    setShowUsers(!showUsers);
    setShowProfile(false);
    setShowCourses(false);
    setShowRegisterAdmin(false);
  };

  const handleRegisterAdminClick = () => {
    setShowRegisterAdmin(!showRegisterAdmin);
    setShowUsers(false);
    setShowProfile(false);
    setShowCourses(false);
  };

  const handleRegister = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setShowRegisterAdmin(false);
    setShowUsers(true);
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

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex min-h-screen">
      <div className={`bg-gray-200 text-blue-800 p-4 ${isSidebarExpanded ? 'w-64' : 'w-20'} transition-all duration-300 flex flex-col items-center`}>
        <button onClick={toggleSidebar} className="text-black mb-4 self-end">
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>
        <div className="text-center mb-8">
          <FontAwesomeIcon icon={faUser} className="text-blue text-4xl mb-4" />
          {isSidebarExpanded && user && (
            <>
              <h3>{user.name}</h3>
              <p>{user.role}</p>
              <p>{user.email}</p> {/* Display the user's email */}
            </>
          )}
        </div>
        <nav className="w-full">
          <button onClick={() => navigate('/Home')} className="block w-full text-left p-2 text-lg font-medium transition duration-300 rounded-lg">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> {isSidebarExpanded && 'Home'}
          </button>
          <button onClick={handleCoursesClick} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
            <FontAwesomeIcon icon={faBook} className="mr-2" /> {isSidebarExpanded && 'Courses'}
          </button>
          {showCourses && isSidebarExpanded && (
            <>
              <button onClick={() => navigate('/courses')} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
                Form 1 Course
              </button>
              <button onClick={navigateToForm2} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
                Form 2 Course
              </button>
              <button onClick={navigateToForm3} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
                Form 3 Course
              </button>
              <button onClick={navigateToForm4} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
                Form 4 Course
              </button>
            </>
          )}
          <button onClick={handleProfileClick} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
            <FontAwesomeIcon icon={faUser} className="mr-2" /> {isSidebarExpanded && 'Profile'}
          </button>
          {user?.isAdmin && (
            <>
              <button onClick={handleUsersClick} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
                <FontAwesomeIcon icon={faUsers} className="mr-2" /> {isSidebarExpanded && 'See Users'}
              </button>
              <button onClick={handleRegisterAdminClick} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> {isSidebarExpanded && 'Register Admin'}
              </button>
            </>
          )}
          <button onClick={handleLogout} className="block w-full ml-4 mt-20 text-left p-2 text-lg font-medium text-red-500 transition duration-300 mt-auto">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> {isSidebarExpanded && 'Logout'}
          </button>
        </nav>
      </div>
      <div className="flex-grow p-8">
        {!showCourses && !showProfile && !showUsers && !showRegisterAdmin && (
          <p className="text-lg mb-8">Welcome to the Dashboard! Enjoy Your Time</p>
        )}
        {showProfile && <Profile user={user} setUser={setUser} />}
        {showUsers && <Admin users={users} setUsers={setUsers} />} {/* Display Admin component */}
        {showRegisterAdmin && <RegisterAdmin onRegister={handleRegister} />} {/* Pass the handleRegister function */}
      </div>
    </div>
  );
};

export default Dashboard;
