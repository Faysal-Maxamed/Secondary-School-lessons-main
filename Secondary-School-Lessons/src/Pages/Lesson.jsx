import React, { useState } from 'react';

const Lesson = () => {
  const [selectedLesson, setSelectedLesson] = useState('');

  const lessons = [
    { id: 1, title: 'Lesson 1', lecture: 1 },
    { id: 2, title: 'Lesson 2', lecture: 1 },
    { id: 3, title: 'Lesson 3', lecture: 1 },
    { id: 4, title: 'Lesson 4', lecture: 2 },
    { id: 5, title: 'Cashirki 1aad', lecture: 2 },
    { id: 6, title: 'Lesson 2.2', lecture: 2 },
    { id: 7, title: 'Lesson 2.3', lecture: 2 },
    { id: 8, title: 'Lesson 2.4', lecture: 2 },
    { id: 9, title: 'Cashirki murugada', lecture: 3 },
    { id: 10, title: 'Cashirki xyawanada', lecture: 3 },
    { id: 11, title: 'Cashirki Ani maa og', lecture: 4 },
    { id: 12, title: 'Cashirki soomaalida', lecture: 4 }
  ];

  const lectures = [1, 2, 3, 4, 5];

  const handleChange = (event) => {
    setSelectedLesson(event.target.value);
  };

  return (
    <div className="container mx-auto p-4 my-8 flex">
      {/* Sidebar */}
      <div className="w-1/4">
        <h2 className="text-3xl font-bold mb-4">Lessons</h2>
        <div className="space-y-4">
          {lectures.map((lecture) => (
            <div key={lecture}>
              <h3 className="text-xl font-semibold mb-2">Lecture {lecture}</h3>
              <select
                className="block w-full p-2 bg-blue-200 rounded-lg hover:bg-blue-300 hover:shadow-lg transition"
                value={selectedLesson}
                onChange={handleChange}
              >
                <option value="">Select a lesson</option>
                {lessons
                  .filter((lesson) => lesson.lecture === lecture)
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
            {/* Render additional details or content for the selected lesson */}
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-2">No lesson selected</h3>
            <p>Please select a lesson from the sidebar</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lesson;