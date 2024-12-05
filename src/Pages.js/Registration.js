import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    fatherName: '',
    motherName: '',
    fatherPhone: '',
    motherPhone: '',
    occupation: '',
    gender: '',
    address: '',
    email: '',
    tenthHallTicket: '',
    tenthGrade: '',
    twelfthHallTicket: '',
    twelfthGrade: '',
    emcetRank: '',
    collegeName: '',
    rollNo: '',
    branch: '',
    year: '',
    photo: null,
    signature: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Form submitted. Validating user authentication...');
      const userId = auth.currentUser?.uid;
      if (!userId) throw new Error('User not authenticated.');

      const userDoc = doc(db, 'users', userId);
      console.log('User authenticated. User ID:', userId);

      // Upload photo and signature if files are provided
      const photoURL = formData.photo ? await uploadFile(formData.photo, 'photos') : null;
      const signatureURL = formData.signature ? await uploadFile(formData.signature, 'signatures') : null;

      console.log('Photo URL:', photoURL);
      console.log('Signature URL:', signatureURL);

      // Saving data to Firestore
      await setDoc(userDoc, {
        personalDetails: {
          fullName: formData.fullName,
          phone: formData.phone,
          fatherName: formData.fatherName,
          motherName: formData.motherName,
          fatherPhone: formData.fatherPhone,
          motherPhone: formData.motherPhone,
          occupation: formData.occupation,
          gender: formData.gender,
          address: formData.address,
          email: formData.email,
        },
        educationalDetails: {
          tenthHallTicket: formData.tenthHallTicket,
          tenthGrade: formData.tenthGrade,
          twelfthHallTicket: formData.twelfthHallTicket,
          twelfthGrade: formData.twelfthGrade,
          emcetRank: formData.emcetRank,
          collegeDetails: {
            collegeName: formData.collegeName,
            rollNo: formData.rollNo,
            branch: formData.branch,
            year: formData.year,
          },
        },
        photo: photoURL,
        signature: signatureURL,
      });

      console.log('Data saved to Firestore successfully!');
      toast.success('Registration completed successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Failed to submit registration. Please try again.');
    }
  };

  // Function to handle file uploads to Firebase Storage
  const uploadFile = async (file, folder) => {
    const storageRef = ref(storage, `${folder}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done for file: ${file.name}`);
        },
        (error) => {
          console.error('Error during file upload:', error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log(`File uploaded successfully. URL: ${downloadURL}`);
              resolve(downloadURL);
            })
            .catch((error) => {
              console.error('Error getting download URL:', error);
              reject(error);
            });
        }
      );
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Registration Form</h2>

        {/* Personal Details */}
        <fieldset className="mb-6">
          <legend className="font-semibold text-lg mb-2">Personal Details</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="p-3 border rounded-md"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="p-3 border rounded-md"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="fatherName"
              placeholder="Father's Name"
              className="p-3 border rounded-md"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="motherName"
              placeholder="Mother's Name"
              className="p-3 border rounded-md"
              value={formData.motherName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="fatherPhone"
              placeholder="Father's Phone"
              className="p-3 border rounded-md"
              value={formData.fatherPhone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="motherPhone"
              placeholder="Mother's Phone"
              className="p-3 border rounded-md"
              value={formData.motherPhone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              className="p-3 border rounded-md"
              value={formData.occupation}
              onChange={handleChange}
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
            <textarea
              name="address"
              placeholder="Address"
              className="p-3 border rounded-md col-span-1 md:col-span-2"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </fieldset>

        {/* Educational Details */}
        <fieldset className="mb-6">
          <legend className="font-semibold text-lg mb-2">Educational Details</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="tenthHallTicket"
              placeholder="10th Hall Ticket Number"
              className="p-3 border rounded-md"
              value={formData.tenthHallTicket}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="tenthGrade"
              placeholder="10th Grade"
              className="p-3 border rounded-md"
              value={formData.tenthGrade}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="twelfthHallTicket"
              placeholder="12th Hall Ticket Number"
              className="p-3 border rounded-md"
              value={formData.twelfthHallTicket}
              onChange={handleChange}
            />
            <input
              type="text"
              name="twelfthGrade"
              placeholder="12th Grade"
              className="p-3 border rounded-md"
              value={formData.twelfthGrade}
              onChange={handleChange}
            />
            <input
              type="text"
              name="emcetRank"
              placeholder="EMCET Rank"
              className="p-3 border rounded-md"
              value={formData.emcetRank}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* College Details */}
        <fieldset className="mb-6">
          <legend className="font-semibold text-lg mb-2">College Details</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="collegeName"
              placeholder="College Name"
              className="p-3 border rounded-md"
              value={formData.collegeName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="rollNo"
              placeholder="Roll Number"
              className="p-3 border rounded-md"
              value={formData.rollNo}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="branch"
              placeholder="Branch"
              className="p-3 border rounded-md"
              value={formData.branch}
              onChange={handleChange}
              required
            />
            <select
              name="year"
              className="p-3 border rounded-md"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Year
              </option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>
        </fieldset>

        {/* File Upload */}
        <fieldset className="mb-6">
          <legend className="font-semibold text-lg mb-2">File Upload</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="file"
              name="photo"
              className="p-3 border rounded-md"
              onChange={handleFileChange}
            />
            <input
              type="file"
              name="signature"
              className="p-3 border rounded-md"
              onChange={handleFileChange}
            />
          </div>
        </fieldset>

        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
