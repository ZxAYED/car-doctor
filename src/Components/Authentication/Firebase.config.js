// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAqpQg_Y2mHGM9d0pHop_-MokpEdoh-ly0",
  authDomain: "car-doctor-63564.firebaseapp.com",
  projectId: "car-doctor-63564",
  storageBucket: "car-doctor-63564.appspot.com",
  messagingSenderId: "34598441188",
  appId: "1:34598441188:web:131cd4b04feefbaf7e9cf1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;