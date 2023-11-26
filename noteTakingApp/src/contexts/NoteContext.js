import { createContext, useContext } from "react";

export const NoteContext = createContext({
  // notes array containing objects with id, note (text) & note background Color.
  notes: [
    {
      id: 589,
      noteHeading: "something",
      noteText: "something",
      creationTime: "05/09/23 at 09:39",
    },
  ],
  //   methods
  addNote: (heading, text) => {},
  editNote: (id, heading, text, time) => {},
  deleteNote: (id) => {},
  createTime: () => {},
});

export const NoteProvider = NoteContext.Provider;

export const useNote = () => {
  return useContext(NoteContext);
};
