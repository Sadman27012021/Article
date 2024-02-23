// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCCkELKHG33yGcgkprN0Jbv0MKzuEfYdLI',
	authDomain: 'articles-final.firebaseapp.com',
	projectId: 'articles-final',
	storageBucket: 'articles-final.appspot.com',
	messagingSenderId: '730149078968',
	appId: '1:730149078968:web:3145c27e5193482c83714d'
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
	firebaseApp = initializeApp(firebaseConfig);
} else {
	firebaseApp = getApp();
	deleteApp(firebaseApp);
	firebaseApp = initializeApp(firebaseConfig);
}

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
