import firebase from "firebase";

try{
  var config = {
    apiKey: "AIzaSyBMKq6W9b3Xf4muURfXuAXwzcOe8fX5guw",
    authDomain: "mead-todo-app-7c991.firebaseapp.com",
    databaseURL: "https://mead-todo-app-7c991.firebaseio.com",
    storageBucket: "mead-todo-app-7c991.appspot.com",
    messagingSenderId: "611788729973"
  };
  firebase.initializeApp(config);
}catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
