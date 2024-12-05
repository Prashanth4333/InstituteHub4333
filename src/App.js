// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Pages.js/LandingPage';
import AboutUs from './Pages.js/AboutUs';
import Features from './Pages.js/Features';
import CoursesPrograms from './Pages.js/DropDown/CoursesPrograms';
import AchievementsAccreditations from './Pages.js/DropDown/AchievementsAccreditations';
import NewsEvents from './Pages.js/DropDown/NewsEvents';
import Signup from './Pages.js/Signup';
import Registration from './Pages.js/Registration';
import StaffRegistration from './Pages.js/StaffRegistration';
import Login from './Pages.js/Login';
import ForgotPassword from './Pages.js/ForgotPassword';
import StaffDashboard from './Pages.js/StaffDashboard';
import StudentDashboard from './Pages.js/StudentDashboard';
import { auth, db } from './firebaseConfig'; // Updated import for Firebase services
import { Toaster } from 'react-hot-toast'
import Cse from './Pages.js/DropDown/Cse';
import CSEDS from './Pages.js/DropDown/Cseds';
import CSEAIML from './Pages.js/DropDown/Cseaiml';
import CSECS from './Pages.js/DropDown/Csecs';
import CSEAIDS from './Pages.js/DropDown/Cseaids';

function App() {
  const [user, setUser] = useState(null);
  const [studentInfo, setStudentInfo] = useState(null);

  // Fetch student information from db based on UID
  const fetchStudentInfo = async (uid) => {
    try {
      const docRef = db.collection('students').doc(uid); // Accessing 'students' collection
      const doc = await docRef.get();
      if (doc.exists) {
        return doc.data(); // Return the student data if document exists
      } else {
        console.log('No such document!');
        return null;
      }
    } catch (error) {
      console.error('Error fetching student info:', error);
      return null; // Handle errors as needed
    }
  };

  // Firebase Auth state change listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user); // Set authenticated user
        const info = await fetchStudentInfo(user.uid); // Fetch student info from db
        setStudentInfo(info); // Set student info in state
      } else {
        setUser(null); // Clear user on logout
        setStudentInfo(null); // Clear student info on logout
      }
    });
    return () => unsubscribe(); // Cleanup Firebase listener
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/coursesprograms" element={<CoursesPrograms />} />
          <Route path="/achievements" element={<AchievementsAccreditations />} />
          <Route path="/news" element={<NewsEvents />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student-registration" element={<Registration />} />
          <Route path="/staff-registration" element={<StaffRegistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/StudentDashboard"
            element={<StudentDashboard user={user} studentInfo={studentInfo} />}
          />
          <Route path="/StaffDashboard" element={<StaffDashboard />} />
          <Route path="/departments/cse" element={<Cse />} />
          <Route path="/departments/cseds" element={<CSEDS />} />
          <Route path="/departments/cseaiml" element={<CSEAIML />} />
          <Route path="/departments/csecs" element={<CSECS />} />
          <Route path="/departments/cseaids" element={<CSEAIDS />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
