const Button = ({ title, handleClick, customCss = "" }) => {
  return (
    <button
      onClick={handleClick}
      className={`font-bold rounded-full text-[#CCCCCC] bg-green-900 hover:text-green-900 hover:bg-white ${
        " " + customCss
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
