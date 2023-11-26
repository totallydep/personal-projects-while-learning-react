const WeatherInput = () => {
  return (
    <div className="">
      <form className="flex" onSubmit={(e) => e.preventDefault()}>
        <input
          className="py-1 px-4 rounded-l focus:outline-none focus:bg-green-100"
          type="text"
          value="london"
        />
        <button className="py-1 px-4 hover:bg-green-950 hover:text-white rounded-r font-bold text-gray-900 bg-green-500">
          Search
        </button>
      </form>
    </div>
  );
};

export default WeatherInput;
