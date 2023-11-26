import { useCallback, useState } from "react";
import Button from "./components/Button";
import useQuotes from "./hooks/useQuotes";
import { FaArrowAltCircleRight, FaCopy } from "react-icons/fa";

const App = () => {
  const { text, author, fetchNewQuote } = useQuotes();
  const [isCopied, setIsCopied] = useState(false);

  const handleNext = useCallback(() => {
    fetchNewQuote();
    setIsCopied(false);
  }, [fetchNewQuote]);

  const copyToClipboard = useCallback(() => {
    const clipboardText = `${text} | Quote by ${author}`;
    window.navigator.clipboard.writeText(clipboardText);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 1000);
  }, [text, author]);

  const renderCopiedStatus = () => (
    <span className="text-green-900 text-xl font-semibold">Copied!</span>
  );

  return (
    <div className="min-h-screen bg-[#CCCCCC] flex flex-col p-12 justify-center items-center">
      <div className="">
        <h2 className="w-[30ch] text-center leading-relaxed font-semibold text-5xl">
          {`"${text}"`}
        </h2>
        <h3 className="text-right text-2xl my-4 font-bold">{"- " + author}</h3>

        <div className="flex justify-between mt-8 px-12 items-center">
          <Button
            customCss="text-2xl p-4"
            handleClick={copyToClipboard}
            title={<FaCopy />}
          />
          {isCopied && renderCopiedStatus()}
          <Button
            customCss="text-4xl p-2"
            handleClick={handleNext}
            title={<FaArrowAltCircleRight />}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
