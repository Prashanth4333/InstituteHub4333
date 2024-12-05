import React, { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Ensure firestore is imported
import './StudentDashboard.css'; // For custom styles

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const navigate = useNavigate();
  const user = auth.currentUser;

  // Fetch student data from Firestore
  useEffect(() => {
    if (user?.uid) {
      const fetchStudentData = async () => {
        try {
          const userDoc = doc(db, 'users', user.uid);
          const docSnap = await getDoc(userDoc);

          if (docSnap.exists()) {
            setStudentData(docSnap.data()); // Set the student data
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching student data:', error);
        }
      };

      fetchStudentData();
    }
  }, [user]);


  // Render a loading state while fetching data
  if (!studentData) {
    return <div>Loading...</div>;
  }

  const studentInfo = {
    name: user?.displayName || 'Student Name',
    rollNumber: '123456',
    course: 'B.Tech',
    branch: 'CSE',
    year: '4th',
    class: 'A',
    section: '1',
    phone: '+91 9876543210',
    campus: 'Main Campus',
    attendance: '85%',
    feeStatus: 'Paid',
    totalClassesToday: 6,
    classesAttendedToday: 5,
    timetable: [
      { time: '9:00 AM - 10:00 AM', subject: 'Math' },
      { time: '10:15 AM - 11:15 AM', subject: 'Science' },
      { time: '11:30 AM - 12:30 PM', subject: 'English' },
      { time: '1:30 PM - 2:30 PM', subject: 'History' },
      { time: '2:45 PM - 3:45 PM', subject: 'Physics' },
      { time: '4:00 PM - 5:00 PM', subject: 'Chemistry' },
    ],
  };

  const upcomingEvents = [
    { event: 'Project Submission', date: 'Dec 15, 2024' },
    { event: 'AI Seminar', date: 'Dec 18, 2024' },
  ];

  const achievements = [
    'Completed "React JS Mastery" Certification',
    'Won 2nd Prize in Hackathon 2024',
  ];

  const announcements = [
    'College will remain closed on Dec 20 due to Christmas preparations.',
    'Exam schedules are now available online.',
  ];

  const handleLogout = () => {
    signOut(auth)
      .then(() => navigate('/login'))
      .catch((error) => console.error('Logout failed', error));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="dashboard min-h-screen bg-gray-50 text-gray-800"
    >
      {/* Header */}
      <div className="bg-white shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 py-2 px-4 rounded text-white hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto p-6 space-y-6">
        {/* Personal Information */}
        <section className="p-6 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p><strong>Name:</strong> {studentData.personalDetails?.fullName}</p>
            <p><strong>Roll Number:</strong> {studentData.educationalDetails?.collegeDetails?.rollNo}</p>
            <p><strong>Course:</strong> {studentData.educationalDetails?.collegeDetails?.course}</p>
            <p><strong>Branch:</strong> {studentData.educationalDetails?.collegeDetails?.branch}</p>
            <p><strong>Year:</strong> {studentData.educationalDetails?.collegeDetails?.year}</p>
            <p><strong>Class:</strong> {studentInfo.class}</p>
            <p><strong>Section:</strong> {studentInfo.section}</p>
            <p><strong>Phone:</strong> {studentData.personalDetails?.phone}</p>
            <p><strong>Campus:</strong>{studentData.educationalDetails?.collegeDetails?.collegeName} </p>
          </div>
        </section>

        {/* Attendance and Fee */}
        <section className="p-6 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-100 text-center rounded shadow-md hover:shadow-lg">
              <h3 className="text-xl font-bold">Attendance</h3>
              <p className="text-2xl font-semibold mt-2">{studentInfo.attendance}</p>
            </div>
            <div className="p-4 bg-green-100 text-center rounded shadow-md hover:shadow-lg">
              <h3 className="text-xl font-bold">Fee Status</h3>
              <p className="text-2xl font-semibold mt-2">{studentInfo.feeStatus}</p>
            </div>
            <div className="p-4 bg-purple-100 text-center rounded shadow-md hover:shadow-lg">
              <h3 className="text-xl font-bold">Today’s Classes</h3>
              <p className="text-2xl font-semibold mt-2">
                {studentInfo.classesAttendedToday}/{studentInfo.totalClassesToday}
              </p>
            </div>
          </div>
        </section>

        {/* Timetable */}
        <section className="p-6 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Class Timetable</h2>
          <div className="space-y-4">
            {studentInfo.timetable.map((slot, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-gray-100 rounded shadow-md hover:shadow-lg"
              >
                <p><strong>{slot.time}</strong></p>
                <p>{slot.subject}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="p-6 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <ul className="space-y-2">
            {upcomingEvents.map((event, index) => (
              <li key={index} className="p-4 bg-blue-50 rounded shadow-md">
                <strong>{event.event}:</strong> {event.date}
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section className="p-6 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="p-4 bg-green-50 rounded shadow-md">
                {achievement}
              </li>
            ))}
          </ul>
        </section>

        {/* Announcements */}
        <section className="p-6 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
          <ul className="space-y-2">
            {announcements.map((announcement, index) => (
              <li key={index} className="p-4 bg-red-50 rounded shadow-md">
                {announcement}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default StudentDashboard;
