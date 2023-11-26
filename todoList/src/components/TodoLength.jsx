import { useTodo } from "../contexts";

const TodoLength = () => {
  const { todos } = useTodo();

  const completedTasks = todos.filter((item) => item.isCompleted === false);

  return (
    <div className="py-2 px-4 bg-indigo-800/80 w-fit rounded text-white font-semibold">
      <h2>Remaining Tasks: {completedTasks.length} </h2>
    </div>
  );
};

export default TodoLength;
