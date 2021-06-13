import firebase from 'firebase'

 var firebaseConfig = {
    apiKey: "AIzaSyB00-bT9PSPiD5gLoQPBGJgqBoyS10e7RA",
    authDomain: "student-attendance-1645e.firebaseapp.com",
    databaseURL: "https://student-attendance-1645e-default-rtdb.firebaseio.com",
    projectId: "student-attendance-1645e",
    storageBucket: "student-attendance-1645e.appspot.com",
    messagingSenderId: "433908203349",
    appId: "1:433908203349:web:94933093d2eaeff6fef9dc"
  };
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

export default firebase.database();