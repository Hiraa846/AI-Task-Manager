import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTask, toggleComplete }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty">No tasks yet</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;