function formatDate(ts) {
  const diff = (Date.now() - ts) / 1000;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return new Date(ts).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item${todo.done ? " todo-item--done" : ""}`}>
      <button
        className={`check-btn${todo.done ? " check-btn--checked" : ""}`}
        onClick={() => onToggle(todo.id)}
        aria-label={todo.done ? "Mark incomplete" : "Mark complete"}
      >
        {todo.done && <span className="check-btn__icon">✓</span>}
      </button>

      <span className="todo-text">{todo.text}</span>

      <span className="todo-date">{formatDate(todo.created)}</span>

      <button
        className="del-btn"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
      >
        🗑
      </button>
    </div>
  );
}
