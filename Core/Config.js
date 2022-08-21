import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBKvUOXsrVuiaUJQ4ISv76aQrtLAbxM0k",
    authDomain: "pocketmon-seal-db.firebaseapp.com",
    projectId: "pocketmon-seal-db",
    storageBucket: "pocketmon-seal-db.appspot.com",
    messagingSenderId: "364665277608",
    appId: "1:364665277608:web:f08769b1269656685dc69d",
    measurementId: "G-6PSD65VJS0"
};

export const app = initializeApp(firebaseConfig);
//MARK : Firestore Reference
export const db = getFirestore(app);