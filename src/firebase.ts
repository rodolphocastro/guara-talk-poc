import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNgk0WHhndyvZsYcQGM01kCo5CoftlQlI",
    authDomain: "guara-talks-poc.firebaseapp.com",
    projectId: "guara-talks-poc",
    storageBucket: "guara-talks-poc.appspot.com",
    messagingSenderId: "337297834536",
    appId: "1:337297834536:web:aec2eff9d8e712a4652b1d"
};

firebase.initializeApp(firebaseConfig)