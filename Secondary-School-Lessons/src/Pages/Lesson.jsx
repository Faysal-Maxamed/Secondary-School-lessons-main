import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPlayCircle } from 'react-icons/fa';
import lesson1Arabic from "../video/math.chp1.mp4"


const lessonsData = {
  1: [
    { id: 1, title: 'Arabic Lesson 1', videoUrl: 'lesson1Arabic', description: 'Description for Arabic Lesson 1' },
    { id: 2, title: 'Arabic Lesson 2', videoUrl: '', description: 'Description for Arabic Lesson 2' },
    { id: 3, title: 'Arabic Lesson 3', videoUrl: '', description: 'Description for Arabic Lesson 3' },
    { id: 4, title: 'Arabic Lesson 4', videoUrl: '', description: 'Description for Arabic Lesson 4' },
    { id: 5, title: 'Arabic Lesson 5', videoUrl: '', description: 'Description for Arabic Lesson 5' }
   
  ],
  2: [
    { id: 1, title: 'English Lesson 1', videoUrl: '', description: 'Description for English Lesson 1' },
    { id: 2, title: 'English Lesson 2', videoUrl: '', description: 'Description for English Lesson 2' },
    { id: 3, title: 'English Lesson 3', videoUrl: '', description: 'Description for English Lesson 3' },
    { id: 4, title: 'English Lesson 4', videoUrl: '', description: 'Description for English Lesson 4' },
    { id: 5, title: 'English Lesson 5', videoUrl: '', description: 'Description for English Lesson 5' },
    { id: 6, title: 'English Lesson 6', videoUrl: '', description: 'Description for English Lesson 6' }
  ],
  3: [
    { id: 1, title: 'Physics Lesson 1', videoUrl: '', description: 'Description for Physics Lesson 1' },
    { id: 2, title: 'Physics Lesson 2', videoUrl: '', description: 'Description for Physics Lesson 2' },
    { id: 3, title: 'Physics Lesson 3', videoUrl: '', description: 'Description for Physics Lesson 3' },
    { id: 1, title: 'Physics Lesson 4', videoUrl: '', description: 'Description for Physics Lesson 4' },
    { id: 4, title: 'Physics Lesson 5', videoUrl: '', description: 'Description for Physics Lesson 5' },
    { id: 5, title: 'Physics Lesson 6', videoUrl: '', description: 'Description for Physics Lesson 6' },
    { id: 3, title: 'Physics Lesson 7', videoUrl: '', description: 'Description for Physics Lesson 7' },
  ],
  4: [
    { id: 1, title: 'Chemistry Lesson 1', videoUrl: '', description: 'Description for Chemistry Lesson 1' },
    { id: 2, title: 'Chemistry Lesson 2', videoUrl: '', description: 'Description for Chemistry Lesson 2' },
    { id: 3, title: 'Chemistry Lesson 3', videoUrl: '', description: 'Description for Chemistry Lesson 3' },
    { id: 4, title: 'Chemistry Lesson 4', videoUrl: '', description: 'Description for Chemistry Lesson 4' },
    { id: 5, title: 'Chemistry Lesson 5', videoUrl: '', description: 'Description for Chemistry Lesson 5' },
    { id: 6, title: 'Chemistry Lesson 6', videoUrl: '', description: 'Description for Chemistry Lesson 6' },
    { id: 7, title: 'Chemistry Lesson 7', videoUrl: '', description: 'Description for Chemistry Lesson 7' }
  ],
  5: [
    { id: 1, title: 'History Lesson 1', videoUrl: '', description: 'Description for History Lesson 1' },
    { id: 2, title: 'History Lesson 2', videoUrl: '', description: 'Description for History Lesson 2' },
    { id: 3, title: 'History Lesson 3', videoUrl: '', description: 'Description for History Lesson 3' },
    { id: 4, title: 'History Lesson 4', videoUrl: '', description: 'Description for History Lesson 4' },
    { id: 5, title: 'History Lesson 5', videoUrl: '', description: 'Description for History Lesson 5' },
   
  ],
  6: [
    { id: 1, title: 'Biology Lesson 1', videoUrl: '', description: 'Description for Biology Lesson 1' },
    { id: 2, title: 'Biology Lesson 2', videoUrl: '', description: 'Description for Biology Lesson 2' },
    { id: 3, title: 'Biology Lesson 3', videoUrl: '', description: 'Description for Biology Lesson 3' },
    { id: 4, title: 'Biology Lesson 4', videoUrl: '', description: 'Description for Biology Lesson 4' },
    { id: 5, title: 'Biology Lesson 5', videoUrl: '', description: 'Description for Biology Lesson 5' },
    { id: 6, title: 'Biology Lesson 6', videoUrl: '', description: 'Description for Biology Lesson 6' },
    { id: 7, title: 'Biology Lesson 7', videoUrl: '', description: 'Description for Biology Lesson 7' }
  ],
  7: [
    { id: 1, title: 'Math Lesson 1', videoUrl: '', description: 'Description for Math Lesson 1' },
    { id: 2, title: 'Math Lesson 2', videoUrl: '', description: 'Description for Math Lesson 2' },
    { id: 3, title: 'Math Lesson 3', videoUrl: '', description: 'Description for Math Lesson 3' },
    { id: 4, title: 'Math Lesson 4', videoUrl: '', description: 'Description for Math Lesson 4' },
    { id: 5, title: 'Math Lesson 5', videoUrl: '', description: 'Description for Math Lesson 5' },
    { id: 6, title: 'Math Lesson 6', videoUrl: '', description: 'Description for Math Lesson 6' },
    { id: 7, title: 'Math Lesson 7', videoUrl: '', description: 'Description for Math Lesson 7' },
    { id: 8, title: 'Math Lesson 8', videoUrl: '', description: 'Description for Math Lesson 8' },
    { id: 9, title: 'Math Lesson 9', videoUrl: '', description: 'Description for Math Lesson 9' },
  ],
  8: [
    { id: 1, title: 'Geography lesson 1', videoUrl: '', description: 'Description for Geography Lesson 1' },
    { id: 2, title: 'Geography lesson  2', videoUrl: '', description: 'Description for Geography Lesson 2' },
    { id: 3, title: 'Geography lesson  3', videoUrl: '', description: 'Description for Geography Lesson 3' },
    { id: 4, title: 'Geography lesson  4', videoUrl: '', description: 'Description for Geography Lesson 4' }
  ],
  
};


const Lesson = () => {
  const { courseId, lessonId } = useParams();
  const lessons = lessonsData[courseId];
  const lesson = lessons.find((lesson) => lesson.id === parseInt(lessonId));

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleVideoClick = () => {
    setIsVideoVisible(true);
  };

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
          <i className={`fas fa-${isSidebarOpen ? 'chevron-left' : 'chevron-right'}`}></i>
        </button>
        {isSidebarOpen && (
          <div>
             
            <h4 className="text-xl font-semibold mb-4">Other Lessons in this Course:</h4>
           
            <div className="space-y-4 ">
              {lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/courses/${courseId}/lesson/${lesson.id}`}
                  className="flex items-center justify-center p-2 bg-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg transition"
                >
                <FaPlayCircle className="text-gray-800 w-8 mr-4  text-4xl" />
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
              <source src={ lesson1Arabic} type="video/mp4" />
             
            </video>
          ) : 
          (
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