import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCTMoLYfd9C9255LnKauzm1tUBuOQIqwfw",
  authDomain: "redux-help-queue-10c58.firebaseapp.com",
  projectId: "redux-help-queue-10c58",
  storageBucket: "redux-help-queue-10c58.appspot.com",
  messagingSenderId: "935435377180",
  appId: "1:935435377180:web:52c37e77c33f3d9ea75dd9",
  measurementId: "G-XNVS2Y78DT"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;