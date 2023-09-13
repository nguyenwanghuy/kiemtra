import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
const Home = () => {
  const storageItem = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(storageItem ?? []);
  const handleCheckTodo = (todo) => {
    const a = todos.map((item)=> item.id === todo.id ? {...item, isActive:!item.isActive}: item);
   
    setTodos(a)
  }
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 16777215).toString(16),
      isActive: false,
      title: todo
    }
    setTodos([...todos,newTodo]);
  };
 
  // Saving in LocalStorage
const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
useEffect(() => {
  saveLocalTodos();
}, [todos]);
   
  return (
    <div className="App">
      <div className="container">
        <TodoList todos= {todos} handleCheckTodo= {handleCheckTodo} />
        <Form addTodo={addTodo}/>
      </div>
      <Footer />
    </div>
  );
};
