import { initializeApp, getApps } from 'firebase/app';

let firebaseConfig = {
    apiKey: "AIzaSyCejvPBRgWL0rNHHtd5pvLFKBOBgtzbXfY",
    authDomain: "localizer-87f8c.firebaseapp.com",
    projectId: "localizer-87f8c",
    storageBucket: "localizer-87f8c.appspot.com",
    messagingSenderId: "385518754032",
    appId: "1:385518754032:web:f1613c91f18bb21a884a35",
    measurementId: "G-28X7S9Z7SP"
};

// Initialize Firebase

let firebase = null;

if (!getApps().length) {
    firebase = initializeApp(firebaseConfig);
}

export default firebase;