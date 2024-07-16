import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlayCircle, FaBars } from 'react-icons/fa'; // Assuming FaBars is the menu bar icon

const lessonsData = {
  1: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Arabic', videoUrl: 'https://www.youtube.com/watch?v=O7OXqETTZRU&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Arabic', videoUrl: 'https://www.youtube.com/watch?v=jdxA0EeAH3o&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Arabic', videoUrl: 'https://www.youtube.com/watch?v=9bXLAbZIhzQ&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Arabic', videoUrl: 'https://www.youtube.com/watch?v=F54keQjGsgs&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Arabic', videoUrl: 'https://www.youtube.com/watch?v=S0MZ6G5ODeY&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Arabic', videoUrl: 'https://www.youtube.com/watch?v=Gq9_KMST4CQ&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=6&pp=iAQB' },
  ],
  2: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 English', videoUrl: 'https://www.youtube.com/watch?v=H1d1M7-_yJw&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 English', videoUrl: 'https://www.youtube.com/watch?v=wxPQiTbqkTc&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 English', videoUrl: 'https://www.youtube.com/watch?v=fKljmGCLz0A&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 English', videoUrl: 'https://www.youtube.com/watch?v=uhFXhF9CJc8&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 English', videoUrl: 'https://www.youtube.com/watch?v=P9I8QDvPp7s&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 English', videoUrl: 'https://www.youtube.com/watch?v=e9tngbq2CLY&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=6&pp=iAQB' },
    
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 English', videoUrl: '' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 English', videoUrl: '' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9 English', videoUrl: '' },
  ],
  // Add similar structure for other courses if needed
};

const convertToEmbedURL = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  if (match && match[1]) {
    const videoId = match[1];
    const urlObj = new URL(url);
    const playlist = urlObj.searchParams.get('list');
    return playlist ? `https://www.youtube.com/embed/${videoId}?list=${playlist}` : `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
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
                <FaPlayCircle className="mr-2 text-blue ml-16" />
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
              'Lessons'
            )}
          </h2>

          {selectedLesson ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              {selectedLesson.videoUrl.includes('youtube.com') ? (
                <iframe
                  width="100%"
                  height="480"
                  src={convertToEmbedURL(selectedLesson.videoUrl)}
                  title={selectedLesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg mb-4"
                ></iframe>
              ) : (
                <video controls src={selectedLesson.videoUrl} className={`w-full rounded-lg mb-4 ${mobileSidebarVisible ? 'md:hidden' : ''}`}></video>
              )}
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
