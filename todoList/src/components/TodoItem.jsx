import { useState } from "react";
import { useTodo } from "../contexts";

const TodoItem = ({ todo }) => {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const { updateTodoItem, deleteTodoItem, toggleComplete } = useTodo();

  // handleEdit
  const handleEdit = () => {
    if (!todo.isCompleted) {
      setIsTodoEditable((prev) => !prev);
      if (isTodoEditable) {
        updateTodoItem(todo.id, todoMsg);
      }
    }
  };

  // handleDelete
  const handleDelete = () => {
    if (!isTodoEditable) {
      deleteTodoItem(todo.id);
    }
  };

  // handleComplete
  const handleComplete = () => {
    if (!isTodoEditable) {
      toggleComplete(todo.id);
    }
  };

  return (
    <div className="w-full mt-4 p-2 bg-gray-50 rounded flex justify-between border-b-4 border-r-4 border-black items-center">
      <input
        checked={todo.isCompleted}
        onChange={handleComplete}
        className={`w-5 h-5 ${
          !isTodoEditable ? " cursor-pointer " : " cursor-not-allowed "
        }`}
        type="checkbox"
      />
      <input
        className={`w-2/3 cursor-crosshair rounded focus:outline-none py-2 px-4 ${
          todo.isCompleted
            ? " bg-green-300 text-gray-700 line-through "
            : " bg-indigo-300 focus:bg-blue-200 "
        }`}
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        onClick={handleEdit}
        className={`py-2 px-4 text-white font-semibold rounded hover:bg-blue-950 ${
          todo.isCompleted
            ? " bg-gray-600 cursor-not-allowed	 "
            : " bg-blue-600 "
        }`}
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>
      <button
        onClick={handleDelete}
        className={`py-2 px-4  text-white font-semibold rounded  ${
          isTodoEditable
            ? " cursor-not-allowed bg-gray-600 "
            : " cursor-pointer bg-red-600 hover:bg-red-950 "
        }`}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
