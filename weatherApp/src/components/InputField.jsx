import React from "react";

const InputField = ({ city, setCity, handleSearch }) => {
  return (
    <form className="">
      <input
        type="text"
        id="city"
        className="py-1 px-2 w-2/3 bg-green-200 rounded-l focus:outline-none focus:bg-indigo-200"
        placeholder="e.g. Dubai"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={(e) => handleSearch(e)}
        className="py-1 px-3 w-1/3 bg-green-500 hover:bg-green-950 hover:text-white rounded-r"
      >
        Search
      </button>
    </form>
  );
};

export default InputField;
