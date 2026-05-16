import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "../components/TodoItem";

describe("TodoItem Component", () => {
  const todo = {
    id: 1,
    text: "Test Task",
    completed: false,
  };

  test("renders todo text", () => {
    render(
      <TodoItem
        todo={todo}
        deleteTask={jest.fn()}
        toggleComplete={jest.fn()}
      />
    );

    expect(screen.getByText("Test Task"))
      .toBeInTheDocument();
  });

  test("calls deleteTask when delete button clicked", async () => {
    const user = userEvent.setup();

    const deleteTask = jest.fn();

    render(
      <TodoItem
        todo={todo}
        deleteTask={deleteTask}
        toggleComplete={jest.fn()}
      />
    );

    await user.click(
      screen.getByRole("button", { name: /delete/i })
    );

    expect(deleteTask).toHaveBeenCalledWith(1);
  });

  test("calls toggleComplete when todo clicked", async () => {
    const user = userEvent.setup();

    const toggleComplete = jest.fn();

    render(
      <TodoItem
        todo={todo}
        deleteTask={jest.fn()}
        toggleComplete={toggleComplete}
      />
    );

    await user.click(screen.getByText("Test Task"));

    expect(toggleComplete).toHaveBeenCalledWith(1);
  });

  test("shows completed class when task completed", () => {
    const completedTodo = {
      ...todo,
      completed: true,
    };

    render(
      <TodoItem
        todo={completedTodo}
        deleteTask={jest.fn()}
        toggleComplete={jest.fn()}
      />
    );

    const todoItem =
      screen.getByTestId("todo-item");

    expect(todoItem).toHaveClass("completed");
  });
});