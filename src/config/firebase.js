import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyC2yZHrk2GU6CxPpKZNQoaWHluxcGlEGWI",
  authDomain: "codelab-website-e4c82.firebaseapp.com",
  projectId: "codelab-website-e4c82",
  storageBucket: "codelab-website-e4c82.appspot.com",
  messagingSenderId: "466941893432",
  appId: "1:466941893432:web:8098f684542eb6dfb8ffcd",
  measurementId: "${config.measurementId}",
  databaseURL: "https://codelab-website-e4c82.firebaseapp.com",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};




