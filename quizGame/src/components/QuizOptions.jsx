import { useQuiz } from "../contexts";

const QuizOptions = ({ text, handleClick }) => {
  const { currentQuestion, hasAnswered } = useQuiz();
  const isCorrectAnswer =
    hasAnswered && text === currentQuestion.correct_option;
  const isIncorrectAnswer =
    hasAnswered && text !== currentQuestion.correct_option;

  const customCss = isCorrectAnswer
    ? "bg-green-300  border-green-500 cursor-not-allowed"
    : isIncorrectAnswer
    ? "bg-red-300  border-red-500 cursor-not-allowed"
    : "bg-blue-300 border-blue-500 hover:bg-yellow-300 hover:border-yellow-500";

  return (
    <button
      onClick={handleClick}
      className={`w-full text-left my-2 py-2 px-4 rounded border-2 ${
        " " + customCss
      }`}
    >
      {text}
    </button>
  );
};

export default QuizOptions;
