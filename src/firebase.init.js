// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	// apiKey: "AIzaSyC-yTIvKqiKWzKnk0zJeRd1gBelPjBFm9k",
	apiKey: process.env.REACT_APP_apiKey,
	// authDomain: "genius-car-service-2441f.firebaseapp.com",
	authDomain: process.env.REACT_APP_authDomain,
	// projectId: "genius-car-service-2441f",
	projectId: process.env.REACT_APP_projectId,
	// storageBucket: "genius-car-service-2441f.appspot.com",
	storageBucket: process.env.REACT_APP_storageBucket,
	// messagingSenderId: "438719684188",
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	// appId: "1:438719684188:web:9fb92fc87dc2c59dbd9099",
	appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
