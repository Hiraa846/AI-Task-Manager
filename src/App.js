import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import FilterBar from "./components/FilterBar";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";

const STORAGE_KEY = "modern_todos_v1";

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function loadFromStorage() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export default function App() {
  const [todos, setTodos] = useState(loadFromStorage);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    const t = text.trim();
    if (!t) return;
    setTodos((prev) => [
      { id: genId(), text: t, done: false, created: Date.now() },
      ...prev,
    ]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function clearDone() {
    setTodos((prev) => prev.filter((todo) => !todo.done));
  }

  const visible =
    filter === "all"
      ? todos
      : filter === "done"
      ? todos.filter((t) => t.done)
      : todos.filter((t) => !t.done);

  const doneCount = todos.filter((t) => t.done).length;
  const activeCount = todos.filter((t) => !t.done).length;

  return (
    <div className="app">
      <Header total={todos.length} done={doneCount} />
      <AddTask onAdd={addTodo} />
      <FilterBar current={filter} onChange={setFilter} />
      <TodoList
        todos={visible}
        filter={filter}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      {todos.length > 0 && (
        <Footer activeCount={activeCount} onClearDone={clearDone} hasDone={doneCount > 0} />
      )}
    </div>
  );
}
