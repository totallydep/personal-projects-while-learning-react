import { useState } from "react";
import { useNote } from "../contexts";

const CreateNote = () => {
  const [noteHeading, setNoteHeading] = useState("");
  const [noteText, setNoteText] = useState("");
  const { addNote } = useNote();

  // handleCreate
  const handleCreate = () => {
    if (noteHeading !== "" && noteText !== "") {
      addNote(noteHeading, noteText);
      setNoteHeading("");
      setNoteText("");
    }
  };

  return (
    <div className="p-4 rounded flex flex-col gap-4  bg-red-500 text-gray-900">
      <input
        className="text-xl font-semibold py-1 px-2 bg-indigo-600/30 focus:outline-none rounded placeholder:text-white/90"
        placeholder="heading..."
        value={noteHeading}
        onChange={(e) => setNoteHeading(e.target.value)}
      />
      <textarea
        rows={5}
        cols={20}
        className="w-[38ch] resize-none custom-scrollbar font-semibold flex-grow text-justify py-3 px-4 bg-indigo-600/30 focus:outline-none  rounded placeholder:text-white/90"
        placeholder="write something here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button
        onClick={handleCreate}
        className="py-2 w-full bg-green-700 hover:bg-green-950 text-white font-bold rounded"
      >
        Create Note
      </button>
    </div>
  );
};

export default CreateNote;
