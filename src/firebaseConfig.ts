import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCOvnxlfh-rXWh4VrBTouJ-BTFiMOE_3i4',
  authDomain: 'sha2a-a669e.firebaseapp.com',
  databaseURL: 'https://sha2a-a669e-default-rtdb.firebaseio.com',
  projectId: 'sha2a-a669e',
  storageBucket: 'sha2a-a669e.appspot.com',
  messagingSenderId: '347487545133',
  appId: '1:347487545133:web:59e2deb14a0eee0066d5a4',
  measurementId: 'G-Q2M4PE7GHY'
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
