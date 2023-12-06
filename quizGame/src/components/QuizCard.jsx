import Button from "./Button";
import QuizOptions from "./QuizOptions";
import { useQuiz } from "../contexts";

const QuizCard = () => {
  const {
    timer,
    currentQuestionIndex,
    currentQuestion,
    areOptionsClickable,
    handleAnswer,
    handleNext,
  } = useQuiz();
  return (
    <div className="flex flex-col p-8 bg-white rounded w-[600px] text-lg">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Interactive Quiz Game</h2>
        <h2 className="font-bold">
          Question {currentQuestionIndex + 1}{" "}
          <span className="font-normal">of 5</span>
        </h2>
      </div>
      <hr className="my-2" /> {/* will use a bar for the timer */}
      <h1 className="text-2xl font-bold">
        1. {currentQuestion.question && currentQuestion.question}
      </h1>
      <div className="font-semibold flex flex-col">
        {currentQuestion.options &&
          currentQuestion.options.map((item) => (
            <QuizOptions
              key={item}
              text={item}
              handleClick={() => areOptionsClickable && handleAnswer(item)}
            />
          ))}
      </div>
      <hr className="my-2" />
      <div className="flex justify-end">
        <Button
          title={currentQuestionIndex + 1 < 5 ? "Next Question" : "Finish Quiz"}
          handleClick={handleNext}
        />
      </div>
    </div>
  );
};

export default QuizCard;
