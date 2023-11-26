import { useState, useEffect } from "react";
import { NoteProvider } from "./contexts";
import { CreateNote, NoteItem } from "./components";
import { v4 as uuid } from "uuid";

function App() {
  // notes array containing objects with id, noteHeading & noteText properties
  const [notes, setNotes] = useState([]);

  // createTime
  const createTime = () => {
    const currentTime = new Date();
    const formattedDate = currentTime.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const formattedTime = currentTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    return `${formattedDate} at ${formattedTime}`;
  };

  // addNote
  const addNote = (heading, text) => {
    const time = createTime();
    setNotes((prev) => [
      {
        id: uuid(),
        noteHeading: heading,
        noteText: text,
        creationTime: time,
      },
      ...prev,
    ]);
  };

  // deleteNote
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((item) => item.id !== id));
  };

  // editNote
  const editNote = (id, heading, text, time) => {
    setNotes((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              noteHeading: heading,
              noteText: text,
              creationTime: time,
            }
          : item
      )
    );
  };

  // on startup
  useEffect(() => {
    const noteItem = JSON.parse(localStorage.getItem("noteItem"));
    if (noteItem && noteItem.length) {
      setNotes(noteItem);
    }
  }, []);

  // on every load
  useEffect(() => {
    localStorage.setItem("noteItem", JSON.stringify(notes));
  }, [notes]);

  // App.jsx
  return (
    <NoteProvider value={{ notes, addNote, editNote, deleteNote, createTime }}>
      <div className="min-h-screen py-12 flex flex-col bg-gray-400">
        <h1 className="mx-auto text-6xl mb-12 text-gray-800 font-extrabold">
          my🗒️Notes
        </h1>
        {/* Loops through note item */}
        <ul className="list-none px-12 flex items-start gap-12 flex-wrap">
          <li>
            <CreateNote />
          </li>
          {notes.map((item) => (
            <li key={item.id}>
              <NoteItem key={item.id} note={item} />
            </li>
          ))}
        </ul>
      </div>
    </NoteProvider>
  );
}

export default App;
