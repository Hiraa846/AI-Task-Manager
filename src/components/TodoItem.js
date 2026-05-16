function TodoItem({ todo, deleteTask, toggleComplete }) {
  return (
    <div
      data-testid="todo-item"
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      onClick={() => toggleComplete(todo.id)}
    >
      <div className="todo-text">
        {todo.text}
      </div>

      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;