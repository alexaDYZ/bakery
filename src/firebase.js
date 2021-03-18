import firebase from 'firebase';

const firebaseConfig={
    //Fill in your firebase details here
    apiKey: "AIzaSyArCXdYNEe6iqqHjDED2yM-EBWzBeTwpD4",
    authDomain: "bt3103-bakery.firebaseapp.com",
    projectId: "bt3103-bakery",
    storageBucket: "bt3103-bakery.appspot.com",
    messagingSenderId: "552120291302",
    appId: "1:552120291302:web:71abe4cd57551b4a611027",
    measurementId: "G-Q48VXE5NYL",
    "hosting": {
        "public": "public",  // the only required attribute for Hosting
        "ignore": [
          "firebase.json",
          "**/.*",
          "**/node_modules/**"
        ]
      }
    
}


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;