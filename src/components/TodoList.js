import TodoItem from "./TodoItem";

const EMPTY_MESSAGES = {
  all: "Nothing here yet — add your first task!",
  active: "All caught up! 🎉",
  done: "No completed tasks yet.",
};

export default function TodoList({ todos, filter, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="empty">
        <span className="empty__icon">📋</span>
        <p>{EMPTY_MESSAGES[filter]}</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
