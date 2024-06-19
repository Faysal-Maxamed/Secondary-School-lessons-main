import React from 'react';
import { Link } from 'react-router-dom';

const coursesData = [
  { id: 1, name: 'Course 1', description: 'Description for course 1' },
  { id: 2, name: 'Course 2', description: 'Description for course 2' },
];

const Courses = () => {
  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold mb-8">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coursesData.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="p-4 bg-blue-200 rounded-lg hover:bg-blue-300 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2">{course.name}</h3>
            <p>{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
