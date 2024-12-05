import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const Login = () => {
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      console.log('Attempting login with:', formData); // Log email and password
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);

      console.log('Selected role:', role); // Log selected role
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      console.log('User document:', userDoc.data()); // Log user data

      if (userDoc.exists()) {
        console.log('User document retrieved:', userDoc.data()); // Log the user document
        const userRole = userDoc.data().Role;
        console.log('User role from Firestore:', userRole); // Log role fetched from Firestore

        if (userRole === role) {
          setErrorMessage('Role mismatch! Please select the correct role.');
          console.log('Role mismatch. Expected:', userRole, 'Selected:', role); // Log mismatch
          toast.error('Role mismatch! Please select the correct role.');
        } else {
          toast.success('Login successful!');
          console.log('Role matched. Redirecting to:', role === 'student' ? '/StudentDashboard' : '/StaffDashboard'); // Log redirection

          if (role === 'student') {
            navigate('/StudentDashboard');
          } else if (role === 'staff') {
            navigate('/StaffDashboard');
          }
        }
      } else {
        setErrorMessage('User not found.');
        console.error('User document does not exist in Firestore.'); // Log missing document
        toast.error('User not found.');
      }
    } catch (error) {
      setErrorMessage('Invalid credentials or account does not exist.');
      console.error('Error during login:', error); // Log any errors
      toast.error('Invalid credentials or account does not exist.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      <motion.div
        className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-600">Login</h2>
        <p className="text-center text-gray-500 mb-8">Welcome back! Please login to continue.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300"
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

          <div className="text-right">
            <Link to="/ForgotPassword" className="text-sm text-blue-600 hover:underline transition duration-200">
              Forgot Password?
            </Link>
          </div>

          <div>
            <p className="text-gray-700 font-semibold mb-2">You are a:</p>
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
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg"
          >
            Login
          </button>
          {errorMessage && <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>}
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
