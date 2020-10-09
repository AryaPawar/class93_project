//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDa2bHgESFjjJIDd4bCpZYeueNCMvLuQbo",
    authDomain: "kwitter-333d6.firebaseapp.com",
    databaseURL: "https://kwitter-333d6.firebaseio.com",
    projectId: "kwitter-333d6",
    storageBucket: "kwitter-333d6.appspot.com",
    messagingSenderId: "442263743460",
    appId: "1:442263743460:web:98147f287e6a6bfcfcb5f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
