import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUnIrnXBZHLkGN3DaayDMBHTIE6jtnuqI",
  authDomain: "portfoliodb-7d520.firebaseapp.com",
  projectId: "portfoliodb-7d520",
  storageBucket: "portfoliodb-7d520.appspot.com",
  messagingSenderId: "902897980224",
  appId: "1:902897980224:web:d48d227ece6fa3229b60a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

