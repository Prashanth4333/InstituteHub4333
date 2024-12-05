import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';


const StaffDashboard = () => {
  const [staffDetails, setStaffDetails] = useState(null)
  const navigate = useNavigate();

    // Fetch staff details from Firestore
    useEffect(() => {
      const fetchStaffDetails = async () => {
        const userId = auth.currentUser?.uid;
        if (!userId) {
          navigate('/login'); // Redirect to login if user is not authenticated
          return;
        }
  
        try {
          const docRef = doc(db, 'users', userId);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            setStaffDetails(docSnap.data());
          } else {
            console.error('No such document!');
          }
        } catch (error) {
          console.error('Error fetching staff details:', error);
        }
      };
  
      fetchStaffDetails();
    }, [navigate])

  // Logout function
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/login'); // Navigate to the login page after logout
      })
      .catch((error) => {
        console.error('Logout failed', error);
      });
  };

  if (!staffDetails) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <p className="text-gray-700 text-xl">Loading staff details...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="dashboard p-6 bg-gray-50 min-h-screen"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-white text-gray-800 p-6 rounded shadow-lg">
        <h1 className="text-4xl font-bold text-indigo-600">Staff Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
        >
          Logout
        </button>
      </div>

      {/* Staff Information */}
      <section className="mb-8 p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Staff Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
        <p><strong>Name:</strong> {staffDetails.personalDetails.firstName} {staffDetails.personalDetails.lastName}</p>
          <p><strong>Designation:</strong> Associate Professor</p>
          <p><strong>Department:</strong> Computer Science Engineering</p>
          <p><strong>Email:</strong> {staffDetails.personalDetails.email}</p>
          <p><strong>Phone:</strong> {staffDetails.personalDetails.phoneNumber}</p>
        </div>
      </section>

      {/* Upcoming Schedule */}
      <section className="mb-8 p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Upcoming Schedule</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Department meeting: 12th December 2024</li>
          <li>Final Exam Coordination: 20th December 2024</li>
          <li>Research Paper Submission Deadline: 25th December 2024</li>
        </ul>
      </section>

      {/* Assigned Classes */}
      <section className="mb-8 p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Assigned Classes</h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded shadow hover:shadow-md transition text-gray-700">
            <h3 className="font-bold">Class 1</h3>
            <p>Operating Systems</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow hover:shadow-md transition text-gray-700">
            <h3 className="font-bold">Class 2</h3>
            <p>Data Structures</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow hover:shadow-md transition text-gray-700">
            <h3 className="font-bold">Class 3</h3>
            <p>Artificial Intelligence</p>
          </div>
        </div>
      </section>

      {/* Faculty Insights */}
      <section className="mb-8 p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Faculty Insights</h2>
        <div className="text-gray-600">
          <p>Average Student Feedback: <span className="font-bold text-indigo-600">4.5/5</span></p>
          <p>Research Papers Published: <span className="font-bold text-indigo-600">15</span></p>
          <p>Workshops Conducted: <span className="font-bold text-indigo-600">8</span></p>
        </div>
      </section>

      {/* Notifications */}
      <section className="mb-8 p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Notifications</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>New research collaboration proposal received.</li>
          <li>Departmental audit scheduled for 10th January 2025.</li>
          <li>Workshop on AI in Education - Register by 5th January 2025.</li>
        </ul>
      </section>
    </motion.div>
  );
};

export default StaffDashboard;
