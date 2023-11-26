import { createContext, useContext } from "react";

export const TodoContext = createContext({
  // array containing todo items (each is an object)
  todos: [
    {
      id: 43,
      todo: "something",
      isCompleted: false,
    },
  ],

  // methods
  addTodoItem: (todo) => {},
  deleteTodoItem: (id) => {},
  updateTodoItem: (id, todo) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
