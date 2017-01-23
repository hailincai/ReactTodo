import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBMKq6W9b3Xf4muURfXuAXwzcOe8fX5guw",
  authDomain: "mead-todo-app-7c991.firebaseapp.com",
  databaseURL: "https://mead-todo-app-7c991.firebaseio.com",
  storageBucket: "mead-todo-app-7c991.appspot.com",
  messagingSenderId: "611788729973"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

//set method of any reference will wipe out the current data and then re-set it
// set and update all returns promise
firebaseRef.set({
  app: {
    name: "Todo App",
    version: "1.0.0"
  },
  isRunning: true,
  user: {
    name: "Hailin",
    age: 42
  }
});

// get ref for todos arr
// child added
var todosRef = firebaseRef.child("todos");
todosRef.on("child_added", (snapshot) => {
  console.log("New todo", snapshot.key, snapshot.val());
});

todosRef.push({
  text: "do homework"
});
todosRef.push({
  text:"something else"
});
