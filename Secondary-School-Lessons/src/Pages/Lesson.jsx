// Lesson.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const lessonsData = {
  1: [
    { id: 1, title: 'Lesson 1', videoUrl: 'https://www.example.com/lesson1.mp4', description: 'Description for Lesson 1' },
    { id: 2, title: 'Lesson 2', videoUrl: 'https://www.example.com/lesson2.mp4', description: 'Description for Lesson 2' },
    { id: 3, title: 'Lesson 3', videoUrl: 'https://www.example.com/lesson3.mp4', description: 'Description for Lesson 3' }
  ],
  2: [
    { id: 1, title: 'Lesson A', videoUrl: 'https://www.example.com/lessonA.mp4', description: 'Description for Lesson A' },
    { id: 2, title: 'Lesson B', videoUrl: 'https://www.example.com/lessonB.mp4', description: 'Description for Lesson B' },
    { id: 3, title: 'Lesson C', videoUrl: 'https://www.example.com/lessonC.mp4', description: 'Description for Lesson C' }
  ]
  // Add more lessons as needed
};

const Lesson = () => {
  const { courseId, lessonId } = useParams();
  const lessons = lessonsData[courseId];
  const lesson = lessons.find(lesson => lesson.id === parseInt(lessonId));

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold mb-8">{`Course ${courseId} - ${lesson.title}`}</h2>
      <div className="space-y-4">
        <p className="mb-4">{lesson.description}</p>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
          {/* Replace with actual video player or placeholder */}
          <video controls className="w-full h-full object-cover">
            <source src={lesson.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
