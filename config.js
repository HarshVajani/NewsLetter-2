import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCJnVJd8gD1lDO0vNRzF8yyro9V1RS3HeE",
    authDomain: "wireless-buzzer-app-4f5b3.firebaseapp.com",
    databaseURL: "https://wireless-buzzer-app-4f5b3-default-rtdb.firebaseio.com",
    projectId: "wireless-buzzer-app-4f5b3",
    storageBucket: "wireless-buzzer-app-4f5b3.appspot.com",
    messagingSenderId: "388836574847",
    appId: "1:388836574847:web:ff2a75e9e8d3f6d4d8a14a",
    measurementId: "G-7SY434ZGNL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();