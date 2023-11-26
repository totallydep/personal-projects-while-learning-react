import { useState, useEffect } from "react";

const useQuotes = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  const fetchNewQuote = async () => {
    try {
      const response = await fetch("https://stoic-quotes.com/api/quote");
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching new quote:", error);
    }
  };

  // Initially fetch a quote when the component mounts
  useEffect(() => {
    fetchNewQuote();
  }, []);

  // Return the current quote and the function to fetch a new quote
  return { ...quote, fetchNewQuote };
};

export default useQuotes;
