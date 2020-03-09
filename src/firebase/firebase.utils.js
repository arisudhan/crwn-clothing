import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyA3faddh27AvHtrgU374oNAxgcCBPzkPhY",
  authDomain: "crwn-db-3e136.firebaseapp.com",
  databaseURL: "https://crwn-db-3e136.firebaseio.com",
  projectId: "crwn-db-3e136",
  storageBucket: "crwn-db-3e136.appspot.com",
  messagingSenderId: "802402561578",
  appId: "1:802402561578:web:0a1d954b82df1367ed5d53",
  measurementId: "G-JLGZE93W6S"
};

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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
