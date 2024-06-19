// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import sampleImage1 from '../images/nature 5.jpg'; // Ensure the image paths are correct
import sampleImage2 from '../images/this.jpg';
import sampleImage3 from '../images/nature4.jpg';
import sampleImage4 from '../images/nature 6.jpg';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(sampleImage1); // Initial image state
  const images = [sampleImage1, sampleImage2, sampleImage3, sampleImage4];
  const delay = 5000; // Change image every 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate images
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }, delay);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentImage, images]);

  return (
    <div className="container mx-auto my-8 p-4">
      <div className="flex flex-col md:flex-row md:justify-between mb-8">
        <div className="flex justify-around w-full mb-4 md:mb-0">
          <div className="w-1/3 md:w-2.5/5 pr-2">
            <img 
              src={currentImage} 
              alt="Learning" 
              className="rounded-lg border-2 border-gray-300 cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg"
            />
          </div>
          <div className="w-1/3 md:w-2.5/5 pl-2">
            <img 
              src={images[(images.indexOf(currentImage) + 1) % images.length]} 
              alt="Learning" 
              className="rounded-lg border-2 border-gray-300 cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to Our Learning Platform</h2>
        <p className="mb-4">Discover our wide range of courses designed to help you achieve your academic goals.</p>
        <p>Explore interactive lessons and join our community of learners today!</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex justify-around w-full">
          <div className="w-1/3 md:w-2.5/5 pr-2">
            <img 
              src={images[(images.indexOf(currentImage) + 2) % images.length]} 
              alt="Learning" 
              className="rounded-lg border-2 border-gray-300 cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg"
            />
          </div>
          <div className="w-1/3 md:w-2.5/5 pl-2">
            <img 
              src={images[(images.indexOf(currentImage) + 3) % images.length]} 
              alt="Learning" 
              className="rounded-lg border-2 border-gray-300 cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
