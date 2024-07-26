import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPlayCircle, FaHome } from 'react-icons/fa';
import axios from 'axios';

const Lesson = () => {
  const { courseId, lessonId } = useParams();
  const [lessons, setLessons] = useState([]);
  const [lesson, setLesson] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        let apiUrl = '';

        switch (courseId) {
          case 'arabic':
            apiUrl = 'https://api.example.com/arabic';
            break;
          case 'chemistry':
            apiUrl = 'https://api.example.com/chemistry';
            break;
          case 'physics':
            apiUrl = 'https://api.example.com/physics';
            break;
          case 'geography':
            apiUrl = 'https://api.example.com/geography';
            break;
          case 'history':
            apiUrl = 'https://api.example.com/history';
            break;
          case 'math':
            apiUrl = 'https://api.example.com/math';
            break;
          case 'english':
            apiUrl = 'https://api.example.com/english';
            break;
          case 'biology':
            apiUrl = 'https://api.example.com/biology';
            break;
          default:
            throw new Error('Invalid course ID');
        }

        const response = await axios.get(`${apiUrl}/courses/${courseId}/lessons`);
        const data = response.data;
        setLessons(data);

        const currentLesson = data.find((lesson) => lesson.id === parseInt(lessonId));
        setLesson(currentLesson);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLessons();
  }, [courseId, lessonId]);

  const handleVideoClick = () => {
    setIsVideoVisible(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="container mx-auto p-4 my-8 flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-1/3' : 'w-12'} transition-width duration-300 bg-gray-100 p-4`}>
        <button
          className="text-gray-600 hover:text-gray-900 mb-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaHome />
        </button>
        {isSidebarOpen && (
          <div>
            <h4 className="text-xl font-semibold mb-4">Other Lessons in this Course:</h4>
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/courses/${courseId}/lesson/${lesson.id}`}
                  className="flex items-center justify-center p-2 bg-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg transition"
                >
                  <FaPlayCircle className="text-gray-800 w-8 mr-4 text-4xl" />
                  {lesson.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Main content */}
      <div className={`${isSidebarOpen ? 'w-2/3' : 'w-full'} transition-width duration-300 pl-4`}>
        <h2 className="text-3xl font-bold mb-2">{`Course ${courseId}`}</h2>
        <h3 className="text-2xl font-semibold mb-4">{lesson.title}</h3>
        <div className="bg-gray-200 rounded-lg overflow-hidden mb-4">
          {isVideoVisible ? (
            <video key={lesson.id} controls className="w-full h-auto">
              <source src={lesson.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleVideoClick}
            >
              Watch Lesson
            </button>
          )}
        </div>
        <p className="mb-4">{lesson.description}</p>
      </div>
    </div>
  );
};

export default Lesson;
