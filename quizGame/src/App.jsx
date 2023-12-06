import { useEffect, useState } from "react";
import { QuizProvider } from "./contexts";
import QuizCard from "./components/QuizCard";
import Button from "./components/Button";

const questionsArray = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct_option: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct_option: "Mars",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correct_option: "Blue Whale",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1923", "1935", "1941"],
    correct_option: "1912",
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Mark Twain",
    ],
    correct_option: "William Shakespeare",
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [areOptionsClickable, setAreOptionsClickable] = useState(true);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [showRestart, setShowRestart] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setShowStart(false);
  };

  const displayQuestion = () => {
    setCurrentQuestion(questionsArray[currentQuestionIndex]);
  };

  const handleAnswer = (text) => {
    if (text === currentQuestion.correct_option) {
      setScore((prev) => prev + 1);
      console.log(`You answered correctly.`);
    } else if (text !== currentQuestion.correct_option) {
      console.log(
        `You answered incorrectly. ${text} is not the correct option. The correct option is ${currentQuestion.correct_option}`
      );
    }
    setHasAnswered(true);
    setAreOptionsClickable(false);
  };

  const handleNext = () => {
    if (hasAnswered && currentQuestionIndex < 4) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setHasAnswered(false);
      setAreOptionsClickable(true);
    } else if (currentQuestionIndex === 4) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowRestart(true);
    }
  };

  const restartQuiz = () => {
    setShowRestart(false);
    setShowStart(true);
    setCurrentQuestionIndex(0);
    setCurrentQuestion({});
    setHasAnswered(false);
    setAreOptionsClickable(true);
    setScore(0);
  };

  useEffect(() => {
    displayQuestion();
  }, [handleNext]);

  return (
    <QuizProvider
      value={{
        questionsArray,
        currentQuestionIndex,
        currentQuestion,
        areOptionsClickable,
        hasAnswered,
        showStart,
        showRestart,
        score,
        startQuiz,
        restartQuiz,
        displayQuestion,
        handleAnswer,
        handleNext,
      }}
    >
      <div className="min-h-screen bg-gray-600 flex flex-col items-center justify-center">
        {showStart && (
          <div className="p-4 bg-white rounded flex flex-col items-center gap-2">
            <h2 className="text-2xl font-bold">
              Click <span className="text-blue-500">Start Quiz</span> to start
              the game.
            </h2>
            <Button handleClick={startQuiz} title={"Start Quiz"} />
          </div>
        )}
        {showRestart && currentQuestionIndex > 4 && (
          <div className="p-4 bg-white rounded flex flex-col items-center gap-2">
            <h2 className="text-2xl font-bold">
              You answered{" "}
              <span className="text-blue-500">
                {`${score} ${score > 1 ? "Questions" : "Question"}`}
              </span>{" "}
              Correctly.
            </h2>
            <Button handleClick={restartQuiz} title={"Restart Quiz"} />
          </div>
        )}
        {!showStart && currentQuestionIndex < 5 && <QuizCard />}
      </div>
    </QuizProvider>
  );
}

export default App;
