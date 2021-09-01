import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDgSGDbz_irbYGAFgc-M1Mrg1n7aX5haMg",
  authDomain: "handmade-market-2581a.firebaseapp.com",
  projectId: "handmade-market-2581a",
  storageBucket: "handmade-market-2581a.appspot.com",
  messagingSenderId: "1014512714996",
  appId: "1:1014512714996:web:58540333b46d9a02a58aa1",
  measurementId: "G-3S3G4T2DGT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
