import { createContext, useContext } from "react";

export const QuizContext = createContext({
  questionsArray: [],
  currentQuestionIndex: 0,
  currentQuestion: {},
  areOptionsClickable: true,
  hasAnswered: false,
  showStart: true,
  showRestart: false,
  score: 0,
  startQuiz: () => {},
  restartQuiz: () => {},
  displayQuestion: () => {},
  handleAnswer: () => {},
  handleNext: () => {},
});

export const QuizProvider = QuizContext.Provider;

export const useQuiz = () => {
  return useContext(QuizContext);
};
