import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className='text-blue-500'>Welcome Home of Edducation</h2>
          <h1 className="mt-1 text-4xl leading-10 font-extrabold text-blue-500 sm:text-5xl sm:leading-none lg:text-6xl">
            Best Online<span className="text-green-500"> Learning </span> Website
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-lg leading-7 text-gray-700">
            Explore a world of knowledge with our diverse selection of online courses. Our platform offers expertly designed courses that cater to various interests and skill levels. From foundational lessons to advanced topics, you can learn at your own pace and from the comfort of your home, enhancing your skills and broadening your horizons.
          </p>

          <div className="mt-8">
            <button className="px-6 py-3 bg-green-500 text-white text-base font-medium rounded-md hover:bg-green-700">
              Read More
            </button>

          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" className="text-blue-800 hover:text-gray-900 text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-red-400 hover:text-gray-900 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-red-700 hover:text-gray-900 text-2xl"><FaYoutube /></a>
            <a href="#" className="text-blue-500 hover:text-gray-900 text-2xl"><FaTwitter /></a>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              <button className="h-10 w-10 bg-green-500 text-white rounded-full">01</button>
              <button className="h-10 w-10 bg-gray-300 text-gray-700 rounded-full">02</button>
              <button className="h-10 w-10 bg-gray-300 text-gray-700 rounded-full">03</button>
            </div>
          </div>
        </div>


      </div>
      {/* Section 2 */}
      <div className="min-h-screen  flex items-center justify-center">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 ">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-8 ">Welcome to Our Course Platform</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2 text-blue-500">Course Form 1</h2>
              <p className="text-gray-700 mb-4">Brief description of the course, highlighting key features and what students will learn.</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">Learn More</button>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2 text-blue-500">Course Form 2</h2>
              <p className="text-gray-700 mb-4">Brief description of the course, highlighting key features and what students will learn.</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">Learn More</button>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2 text-blue-500">Course Form 3</h2>
              <p className="text-gray-700 mb-4">Brief description of the course, highlighting key features and what students will learn.</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">Learn More</button>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2 text-blue-500">Course Form 4</h2>
              <p className="text-gray-700 mb-4">Brief description of the course, highlighting key features and what students will learn.</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">Learn More</button>
            </div>
            {/* Add more course cards as needed */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
