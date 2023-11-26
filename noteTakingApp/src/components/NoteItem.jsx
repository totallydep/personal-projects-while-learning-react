import { useState } from "react";
import { useNote } from "../contexts";

const NoteItem = ({ note }) => {
  const { editNote, deleteNote, createTime } = useNote();
  const [heading, setHeading] = useState(note.noteHeading);
  const [text, setText] = useState(note.noteText);
  const [isNoteEditable, setIsNoteEditable] = useState(false);

  // handleDelete
  const handleDelete = () => {
    if (!isNoteEditable) {
      deleteNote(note.id);
    }
  };

  // handleEdit
  const handleEdit = () => {
    if (heading !== "" && text !== "") {
      setIsNoteEditable((prev) => !prev);
      if (isNoteEditable) {
        const time = createTime();
        editNote(note.id, heading, text, time);
      }
    }
  };

  //   NoteItem.jsx
  return (
    <div
      className={`p-4 rounded flex flex-col gap-4 bg-yellow-500 text-black border-b-4 border-r-4 border-black`}
    >
      <input
        className={`text-xl  font-semibold py-1 px-2 focus:outline-none rounded placeholder:text-white/90 ${
          isNoteEditable
            ? " cursor-pointer bg-red-600/20 "
            : " cursor-default bg-indigo-600/10 "
        }`}
        placeholder="heading..."
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        readOnly={!isNoteEditable}
      />
      <textarea
        rows={5}
        cols={20}
        className={`w-[38ch] bg-indigo-600/10 custom-scrollbar resize-none font-semibold flex-grow text-justify py-3 px-4 focus:outline-none  rounded placeholder:text-white/90 ${
          isNoteEditable
            ? " cursor-pointer bg-red-600/20 "
            : " cursor-default bg-indigo-600/10 "
        }`}
        placeholder="write something here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        readOnly={!isNoteEditable}
      />
      <div className="flex pt-1 justify-between items-center gap-4">
        <p className="bg-rose-400/40 text-gray-800/80 border-b-2 border-r-2 border-black font-semibold py-1 px-2 cursor-pointer rounded text-sm">{`${note.creationTime}`}</p>
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className={`px-3 py-1 bg-blue-700 hover:bg-blue-950 text-white font-bold rounded`}
          >
            {isNoteEditable ? "Save" : "Edit"}
          </button>
          <button
            onClick={handleDelete}
            className={`px-3 py-1 bg-red-700 hover:bg-red-950 text-white font-bold rounded ${
              isNoteEditable ? " cursor-not-allowed " : " cursor-pointer "
            }`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
