import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0O18gYiBakL5APE5Skctry9iNJKrm9mA",
  authDomain: "chat-f7d46.firebaseapp.com",
  projectId: "chat-f7d46",
  storageBucket: "chat-f7d46.appspot.com",
  messagingSenderId: "510990826985",
  appId: "1:510990826985:web:6caa8c22f56e47d547df78",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
