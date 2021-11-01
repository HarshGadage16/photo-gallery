import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCcvuZtDkCqTFQWH7h07-S0eTSVWTxSV2k",
    authDomain: "old-photo-gallery.firebaseapp.com",
    projectId: "old-photo-gallery",
    storageBucket: "old-photo-gallery.appspot.com",
    messagingSenderId: "45173991012",
    appId: "1:45173991012:web:9f92fa81415bbf37856171"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };