import React, { useState } from 'react';

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
        <p className="mb-4">If you have any questions or inquiries, please fill out the form below, and we will get back to you as soon as possible.</p>
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
    </div>
  );
};

export default ContactUs;