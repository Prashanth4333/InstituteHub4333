import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

const StaffRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    gender: '',
    maritalStatus: '',
    degree: '',
    workExperience: false,
    experienceYears: '',
    previousJob: '',
    userImage: null,
    signature: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = auth.currentUser?.uid;
      if (!userId) throw new Error('User not authenticated.');

      const userDoc = doc(db, 'users', userId);

      await setDoc(userDoc, {
        personalDetails: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          address: formData.address,
          gender: formData.gender,
          maritalStatus: formData.maritalStatus,
        },
        educationalDetails: {
          degree: formData.degree,
          workExperience: formData.workExperience,
          experienceYears: formData.workExperience ? formData.experienceYears : null,
          previousJob: formData.workExperience ? formData.previousJob : null,
        },
        verification: {
          userImage: null,
          signature: null,
        },
      });

      toast.success('Staff registration completed successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Staff Registration Error:', error.message); // Log detailed error
      toast.error('Failed to submit staff registration. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Staff Registration Form</h2>

        {/* Personal Details */}
        <fieldset className="mb-6">
          <legend className="font-semibold text-lg mb-2">Personal Details</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="p-3 border rounded-md"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="p-3 border rounded-md"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="p-3 border rounded-md"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              className="p-3 border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Address"
              className="p-3 border rounded-md col-span-1 md:col-span-2"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <select
              name="gender"
              className="p-3 border rounded-md"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <select
              name="maritalStatus"
              className="p-3 border rounded-md"
              value={formData.maritalStatus}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Marital Status
              </option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
          </div>
        </fieldset>

        {/* Educational Details */}
        <fieldset className="mb-6">
          <legend className="font-semibold text-lg mb-2">Educational Details</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="degree"
              className="p-3 border rounded-md"
              value={formData.degree}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Degree
              </option>
              <option value="BSE">BSE</option>
              <option value="BCOM">BCOM</option>
              <option value="BTECH">BTECH</option>
              <option value="MTECH">MTECH</option>
              <option value="PHD">PhD</option>
            </select>
            <div className="col-span-1 md:col-span-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="workExperience"
                  checked={formData.workExperience}
                  onChange={handleChange}
                />
                Do you have work experience?
              </label>
            </div>
            {formData.workExperience && (
              <>
                <input
                  type="number"
                  name="experienceYears"
                  placeholder="Years of Experience"
                  className="p-3 border rounded-md"
                  value={formData.experienceYears}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="previousJob"
                  placeholder="Previous Job"
                  className="p-3 border rounded-md"
                  value={formData.previousJob}
                  onChange={handleChange}
                />
              </>
            )}
          </div>
        </fieldset>

        {/* Verification */}
        <fieldset className="mb-6">
          <legend className="font-semibold text-lg mb-2">Verification</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-1">Upload Photo</label>
              <input
                type="file"
                name="userImage"
                onChange={handleFileChange}
                className="p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Upload Signature</label>
              <input
                type="file"
                name="signature"
                onChange={handleFileChange}
                className="p-2 border rounded-md"
              />
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StaffRegistration;
