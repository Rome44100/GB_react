import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAFz663rcnln358n2i_9F240rqAnsqBoWY",
    authDomain: "gb-react-chats.firebaseapp.com",
    databaseURL: "https://gb-react-chats-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-react-chats",
    storageBucket: "gb-react-chats.appspot.com",
    messagingSenderId: "472080510493",
    appId: "1:472080510493:web:787160aa34ab95278d60f4",
    measurementId: "G-BM3003BKTR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);