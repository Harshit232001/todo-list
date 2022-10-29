import { useState } from "react";
import Todoform from "./Todoform";
import Todos from "./Todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "learn Guitar", completed: false },
    { id: 2, title: "learn React", completed: true },
    { id: 3, title: "Haan bhai", completed: false },
  ]);
  const addTodo = (newTodo) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };
  const removetodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };
  const togglecompleted = (id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };
  return (
    <div className="container">
      <ToastContainer />
      <h1 className="main-title">Todo List</h1>
      <Todoform addTodo={addTodo} />
      <Todos
        todos={todos}
        togglecompleted={togglecompleted}
        removetodo={removetodo}
      />
    </div>
  );
}

export default App;
