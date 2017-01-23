import firebase, {firebaseRef} from 'app/firebase/index';
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

     var todoRef = firebaseRef.child("todos").push(todo);
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
    var ref = "todos/" + id;
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
    return firebaseRef.child("todos").once("value")
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

export default {
  setSearchText,
  addTodo,
  startAddTodo,
  toggleShowCompleted,
  updateTodo,
  startToggleTodo,
  addTodos,
  startAddTodos
};
