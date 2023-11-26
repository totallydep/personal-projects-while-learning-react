import { useEffect, useState } from "react";
import uuid from "react-uuid"; /* use "uuid()" to create a new id everytime */
import { TodoContext, TodoProvider, useTodo } from "./contexts";
import { TodoForm, TodoItem, TodoLength } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  // addTodoItem
  const addTodoItem = (todo) => {
    setTodos((prev) => [...prev, { id: uuid(), ...todo }]);
  };

  // deleteTodoItem
  const deleteTodoItem = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // updateTodoItem
  const updateTodoItem = (id, todo) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, todo } : item))
    );
  };

  // toggleComplete
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  // on startup
  useState(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList && todoList.length) {
      setTodos(todoList);
    }
  }, []);

  // on every load
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  // App.jsx
  return (
    <TodoProvider
      value={{
        todos,
        addTodoItem,
        deleteTodoItem,
        updateTodoItem,
        toggleComplete,
      }}
    >
      <div className="min-h-screen bg-gray-900 flex flex-col items-center py-12">
        <h1 className="text-6xl text-white font-bold">TodoList</h1>
        <div className="bg-indigo-700 p-4 w-[650px] rounded mt-8">
          <TodoForm />
          <hr className="mt-4 border-white/20 w-[80%] mx-auto" />
          {/* Loop Through todos array */}
          <ul className="list-none">
            {todos.map((item) => (
              <li key={item.id}>
                <TodoItem key={item.id} todo={item} />
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-end">
            <TodoLength />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
