import firebase, {githubProvider, firebaseRef} from 'app/firebase/index';
import moment from "moment";

export var setSearchText = (searchText) => {
  return {
    type: "SET_SEARCH_TEXT",
    searchText
  }
};

export var addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    todo
  }
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
     var todo = {text: text, completed: false,
       createdAt: moment().unix(),
       completedAt: null};

     var uid = getState().auth.uid;
     var todoRef = firebaseRef.child("users/" + uid +  "/todos").push(todo);
     return todoRef.then(() => {
       dispatch(addTodo({
         ...todo,
         id: todoRef.key
       }));
     });
  }
};

export var toggleShowCompleted = () => {
  return {
    type: "TOGGLE_SHOW_COMPLETED"
  }
};

export var updateTodo = (id, updates) => {
  return {
    type: "UPDATE_TODO",
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var ref = "users/" + uid + "/todos/" + id;
    var todoRef = firebaseRef.child(ref);
    var updates = {
      completed: completed,
      completedAt: (completed) ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    })
  }
};

export var addTodos = (todos) => {
  return {
    type: "ADD_TODOS",
    todos
  }
};

export var startAddTodos = () => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    return firebaseRef.child("users/" + uid + "/todos").once("value")
               .then((snapshot) => {
                  var todosObj = snapshot.val() || {};
                  var parsedTodos = [];
                  Object.keys(todosObj).forEach((id) => {
                     parsedTodos.push({
                      id: id,
                      ...todosObj[id]
                    });
                  });

                  dispatch(addTodos(parsedTodos));
               })
  }
};

export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider)
          .then((result) => {
            console.log("auth worked!", result);
          })
          .catch((error) => {
            console.log("auth failed!", error);
          });
  }
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut()
            .then(() => {
              console.log("Logout");
            });
  }
};

export var login = (uid) => {
  return {
    type: "LOGIN",
    uid
  }
};

export var logout = () => {
  return {
    type: "LOGOUT"
  }
};


export default {
  setSearchText,
  addTodo,
  startAddTodo,
  toggleShowCompleted,
  updateTodo,
  startToggleTodo,
  addTodos,
  startAddTodos,
  startLogin,
  startLogout,
  login,
  logout
};
