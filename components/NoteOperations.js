import styles from "../styles/void.module.scss";
import { useState, useEffect } from "react";
import { app, database } from "../pages/api/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function NoteOperations() {
  const dbInstance = collection(database, "notes");
  const [isInputVisible, setInputVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [notesArray, setNotesArray] = useState([]);
  const getNotes = () => {
    getDocs(dbInstance).then((data) => {
      setNotesArray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };
  const saveNote = () => {
    addDoc(dbInstance, {
      noteTitle: noteTitle,
    }).then(() => {
      setNoteTitle("");
      getNotes();
    });
  };
  const inputToggle = () => {
    setInputVisible(!isInputVisible);
  };
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <>
      <div className={styles.btnContainer}>
        <button className={styles.button} onClick={inputToggle}>
          Add a New Note
        </button>
      </div>

      {isInputVisible ? (
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            placeholder="Enter the Title.."
            onChange={(e) => setNoteTitle(e.target.value)}
          />
        </div>
      ) : (
        <></>
      )}
      <button className={styles.saveBtn} onClick={saveNote}>
        Save Note
      </button>
      <div className={styles.notesDisplay}>
        {notesArray.map((note) => {
          return (
            <div key={note.id} className={styles.notesInner}>
              <h4>{note.noteTitle}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
