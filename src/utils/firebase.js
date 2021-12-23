import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFSsbvainrWxLTuzt8I4J8LgLQYopbADA",
  authDomain: "fire-contact-project-290ee.firebaseapp.com",
  databaseURL: "https://fire-contact-project-290ee-default-rtdb.firebaseio.com",
  projectId: "fire-contact-project-290ee",
  storageBucket: "fire-contact-project-290ee.appspot.com",
  messagingSenderId: "5600895656",
  appId: "1:5600895656:web:f2a3b0e670413d5308d89d",
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
