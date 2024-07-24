import React, { useState } from 'react';
import teamMember1 from '../images/use1.jpg';
import starIcon from '../images/star.png';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="container mx-auto  mt-8">
      <div className="flex flex-col md:flex-row items-center p-4">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src={teamMember1} alt="About Us" className="rounded-lg border-2 border-gray-300" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4 text-green-500">About Us</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra tellus nec eleifend tempor.
            Vestibulum id magna vel urna posuere semper a vel augue. Nulla facilisi. Vestibulum dapibus sapien
            non ex fermentum, ut congue lorem dapibus.
          </p>
          <p>
            Duis interdum, orci eget varius efficitur, ipsum purus vestibulum nisi, nec maximus ipsum lorem ut
            lacus. Morbi a velit sed erat faucibus vehicula. Sed feugiat orci sit amet felis consequat, at
            eleifend ex faucibus.
          </p>
        </div>
      </div>
     
 

      <div className="flex justify-center mt-8 space-x-4">
        <button
          className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 ${activeSection === 'mission' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}
          onClick={() => handleSectionClick('mission')}
        >
          Mission
        </button>
        <button
          className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 ${activeSection === 'vision' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}
          onClick={() => handleSectionClick('vision')}
        >
          Vision
        </button>
      </div>

      <div className="mt-6">
        {activeSection === 'mission' && (
          <div className="text-center p-6 bg-gray-200 shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Mission</h3>
            <p className="text-lg text-gray-700">
              Our mission is to provide quality education and resources to students and educators.
            </p>
          </div>
        )}
        {activeSection === 'vision' && (
          <div className="text-center p-6 bg-gray-200 shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Vision</h3>
            <p className="text-lg text-gray-700">
              Our vision is to be a leading educational platform recognized for excellence and innovation.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
      </div>

      {/* start footer */}
      <footer className="bg-gray-100 text-black py-12 mt-8 rounded-tl-lg rounded-br-lg mb-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between">
          <div className="w-1/5 mb-4">
            <h2 className="text-xl font-bold mb-2">Shop Matcha</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Just the Matcha</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">The Trial Kit</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Wholesale & Bulk</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Teaware</a></li>
            </ul>
          </div>
          <div className="w-1/5 mb-4">
            <h2 className="text-xl font-bold mb-2">Learn</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Matcha Recipes</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Caffeine Content</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Health Benefits</a></li>
            </ul>
          </div>
          <div className="w-1/5 mb-4">
            <h2 className="text-xl font-bold mb-2">More from Tenzo</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Our Story</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Affiliate</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">FAQ's</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Sign In</a></li>
            </ul>
          </div>
          <div className="w-1/5 mb-4">
            <h2 className="text-xl font-bold mb-2">Let's Stay Connected</h2>
            <p className="mb-4">Enter your email to unlock 10% OFF.</p>
            <form className="flex flex-col space-y-2">
              <input className="p-2 rounded border border-gray-300" type="email" placeholder="Your Email" required />
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
            </form>
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">Follow us</h2>
              <div className="flex space-x-4">
                <a href="https://www.pinterest.com" className="text-green-600 hover:text-green-500"><FaWhatsapp size={24} /></a>
                <a href="https://www.facebook.com" className="text-blue-600  hover:text-green-500"><FaFacebook size={24} /></a>
                <a href="https://www.instagram.com" className="text-red-400  hover:text-green-500"><FaInstagram size={24} /></a>
                <a href="https://www.twitter.com" className="text-blue-400
                  hover:text-green-500"><FaTwitter size={24} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 text-center text-sm">
          <p className="mb-2">&copy; 2024 Edu Platform.co</p>
          <p>
            <a href="#" className="hover:text-green-500">Terms of Service</a> |
            <a href="#" className="hover:text-green-500"> Privacy Policy</a> |
            <a href="#" className="hover:text-green-500"> Refund Policy</a> |
            <a href="#" className="hover:text-green-500"> Accessibility Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;