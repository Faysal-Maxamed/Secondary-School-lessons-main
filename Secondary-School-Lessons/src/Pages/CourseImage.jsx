// CourseDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const lessonsData = {
  1: ['Lesson 1', 'Lesson 2', 'Lesson 3'],
  2: ['Lesson A', 'Lesson B', 'Lesson C'],
  // Add more lessons as needed
};

const CourseDetails = () => {
  const { courseId } = useParams();
  const lessons = lessonsData[courseId];

  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold mb-8">Course {courseId} Lessons</h2>
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <Link
            key={index}
            to={`/courses/${courseId}/lesson/${index + 1}`}
            className="block p-4 bg-yellow-200 rounded-lg hover:bg-yellow-300 hover:shadow-lg transition"
          >
            {lesson}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
