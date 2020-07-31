import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCe5Id65pdjWBF6RpBKnfCEIJvel8PSsIE",
    authDomain: "blog-app-react-18d0c.firebaseapp.com",
    databaseURL: "https://blog-app-react-18d0c.firebaseio.com",
    projectId: "blog-app-react-18d0c",
    storageBucket: "blog-app-react-18d0c.appspot.com",
    messagingSenderId: "818783138184",
    appId: "1:818783138184:web:8694cfda9791a54c554a3d"
  
})

const db = firebaseApp.firestore()
const storage = firebase.storage()

export { db, storage }