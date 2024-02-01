import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyASoGb1NfarxZEwUPq2pOE2OQCMtTRNXR8",
  authDomain: "crud-ops-3b757.firebaseapp.com",
  projectId: "crud-ops-3b757",
  storageBucket: "crud-ops-3b757.appspot.com",
  messagingSenderId: "1038319746735",
  appId: "1:1038319746735:web:94d9919da75b3b25855e5a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
