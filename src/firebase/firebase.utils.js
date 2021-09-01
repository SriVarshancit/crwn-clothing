import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCTs2xoSPugfVyT6QUe_nNj3EzKQSOTkNc",
  authDomain: "crwn-db-7aa5d.firebaseapp.com",
  projectId: "crwn-db-7aa5d",
  storageBucket: "crwn-db-7aa5d.appspot.com",
  messagingSenderId: "925581124259",
  appId: "1:925581124259:web:4bbedab814e7f41e885516",
  measurementId: "G-FY2BJ6MXFY",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;