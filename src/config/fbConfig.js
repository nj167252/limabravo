import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC6Rloz4CzHObx7ShKXcueaMZAAX4q_RLU",
  authDomain: "limabravo-c6dd9.firebaseapp.com",
  databaseURL: "https://limabravo-c6dd9.firebaseio.com",
  projectId: "limabravo-c6dd9",
  storageBucket: "limabravo-c6dd9.appspot.com",
  messagingSenderId: "852732799170"
};

firebase.initializeApp(config);

firebase.firestore();

export default firebase;