import React, { useState, useEffect } from 'react';

const Profile = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    address: '',
    email: '',
    phone: '',
    district: '',
    school: '',
    class: '',
    avatar: null,
    isAdmin: false
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName,
        age: user.age,
        address: user.address,
        email: user.email,
        phone: user.phone,
        district: user.district,
        school: user.school,
        class: user.class,
        avatar: user.avatar,
        isAdmin: user.isAdmin || false
      });
    }
  }, [user]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        avatar: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-gray-600 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Profile</h2>
        <form className="space-y-6">
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
          </div>
          <div>
            <label className="block mb-2 font-bold text-white" htmlFor="fullName">Full Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          {!formData.isAdmin && (
            <>
              <div>
                <label className="block mb-2 font-bold text-white" htmlFor="age">Age</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-bold text-white" htmlFor="district">District</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-bold text-white" htmlFor="school">School</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-bold text-white" htmlFor="class">Class</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          <div>
            <label className="block mb-2 font-bold text-white" htmlFor="address">Address</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-bold text-white" htmlFor="email">Email</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-bold text-white" htmlFor="phone">Phone</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
