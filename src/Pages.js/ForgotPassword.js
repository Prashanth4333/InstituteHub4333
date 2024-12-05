import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth'; // Import Firebase method
import { auth } from '../firebaseConfig'; // Ensure this is the correct path

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Firebase method to send reset email
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset link sent! Check your inbox.');
      setError('');
    } catch (err) {
      setError('Failed to send reset email. Please check your email address.');
      setMessage('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@mail.com"
              className="w-full p-3 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {message && <p className="text-green-500 mb-4">{message}</p>}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
