import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission here
    setMessageSent(true);
  };

  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or inquiries, please fill out the form below, and we will get back to you as soon as possible.
        </p>
        {messageSent ? (
          <p className="text-green-500">Your message was sent successfully.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <label className="text-gray-700 font-bold" htmlFor="name">Name</label>
            </div>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <label className="text-gray-700 font-bold" htmlFor="email">Email</label>
            </div>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <label className="text-gray-700 font-bold" htmlFor="message">Message</label>
            </div>
            <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" required></textarea>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Send</button>
          </form>
        )}
      </div>
      <footer className="bg-gray-800 text-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Pages</h2>
              <ul>
                <li className="mb-2"><a href="/" className="hover:text-blue-500">Home</a></li>
                <li className="mb-2"><a href="/about" className="hover:text-blue-500">About</a></li>
                <li className="mb-2"><a href="/courses" className="hover:text-blue-500">Courses</a></li>
                <li className="mb-2"><a href="/contact" className="hover:text-blue-500">Contact Us</a></li>
                <li className="mb-2"><a href="/profile" className="hover:text-blue-500">Profile</a></li>
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" className="text-white hover:text-blue-500"><FaFacebook size={24} /></a>
                <a href="https://www.twitter.com" className="text-white hover:text-blue-500"><FaTwitter size={24} /></a>
                <a href="https://www.linkedin.com" className="text-white hover:text-blue-500"><FaLinkedin size={24} /></a>
                <a href="https://www.instagram.com" className="text-white hover:text-blue-500"><FaInstagram size={24} /></a>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h2>
              <form className="flex flex-col space-y-2">
                <input className="p-2 rounded border border-gray-300" type="email" placeholder="Your email address" required />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
