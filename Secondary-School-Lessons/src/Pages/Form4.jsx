import React from 'react';
import { Link } from 'react-router-dom';

const form2Data = [
  { id: 1, name: 'دورة اللغة العربية', description: 'ستتعلم في هذه الدورة جميع دروس اللغة العربية لجميع صفوف المرحلة الثانوية' },
  { id: 2, name: 'English Course', description: 'In this course you will learn all English lessons of all classes of the secondary school' },
  { id: 3, name: 'Math Course', description: 'Master Mathematics with lessons covering various topics.' },
  { id: 4, name: 'Physics Course', description: 'Learn the fundamentals of Physics for secondary school.' },
  { id: 5, name: 'Chemistry Course', description: 'Explore the principles of Chemistry through detailed lessons.' },
  { id: 6, name: 'History Course', description: 'Dive into the important events and figures in History.' },
  { id: 7, name: 'Biology Course', description: 'Understand the complexities of Biology with our comprehensive course.' },
 
];

const Form4 = () => {
  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Form 4 Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {form2Data.map((course) => (
          <Link
            key={course.id}
            to={`/form2/${course.id}/lesson/1`} // Directly link to the first lesson of the course
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{course.name}</h3>
              <p className="text-gray-700">{course.description}</p>
            </div>
            <div className="bg-green-800 text-white py-2 px-4 rounded-b-lg">
              <span className="text-sm">Start Course</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Form4;
