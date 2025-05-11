import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9Rkjr5YGEefovGG_sYOROfskbDxn9u5s",
  authDomain: "mylms-b1e0e.firebaseapp.com",
  projectId: "mylms-b1e0e",
  storageBucket: "mylms-b1e0e.firebasestorage.app",
  messagingSenderId: "285684757565",
  appId: "1:285684757565:web:178e0955900b2631206654",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
