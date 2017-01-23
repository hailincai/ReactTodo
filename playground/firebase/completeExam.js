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

// only update first level of object. So nested object still will be overwritten
// you can use multiple path update or chain the child call to get childRef and use update
// firebaseRef.update({
//   isRunning: false
//   //"app/name": "Todo Application"
// });
//
// firebaseRef.child("app").update(
//   {
//     name: "Todo Application"
//   }
// );

firebaseRef.update({
  "app/name": "Todo Application",
  "user/name": "Dobby"
});

firebaseRef.child("app").update({
  name: "Todo Application"
});

firebaseRef.child("user").update({
  name: "Dobby"
});

// firebaseRef.child("app/name").remove();
firebaseRef.child("app").update({
  version: "2.0.0",
  name: null //remove the data if set to null
});

//get the data back
firebaseRef.once("value")
          .then((snapshot) => {
            console.log("Got entire database", snapshot.key, snapshot.val());
          })
          .catch((e) => {console.log("Unable to fetch value", e)});
firebaseRef.child("app").once("value")
          .then((snapshot) => {
            console.log("Got entire database", snapshot.key, snapshot.val());
          })
          .catch((e) => {console.log("Unable to fetch value", e)});

//something change, this function will be called
//will be called when this call back is set also
var logData = (snapshot) => {
  console.log("new value", snapshot.val());
};

firebaseRef.child("user").on("value", logData);
firebaseRef.child("user").update({"name": "Mike"}); //this will be log out because we listen on user
firebaseRef.child("app").update({"name": "Todo Application"}); //this will not log out because we not listen on app
////turn of database change event listener
firebaseRef.child("user").off("value", logData);
//this call will remove all listeners
//firebaseRef.off();

var notesRef = firebaseRef.child("notes");

notesRef.on("child_added", (snapshot) => {
  console.log("child added", snapshot.key, snapshot.val());
});

notesRef.on("child_changed", (snapshot) => {
  console.log("child changed", snapshot.key, snapshot.val());
});

notesRef.on("child_removed", (snapshot) => {
  console.log("child removed", snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push(); //create a new reference
newNoteRef.set({
  text: "Walk the dog"
});
//above lines can be changed to
// var newNoteRef = notesRef.push({
//   text: "Walk the dog!"
// });
console.log("Todo id", newNoteRef.key);
