import { useState } from "react";
import { useTodo } from "../contexts";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodoItem } = useTodo();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo && todo.length) {
      addTodoItem({ todo, isCompleted: false });
      setTodo("");
    } else {
      return;
    }
  };
  return (
    <form onClick={(e) => handleSubmit(e)} className="w-full">
      <input
        className="w-[85%] py-3 px-4 rounded-l focus:outline-none focus:bg-green-100"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="w-[15%] py-3 px-4 bg-green-600 hover:bg-green-950  font-semibold text-white rounded-r "
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
