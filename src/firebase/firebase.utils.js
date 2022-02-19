import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAld46nVkSwV9EIeSh27gSsJgWnkoo4mmg",
    authDomain: "crown-db-a6564.firebaseapp.com",
    projectId: "crown-db-a6564",
    storageBucket: "crown-db-a6564.appspot.com",
    messagingSenderId: "837344423552",
    appId: "1:837344423552:web:f3b2e542399712ce610065",
    measurementId: "G-WESJ6VYTPP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);// using string interpolation to get authenticated user's id   
    const snapShot = await userRef.get(); // getting snapshot of userref.

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //access to google auth from authentication library of google
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//documentRef returns a documentSnapshot object.
//collectionRef returns a querySnapshop object.