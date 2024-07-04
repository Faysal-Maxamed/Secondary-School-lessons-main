import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import lesson1Arabic from '../video/math.chp1.mp4';
import { FaPlayCircle, FaBars } from 'react-icons/fa'; // Assuming FaBars is the menu bar icon

// Expanded lesson data for each course
const lessonsData = {
  1: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1', videoUrl: lesson1Arabic },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1', videoUrl: lesson1Arabic },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2', videoUrl: 'https://www.example.com/video2.mp4' },
  ],
  2: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1', videoUrl: 'https://www.example.com/video1.mp4' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2', videoUrl: 'https://www.example.com/video2.mp4' },
  ],
  3: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1', videoUrl: 'https://www.example.com/video1.mp4' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3', videoUrl: 'https://www.example.com/video3.mp4' },
  ],
  // Add similar structure for other courses if needed
};

const F2Lessons = () => {
  const { courseId } = useParams();
  const lessons = lessonsData[courseId] || [];
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false); // State for mobile sidebar visibility

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarVisible(!mobileSidebarVisible);
  };

  return (
    <div className="container mx-auto p-4 my-8">
      {/* Mobile Menu Bar Icon */}
      <div className="md:hidden flex justify-end mb-4">
        <button onClick={toggleMobileSidebar} className="text-gray-600 focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar for Desktop */}
        <div className={`md:w-1/4 bg-gray-200 p-4 rounded-lg ${mobileSidebarVisible ? 'block md:hidden' : 'hidden md:block'}`}>
          <div className="space-y-2">
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => handleLessonClick(lesson)}
                className="flex items-center w-full text-left p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300"
              >
                <FaPlayCircle className="mr-2 text-blue ml-16" />
                {lesson.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="md:w-3/4 mt-4 md:mt-0 md:ml-4">
          {selectedLesson ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <video controls src={selectedLesson.videoUrl} className={`w-full rounded-lg mb-4 ${mobileSidebarVisible ? 'md:hidden' : ''}`}></video>
              <p className="text-gray-700">{selectedLesson.description}</p>
            </div>
          ) : (
            <p className="text-center text-gray-700">Please select a lesson to view its content.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default F2Lessons;
