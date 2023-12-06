import React from "react";
import { useQuiz } from "../contexts";

const Button = ({ title, handleClick, customCss = "" }) => {
  const { showStart, hasAnswered } = useQuiz();
  return (
    <button
      onClick={handleClick}
      className={`py-1 px-4 rounded text-white font-bold bg-blue-500 border-2 border-blue-950 hover:bg-blue-950 ${
        " " + customCss
      } ${!showStart && !hasAnswered && "cursor-not-allowed"}`}
    >
      {title}
    </button>
  );
};

export default Button;
