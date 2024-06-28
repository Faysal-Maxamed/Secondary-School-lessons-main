import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPlayCircle, FaHome } from 'react-icons/fa';

const Lesson = () => {
  const { courseId, lessonId } = useParams();
  
  // Simulated data for course lessons
  const lessons = [
    { id: 1, title: 'Introduction to Course', description: 'An overview of the course.', videoUrl: 'https://example.com/videos/1.mp4' },
    { id: 2, title: 'Lesson 2', description: 'Details about lesson 2.', videoUrl: 'https://example.com/videos/2.mp4' },
    { id: 3, title: 'Lesson 3', description: 'Details about lesson 3.', videoUrl: 'https://example.com/videos/3.mp4' },
    { id: 4, title: 'Lesson 4', description: 'Details about lesson 4.', videoUrl: 'https://example.com/videos/4.mp4' },
    { id: 5, title: 'Lesson 5', description: 'Details about lesson 5.', videoUrl: 'https://example.com/videos/5.mp4' },
    { id: 6, title: 'Lesson 6', description: 'Details about lesson 6.', videoUrl: 'https://example.com/videos/6.mp4' },
    { id: 7, title: 'Lesson 7', description: 'Details about lesson 7.', videoUrl: 'https://example.com/videos/7.mp4' },
    { id: 8, title: 'Conclusion', description: 'Wrapping up the course.', videoUrl: 'https://example.com/videos/8.mp4' }
  ];

  // Find the current lesson based on lessonId
  const lesson = lessons.find(lesson => lesson.id === parseInt(lessonId));

  // State for video visibility
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  // Handle video click to show video
  const handleVideoClick = () => {
    setIsVideoVisible(true);
  };

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="container mx-auto p-4 my-8 flex">
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-100 p-4">
        <button className="text-gray-600 hover:text-gray-900 mb-4">
          <FaHome />
        </button>
        <div>
          <h4 className="text-xl font-semibold mb-4">Other Lessons in this Course:</h4>
          <div className="space-y-4">
            {lessons.map(item => (
              <Link
                key={item.id}
                to={`/courses/${courseId}/lesson/${item.id}`}
                className={`flex items-center justify-center p-2 rounded-lg hover:bg-blue-500 hover:shadow-lg transition ${item.id === parseInt(lessonId) ? 'bg-blue-300' : ''}`}
              >
                <FaPlayCircle className="text-gray-800 w-8 mr-4 text-4xl" />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="w-2/3 pl-4">
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
