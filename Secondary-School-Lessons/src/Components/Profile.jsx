import React, { useState, useEffect } from 'react';

const Profile = ({ user }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    district: '',
    school: '',
    class: '',
    avatar: null
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        district: user.district,
        school: user.school,
        class: user.class,
        avatar: user.avatar
      });
    }
  }, [user]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        avatar: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  return (
    <div className="container mx-auto p-4 my-8">
      <div className="bg-yellow-200 p-8 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-8">Profile</h2>
        <div className="flex flex-col items-center">
          <div
            className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 hover:bg-gray-300 cursor-pointer"
            onClick={() => document.getElementById('fileInput').click()}
          >
            {formData.avatar ? (
              <img src={formData.avatar} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
            )}
            <input
              type="file"
              id="fileInput"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <h3 className="text-xl font-bold mt-4">{formData.name}</h3>
          <p className="text-gray-700 mt-2">{formData.email}</p>
          <p className="text-gray-700 mt-2">{formData.phone}</p>
          <p className="text-gray-700 mt-2">{formData.district}</p>
          <p className="text-gray-700 mt-2">{formData.school}</p>
          <p className="text-gray-700 mt-2">{formData.class}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
