import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAiAQBxkzPVYDFkOBVmYZ80pV2g4y3VxFY",
  authDomain: "sanrachna-a968f.firebaseapp.com",
  databaseURL: "https://sanrachna-a968f-default-rtdb.firebaseio.com",
  projectId: "sanrachna-a968f",
  storageBucket: "sanrachna-a968f.appspot.com",
  messagingSenderId: "1024577234871",
  appId: "1:1024577234871:web:4754959343675b6a3d2a32",
  measurementId: "G-2TBCTRG81J"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);