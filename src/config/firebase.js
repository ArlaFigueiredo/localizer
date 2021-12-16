import {initializeApp, getApps} from 'firebase/app';

let firebaseConfig = {
    apiKey: "AIzaSyAJTSdGxINyM4hyK54UZL1ie-ZFO0mggUs",
    authDomain: "locadora-1d5c3.firebaseapp.com",
    projectId: "locadora-1d5c3",
    storageBucket: "locadora-1d5c3.appspot.com",
    messagingSenderId: "26755520436",
    appId: "1:26755520436:web:c687348b6f654e81e084e1",
    measurementId: "G-9JBRG3609V"
};

// Initialize Firebase

let firebase = null;

if(!getApps().length){
    firebase = initializeApp(firebaseConfig);
}

export default firebase;