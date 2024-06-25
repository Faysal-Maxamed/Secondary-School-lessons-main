import React, { useState } from 'react';
import { FaVideo } from 'react-icons/fa';

const Lesson = () => {
  const [selectedLesson, setSelectedLesson] = useState('');

  const lessons = [
    { id: 1, title: 'Lesson 1', chapter: 1 },
    { id: 2, title: 'Lesson 2', chapter: 1 },
    { id: 3, title: 'Lesson 3', chapter: 1 },
    { id: 4, title: 'Lesson 4', chapter: 2 },
    { id: 5, title: 'Cashirki 1aad', chapter: 2 },
    { id: 6, title: 'Lesson 2.2', chapter: 2 },
    { id: 7, title: 'Lesson 2.3', chapter: 2 },
    { id: 8, title: 'Lesson 2.4', chapter: 2 },
    { id: 9, title: 'Cashirki murugada', chapter: 3 },
    { id: 10, title: 'Cashirki xyawanada', chapter: 3 },
    { id: 11, title: 'Cashirki Ani maa og', chapter: 4 },
    { id: 12, title: 'Cashirki soomaalida', chapter: 4 }
  ];

  const chapters = [1, 2, 3, 4, 5];

  const handleChange = (event) => {
    setSelectedLesson(event.target.value);
  };

  return (
    <div className="container mx-auto p-4 my-8 flex  ">
      {/* Sidebar */}
      <div className="w-1/4 bg-slate-100  ">
        <h2 className="text-3xl font-bold mb-4  ml-24 mt-4">Lessons</h2>
        <div className="space-y-4  ">
          {chapters.map((chapter) => (
            <div key={chapter}>
              <h3 className="text-xl font-semibold mb-2">Chapter {chapter}</h3>
              <select
                className="block w-full p-2 bg-blue-200 rounded-lg hover:bg-blue-300 hover:shadow-lg transition "
                value={selectedLesson}
                onChange={handleChange}
              >
                <option value="">Select a lesson</option>
                {lessons
                  .filter((lesson) => lesson.chapter === chapter)
                  .map((lesson) => (
                    <option key={lesson.id} value={lesson.id}>
                      {lesson.title}
                    </option>
                  ))}
              </select>
            </div>
          ))}
        </div>
      </div>
      {/* Main content */}
      <div className="w-3/4 pl-4">
        {selectedLesson ? (
          <div>
            <h3 className="text-xl font-semibold mb-2">Selected Lesson: {selectedLesson}</h3>
            <div className="flex items-center space-x-4">
            <div className="w-1/2">
  <div className="relative">
    <video controls className="w-full">
      <source src="" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500">
      <FaVideo className="w-8 h-8" />
    </div>
  </div>
</div>
              <div className="w-1/2 mt-64">
                {/* Additional details or content for the selected lesson */}
                <p>Additional details or content for the selected lesson can be added here.</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold  mt-32 ml-52">No lesson selected</h3>
            <p className='ml-'>Please select a lesson from the sidebar</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lesson;