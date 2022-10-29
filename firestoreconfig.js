import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBKvUOXsrVuiaUJQ4ISv76aQrtLAbxM0k",
    authDomain: "pocketmon-seal-db.firebaseapp.com",
    databaseURL: 'pocketmon-seal-db.firebaseio.com',
    projectId: "pocketmon-seal-db",
    storageBucket: "pocketmon-seal-db.appspot.com",
    messagingSenderId: "364665277608",
    appId: "1:364665277608:web:f08769b1269656685dc69d",
    measurementId: "G-6PSD65VJS0"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
