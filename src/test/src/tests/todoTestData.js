// Sample Todo Test Data

export const todoTestData = {
  
  // Valid Tasks
  validTasks: [
    "Buy groceries",
    "Complete React assignment",
    "Read 10 pages of a book",
    "Go to gym",
    "Prepare presentation slides",
  ],

  // Empty / Invalid Tasks
  invalidTasks: [
    "",
    " ",
    "     ",
    "\n",
    "\t",
  ],

  // Long Tasks
  longTasks: [
    "A".repeat(100),
    "Complete the full React Todo Application with local storage support, responsive UI, unit testing, component structure, and proper error handling before tomorrow evening.",
    "This is a very long todo task designed to test how the application handles extremely large text inputs without crashing or breaking the layout of the user interface.",
  ],

  // Completed Tasks
  completedTasks: [
    {
      id: 1,
      text: "Finish homework",
      completed: true,
    },
    {
      id: 2,
      text: "Clean room",
      completed: true,
    },
  ],

  // Active Tasks
  activeTasks: [
    {
      id: 3,
      text: "Study Jest testing",
      completed: false,
    },
    {
      id: 4,
      text: "Practice React Hooks",
      completed: false,
    },
  ],

  // Mixed Todo List
  mixedTodos: [
    {
      id: 1,
      text: "Buy milk",
      completed: false,
    },
    {
      id: 2,
      text: "Learn React",
      completed: true,
    },
    {
      id: 3,
      text: "Write unit tests",
      completed: false,
    },
  ],
};