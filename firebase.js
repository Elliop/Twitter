// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1Yoru_M6U01cxC0zDAuvz6uZFgaeJe1s",
  authDomain: "twitter-b468d.firebaseapp.com",
  projectId: "twitter-b468d",
  storageBucket: "twitter-b468d.appspot.com",
  messagingSenderId: "569332512230",
  appId: "1:569332512230:web:41329d2473fa00afbb9227",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
