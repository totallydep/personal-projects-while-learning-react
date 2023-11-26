const Button = ({ title, handleClick, customStyles }) => {
  return (
    <button
      className={`py-1 px-5  font-semibold text-gray-900 rounded-3xl ${
        " " + customStyles + " "
      }`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
