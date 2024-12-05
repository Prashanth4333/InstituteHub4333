import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAOXrfRnHHCZSch7P3i--tqCrWNVhW61h8",
  authDomain: "institutehub-80a9e.firebaseapp.com",
  projectId: "institutehub-80a9e",
  storageBucket: "institutehub-80a9e.appspot.com",
  messagingSenderId: "1078475761185",
  appId: "1:1078475761185:web:9a52d60db5c1b0a7d0e560",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
