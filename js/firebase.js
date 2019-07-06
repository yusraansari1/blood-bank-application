var firebaseConfig = {
    apiKey: "AIzaSyDGr0njUQ1AYrXYeOj4xSz7dBS06ERZrCg",
    authDomain: "blood-bank-app-de0e4.firebaseapp.com",
    databaseURL: "https://blood-bank-app-de0e4.firebaseio.com",
    projectId: "blood-bank-app-de0e4",
    storageBucket: "blood-bank-app-de0e4.appspot.com",
    messagingSenderId: "1084714040544",
    appId: "1:1084714040544:web:dad5dc1f8a624ec7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db=firebase.firestore()