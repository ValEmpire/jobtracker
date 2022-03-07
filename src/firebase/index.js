import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCWnKHk8ZGk3EOwKLEretOc4pS5yPWu9ws",
  authDomain: "jobtracker-682cb.firebaseapp.com",
  databaseURL: "https://jobtracker-682cb-default-rtdb.firebaseio.com",
  projectId: "jobtracker-682cb",
  storageBucket: "jobtracker-682cb.appspot.com",
  messagingSenderId: "410526344761",
  appId: "1:410526344761:web:0845987aa54a051bc8cfe8",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const db = getDatabase(app);
