import { useState } from "react";

import CreateNote from "./CreateNote";
import Note from "./Note";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function App() {
  const [input, setInput] = useState({ title: "", content: "" });
  const [notes, setNotes] = useState([]);
  const [newButton, setNewButton] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // generate date string for task
    let now = new Date();
    let date = `${now.getDate()} ${monthNames[now.getMonth()]}, ${now.getFullYear()}`;

    // update notes array with new task
    setNotes((prev) => {
      return [...prev, { title: input.title, content: input.content, created: date }];
    });

    // empty input
    setInput({ title: "", content: "" });
    // reset newButton to viefalsew notes
    setNewButton(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleNewButton = () => {
    setNewButton(true);
  };

  return (
    <>
      <div className="container mx-auto p-4 min-h-screen grid grid-cols-8 gap-4">
        <section className="sidebar h-full rounded-2xl p-8 col-span-2 bg-zinc-900 flex flex-col gap-12">
          <p className="text-white font-medium text-2xl">Hello, Anurag</p>
          <button onClick={handleNewButton} className="bg-white text-black rounded-xl text-3xl font-medium py-4">
            New +
          </button>
        </section>
        <main className="rounded-2xl bg-white col-span-6 p-8">
          {newButton ? (
            <CreateNote handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} title={input.title} content={input.content}></CreateNote>
          ) : (
            <>
              <section className="heading text-5xl mb-8">
                <h1>Your Notes</h1>
              </section>
              <section className="notes-container grid grid-flow-col auto-cols-31 gap-4 overflow-x-scroll py-4">
                {notes.map((note, index) => {
                  return <Note key={index} id={index} title={note.title} content={note.content} created={note.created}></Note>;
                })}
              </section>
            </>
          )}
        </main>
      </div>
    </>
  );
}
