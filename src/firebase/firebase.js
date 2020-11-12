import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDyzIM2q3mbeb-mWZqCTY7UdS0Dak3VWvY",
    authDomain: "shoppiebuzz-750fc.firebaseapp.com",
    databaseURL: "https://shoppiebuzz-750fc.firebaseio.com",
    projectId: "shoppiebuzz-750fc",
    storageBucket: "shoppiebuzz-750fc.appspot.com",
    messagingSenderId: "509981599644",
    appId: "1:509981599644:web:2ea61767866a83fe62ca59",
    measurementId: "G-TCLFQPRRZX"
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
