import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const addTask = (text) => {
    // Empty ya spaces-only task prevent karna
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([newTask, ...todos]);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <div className="todo-container">
        <h1>Todo App</h1>

        <TodoForm addTask={addTask} />

        {todos.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          <TodoList
            todos={todos}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        )}
      </div>
    </div>
  );
}

export default App;