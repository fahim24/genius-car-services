// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC-yTIvKqiKWzKnk0zJeRd1gBelPjBFm9k",
	authDomain: "genius-car-service-2441f.firebaseapp.com",
	projectId: "genius-car-service-2441f",
	storageBucket: "genius-car-service-2441f.appspot.com",
	messagingSenderId: "438719684188",
	appId: "1:438719684188:web:9fb92fc87dc2c59dbd9099",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
