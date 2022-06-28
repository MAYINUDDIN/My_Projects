
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUJTASf5mWrDeDRyPh-VjPx9W1pLKZmwY",
    authDomain: "dashboard-a1f2f.firebaseapp.com",
    projectId: "dashboard-a1f2f",
    storageBucket: "dashboard-a1f2f.appspot.com",
    messagingSenderId: "667674246829",
    appId: "1:667674246829:web:ebb6328abbd88ce1939024",
    measurementId: "G-F91EB40CLG"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
