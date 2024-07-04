import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import lesson1Arabic from '../video/math.chp1.mp4';
import { FaPlayCircle, FaBars } from 'react-icons/fa'; // Assuming FaBars is the menu bar icon

// Expanded lesson data for each course
const lessonsData = {
  1: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Arabic', videoUrl: lesson1Arabic },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Arabic', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Arabic', videoUrl: lesson1Arabic },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Arabic', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Arabic', videoUrl: lesson1Arabic },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Arabic', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Arabic', videoUrl: lesson1Arabic },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Arabic', videoUrl: 'https://www.example.com/video2.mp4' },
  ],
  2: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 English', videoUrl: lesson1Arabic },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 English', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 English', videoUrl: lesson1Arabic },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 English', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 English', videoUrl: lesson1Arabic },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 English', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 English', videoUrl: lesson1Arabic },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 English', videoUrl: 'https://www.example.com/video2.mp4' },
  ],
  3: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Mathmatics', videoUrl: lesson1Arabic },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Mathmatics', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Mathmatics', videoUrl: lesson1Arabic },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Mathmatics', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Mathmatics', videoUrl: lesson1Arabic },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Mathmatics', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Mathmatics', videoUrl: lesson1Arabic },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Mathmatics', videoUrl: 'https://www.example.com/video2.mp4' },
  ],
   4: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Physics', videoUrl: lesson1Arabic },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Physics', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Physics', videoUrl: lesson1Arabic },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Physics', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Physics', videoUrl: lesson1Arabic },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Physics', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Physics', videoUrl: lesson1Arabic },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Physics', videoUrl: 'https://www.example.com/video2.mp4' },
  ],
  5: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Chemistry', videoUrl: lesson1Arabic },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Chemistry', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Chemistry', videoUrl: lesson1Arabic },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Chemistry', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Chemistry', videoUrl: lesson1Arabic },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Chemistry', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Chemistry', videoUrl: lesson1Arabic },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Chemistry', videoUrl: 'https://www.example.com/video2.mp4' },
  ],
  6: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 History', videoUrl: lesson1Arabic },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 History', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 History', videoUrl: lesson1Arabic },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 History', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 History', videoUrl: lesson1Arabic },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 History', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 History', videoUrl: lesson1Arabic },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 History', videoUrl: 'https://www.example.com/video2.mp4' },
  ],
  7: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Biology', videoUrl: lesson1Arabic },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Biology', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Biology', videoUrl: lesson1Arabic },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Biology', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Biology', videoUrl: lesson1Arabic },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Biology', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Biology', videoUrl: lesson1Arabic },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Biology', videoUrl: 'https://www.example.com/video2.mp4' },
  ],
  8: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Geography', videoUrl: lesson1Arabic },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Geography', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Geography', videoUrl: lesson1Arabic },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Geography', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Geography', videoUrl: lesson1Arabic },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Geography', videoUrl: 'https://www.example.com/video2.mp4' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Geography', videoUrl: lesson1Arabic },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Geography', videoUrl: 'https://www.example.com/video2.mp4' },
  ],
  // Add similar structure for other courses if needed
};

const F1Lessons = () => {
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
        <h4 className="text-xl font-semibold mb-4">Other Lessons in this Course:</h4>
          <div className="space-y-2">
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => handleLessonClick(lesson)}
                className="flex items-center w-full text-left p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                
              >
                <FaPlayCircle className="mr-2 text-blue ml-16 " />
                {lesson.title}
                
              </button>
            ))}
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="md:w-3/4 mt-4 md:mt-0 md:ml-4">
        <h2 className="text-3xl font-bold mb-8">
          {selectedLesson ? (
            <div className="flex items-center justify-center">
             
             Form 1 Lesson {selectedLesson.id}
            </div>
          ) : (
            "Lessons"
          )}
        </h2>

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

export default F1Lessons;