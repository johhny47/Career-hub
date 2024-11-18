// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1qAo3_0JbBJYoD04SZz4Y-do-AeARI5Q",
  authDomain: "assignment9-c180b.firebaseapp.com",
  projectId: "assignment9-c180b",
  storageBucket: "assignment9-c180b.firebasestorage.app",
  messagingSenderId: "1016165741021",
  appId: "1:1016165741021:web:d3274c7255ee8f846f4634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;