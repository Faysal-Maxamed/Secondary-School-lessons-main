import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPlayCircle } from 'react-icons/fa';
// start import About Course  1 Arabic 
import lesson1Arabic from "../video/this.mp4";
import lesson2Arabic from "../video/math.chp1.mp4";
import lesson3Arabic from "../video/this.mp4";
import lesson4Arabic from "../video/this.mp4";
import lesson5Arabic from "../video/this.mp4";
// End import About Course 1 Arabic
// start import About Course 2 English
import lesson1English from "../video/this.mp4";
import lesson2English from "../video/math.chp1.mp4";
import lesson3English from "../video/this.mp4";
import lesson4English from "../video/this.mp4";
import lesson5English from "../video/this.mp4";
import lesson6English from "../video/this.mp4";
// End import About Course 2 English
// start import About Course 3 Physics
import lesson1Physics from "../video/this.mp4";
import lesson2Physics  from "../video/math.chp1.mp4";
import lesson3Physics  from "../video/this.mp4";
import lesson4Physics  from "../video/this.mp4";
import lesson5Physics  from "../video/this.mp4";
import lesson6Physics  from "../video/this.mp4";
import lesson7Physics  from "../video/this.mp4";
// End import About Course 3 Physics
// start import About Course 4 Chemestiry
import lesson1Chemistry from "../video/this.mp4";
import lesson2Chemistry  from "../video/math.chp1.mp4";
import lesson3Chemistry  from "../video/this.mp4";
import lesson4Chemistry  from "../video/this.mp4";
import lesson5Chemistry  from "../video/this.mp4";
import lesson6Chemistry  from "../video/this.mp4";
import lesson7Chemistry  from "../video/this.mp4";
// End import About Course 4 Chemestiry
// start import About Course 5 History
import lesson1History from "../video/this.mp4";
import lesson2History  from "../video/math.chp1.mp4";
import lesson3History  from "../video/this.mp4";
import lesson4History  from "../video/this.mp4";
import lesson5History  from "../video/this.mp4";
// End import About Course 5 History
// start import About Course 6 Biology
import Lesson1Biology from "../video/this.mp4";
import Lesson2Biology  from "../video/math.chp1.mp4";
import Lesson3Biology  from "../video/this.mp4";
import Lesson4Biology  from "../video/this.mp4";
import Lesson5Biology  from "../video/this.mp4";
import Lesson6Biology  from "../video/this.mp4";
import Lesson7Biology  from "../video/this.mp4";
// End import About Course 6 Biology
// start import About Course 7 Math
import lesson1Math from "../video/this.mp4";
import lesson2Math  from "../video/math.chp1.mp4";
import lesson3Math  from "../video/this.mp4";
import lesson4Math  from "../video/this.mp4";
import lesson5Math  from "../video/this.mp4";
import lesson6Math  from "../video/this.mp4";
import lesson7Math  from "../video/this.mp4";
import lesson8Math  from "../video/this.mp4";
import lesson9Math  from "../video/this.mp4";
// End import About Course  7 Math
// start import About Course 8 geography
import Lesson1Geo from "../video/this.mp4";
import Lesson2Geo  from "../video/math.chp1.mp4";
import Lesson3Geo  from "../video/this.mp4";
import Lesson4Geo  from "../video/this.mp4";
// End import About Course 8 geography



