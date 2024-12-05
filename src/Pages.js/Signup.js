import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Signup = () => {
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Attempting to sign up with data:', formData, `Role: ${role}`);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('User successfully created with UID:', userCredential.user.uid);

      // Check if the document already exists to merge fields and prevent overwriting
      const userDocRef = doc(db, 'users', userCredential.user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        // If the document does not exist, create it with the role and other details
        const userDoc = {
          name: formData.name,
          email: formData.email,
          Role: role,
        };
        console.log('Saving user data to Firestore:', userDoc);
        await setDoc(userDocRef, userDoc);
        console.log('User data saved successfully to Firestore.');
      } else {
        // If the document exists, only merge the Role field, preserving other data
        console.log('User document already exists, merging role data.');
        await setDoc(userDocRef, { Role: role }, { merge: true });
      }

      toast.success('Account created successfully!');

      // Role-based redirection
      if (role === 'student') {
        console.log('Redirecting to /student-registration...');
        setTimeout(() => navigate('/student-registration'), 2000);
      } else if (role === 'staff') {
        console.log('Redirecting to /staff-registration...');
        setTimeout(() => navigate('/staff-registration'), 2000);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('Error creating account: ' + error.message);
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-600">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-sm font-semibold text-gray-700" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
              value={formData.name}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-sm font-semibold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-sm font-semibold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none transition-all duration-300"
              value={formData.password}
              onChange={handleChange}
            />
          </motion.div>

          <div className="text-center text-gray-700 mb-4">You are a:</div>
          <div className="flex justify-around">
            <motion.label
              className={`px-4 py-2 rounded-lg cursor-pointer ${role === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              whileTap={{ scale: 0.9 }}
              onClick={() => setRole('student')}
            >
              Student
            </motion.label>
            <motion.label
              className={`px-4 py-2 rounded-lg cursor-pointer ${role === 'staff' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              whileTap={{ scale: 0.9 }}
              onClick={() => setRole('staff')}
            >
              Staff
            </motion.label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg"
          >
            Sign Up
          </button>
          {errorMessage && <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Signup;
