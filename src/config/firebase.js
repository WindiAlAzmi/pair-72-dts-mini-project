import { initializeApp } from "firebase/app";
import { getAuth,  GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBl0whWhDiW35qMUTivynZmnxi3xL54DGA",
  authDomain: "react-dts.firebaseapp.com",
  projectId: "react-dts",
  storageBucket: "react-dts.appspot.com",
  messagingSenderId: "697422003752",
  appId: "1:697422003752:web:61230ead5139af3002ff1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export { auth };