const lessonsData = {
  1: [
    { id: 1, title: 'Arabic Lesson 1', videoUrl: lesson1Arabic, description: 'Description for Arabic Lesson 1' },
    { id: 2, title: 'Arabic Lesson 2', videoUrl: lesson2Arabic, description: 'Description for Arabic Lesson 2' },
    { id: 3, title: 'Arabic Lesson 3', videoUrl: lesson3Arabic, description: 'Description for Arabic Lesson 3' },
    { id: 4, title: 'Arabic Lesson 4', videoUrl: lesson4Arabic, description: 'Description for Arabic Lesson 4' },
    { id: 5, title: 'Arabic Lesson 5', videoUrl: lesson5Arabic, description: 'Description for Arabic Lesson 5' }
  ],
  2: [
    { id: 1, title: 'English Lesson 1', videoUrl: lesson1English, description: 'Description for English Lesson 1' },
    { id: 2, title: 'English Lesson 2', videoUrl: lesson2English, description: 'Description for English Lesson 2' },
    { id: 3, title: 'English Lesson 3', videoUrl: lesson3English, description: 'Description for English Lesson 3' },
    { id: 4, title: 'English Lesson 4', videoUrl: lesson4English, description: 'Description for English Lesson 4' },
    { id: 5, title: 'English Lesson 5', videoUrl: lesson5English, description: 'Description for English Lesson 5' },
    { id: 6, title: 'English Lesson 6', videoUrl: lesson6English, description: 'Description for English Lesson 6' }
  ],
  3: [
    { id: 1, title: 'Math Lesson 1', videoUrl: lesson1Math, description: 'Description for Math Lesson 1' },
    { id: 2, title: 'Math Lesson 2', videoUrl: lesson2Math, description: 'Description for Math Lesson 2' },
    { id: 3, title: 'Math Lesson 3', videoUrl: lesson3Math, description: 'Description for Math Lesson 3' },
    { id: 4, title: 'Math Lesson 4', videoUrl: lesson4Math, description: 'Description for Math Lesson 4' },
    { id: 5, title: 'Math Lesson 5', videoUrl: lesson5Math, description: 'Description for Math Lesson 5' },
    { id: 6, title: 'Math Lesson 6', videoUrl: lesson6Math, description: 'Description for Math Lesson 6' },
    { id: 7, title: 'Math Lesson 7', videoUrl: lesson7Math, description: 'Description for Math Lesson 7' },
    { id: 8, title: 'Math Lesson 8', videoUrl: lesson8Math, description: 'Description for Math Lesson 8' },
    { id: 9, title: 'Math Lesson 9', videoUrl: lesson9Math, description: 'Description for Math Lesson 9' },
  ],
  4: [
    { id: 1, title: 'Physics Lesson 1', videoUrl: lesson1Physics, description: 'Description for Physics Lesson 1' },
    { id: 2, title: 'Physics Lesson 2', videoUrl: lesson2Physics, description: 'Description for Physics Lesson 2' },
    { id: 3, title: 'Physics Lesson 3', videoUrl: lesson3Physics, description: 'Description for Physics Lesson 3' },
    { id: 4, title: 'Physics Lesson 4', videoUrl: lesson4Physics, description: 'Description for Physics Lesson 4' },
    { id: 5, title: 'Physics Lesson 5', videoUrl: lesson5Physics, description: 'Description for Physics Lesson 5' },
    { id: 6, title: 'Physics Lesson 6', videoUrl: lesson6Physics, description: 'Description for Physics Lesson 6' },
    { id: 7, title: 'Physics Lesson 7', videoUrl: lesson7Physics, description: 'Description for Physics Lesson 7' }
  ],
  5: [
    { id: 1, title: 'Chemistry Lesson 1', videoUrl: lesson1Chemistry, description: 'Description for Chemistry Lesson 1' },
    { id: 2, title: 'Chemistry Lesson 2', videoUrl: lesson2Chemistry, description: 'Description for Chemistry Lesson 2' },
    { id: 3, title: 'Chemistry Lesson 3', videoUrl: lesson3Chemistry, description: 'Description for Chemistry Lesson 3' },
    { id: 4, title: 'Chemistry Lesson 4', videoUrl: lesson4Chemistry, description: 'Description for Chemistry Lesson 4' },
    { id: 5, title: 'Chemistry Lesson 5', videoUrl: lesson5Chemistry, description: 'Description for Chemistry Lesson 5' },
    { id: 6, title: 'Chemistry Lesson 6', videoUrl: lesson6Chemistry, description: 'Description for Chemistry Lesson 6' },
    { id: 7, title: 'Chemistry Lesson 7', videoUrl: lesson7Chemistry, description: 'Description for Chemistry Lesson 7' }
  ],

  6: [
    { id: 1, title: 'History Lesson 1', videoUrl:  lesson1History, description: 'Description for History Lesson 1' },
    { id: 2, title: 'History Lesson 2', videoUrl:  lesson2History, description: 'Description for History Lesson 2' },
    { id: 3, title: 'History Lesson 3', videoUrl:  lesson3History, description: 'Description for History Lesson 3' },
    { id: 4, title: 'History Lesson 4', videoUrl:  lesson4History, description: 'Description for History Lesson 4' },
    { id: 5, title: 'History Lesson 5', videoUrl:  lesson5History, description: 'Description for History Lesson 5' },
   
  ],
  7: [
    { id: 1, title: 'Biology Lesson 1', videoUrl: Lesson1Biology, description: 'Description for Biology Lesson 1' },
    { id: 2, title: 'Biology Lesson 2', videoUrl: Lesson2Biology, description: 'Description for Biology Lesson 2' },
    { id: 3, title: 'Biology Lesson 3', videoUrl: Lesson3Biology, description: 'Description for Biology Lesson 3' },
    { id: 4, title: 'Biology Lesson 4', videoUrl: Lesson4Biology, description: 'Description for Biology Lesson 4' },
    { id: 5, title: 'Biology Lesson 5', videoUrl: Lesson5Biology, description: 'Description for Biology Lesson 5' },
    { id: 6, title: 'Biology Lesson 6', videoUrl: Lesson6Biology, description: 'Description for Biology Lesson 6' },
    { id: 7, title: 'Biology Lesson 7', videoUrl: Lesson7Biology, description: 'Description for Biology Lesson 7' }
  ],

  8: [
    { id: 1, title: 'Geography lesson 1', videoUrl: Lesson1Geo, description: 'Description for Geography Lesson 1' },
    { id: 2, title: 'Geography lesson  2', videoUrl: Lesson2Geo, description: 'Description for Geography Lesson 2' },
    { id: 3, title: 'Geography lesson  3', videoUrl: Lesson3Geo, description: 'Description for Geography Lesson 3' },
    { id: 4, title: 'Geography lesson  4', videoUrl: Lesson4Geo, description: 'Description for Geography Lesson 4' }
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
            <source src={lesson.videoUrl} type="video/mp4" />
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