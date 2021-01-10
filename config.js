import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD8pb84yMYnHMTrTUzgTpXTi7WaE0DOVwo",
  authDomain: "newsletter-2517e.firebaseapp.com",
  databaseURL: "https://newsletter-2517e-default-rtdb.firebaseio.com",
  projectId: "newsletter-2517e",
  storageBucket: "newsletter-2517e.appspot.com",
  messagingSenderId: "888066608609",
  appId: "1:888066608609:web:27a0385b827860453596a0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.database();