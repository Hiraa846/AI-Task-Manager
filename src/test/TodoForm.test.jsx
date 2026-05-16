import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "../components/TodoForm";

describe("TodoForm Component", () => {
  test("renders input and button", () => {
    render(<TodoForm addTask={jest.fn()} />);

    expect(screen.getByPlaceholderText(/enter a task/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  test("adds task on valid input", async () => {
    const user = userEvent.setup();
    const addTask = jest.fn();

    render(<TodoForm addTask={addTask} />);

    const input = screen.getByPlaceholderText(/enter a task/i);
    const button = screen.getByRole("button", { name: /add/i });

    await user.type(input, "Learn React");
    await user.click(button);

    expect(addTask).toHaveBeenCalledWith("Learn React");
  });

  test("clears input after submit", async () => {
    const user = userEvent.setup();

    render(<TodoForm addTask={jest.fn()} />);

    const input = screen.getByPlaceholderText(/enter a task/i);
    const button = screen.getByRole("button", { name: /add/i });

    await user.type(input, "New Task");
    await user.click(button);

    expect(input).toHaveValue("");
  });

  test("does not submit empty input", async () => {
    const user = userEvent.setup();
    const addTask = jest.fn();

    render(<TodoForm addTask={addTask} />);

    const button = screen.getByRole("button", { name: /add/i });

    await user.click(button);

    expect(addTask).not.toHaveBeenCalled();
  });

  test("does not submit spaces only", async () => {
    const user = userEvent.setup();
    const addTask = jest.fn();

    render(<TodoForm addTask={addTask} />);

    const input = screen.getByPlaceholderText(/enter a task/i);
    const button = screen.getByRole("button", { name: /add/i });

    await user.type(input, "     ");
    await user.click(button);

    expect(addTask).not.toHaveBeenCalled();
  });
});