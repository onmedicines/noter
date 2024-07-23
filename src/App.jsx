import { useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function App() {
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [input, setInput] = useState({ title: "", content: "" });
  const [isNewNoteVisible, setIsNewNoteVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isViewing, setIsViewing] = useState("");
  const [isTagEmpty, setIsTagEmpty] = useState({
    all: false,
    priority: false,
    shopping: false,
    work: false,
  });
  const [checked, setChecked] = useState({
    all: true,
    priority: false,
    shopping: false,
    work: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const date = `${now.getDate()} ${monthNames[now.getMonth()]}, ${now.getFullYear()}`;
    const newNote = { title: input.title, content: input.content, created: date };
    const tags = [];
    for (let key in checked) {
      if (checked[key] === true) {
        tags.push(key);
      }
    }
    setNotes((prevNotes) => {
      return [...prevNotes, { title: input.title, content: input.content, created: date, tags: tags }];
    });
    setIsTagEmpty();

    setInput({ title: "", content: "" });
    setIsNewNoteVisible(false);
    setChecked({ all: true, priority: false, shopping: false, work: false });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setChecked((prev) => ({ ...prev, [name]: checked }));
  };

  const handleTagFilter = (tag) => {
    setIsNewNoteVisible(false);
    setIsViewing(tag);
    setFilteredNotes(() => {
      return notes.filter((note) => note.tags.includes(tag));
    });
  };

  const handleNewButton = () => {
    setIsNewNoteVisible(true);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen grid grid-cols-8 gap-4">
      <section className="sidebar h-screen rounded-2xl p-8 col-span-2 bg-zinc-900 flex flex-col gap-12">
        <p className="text-white font-medium text-2xl">Hello, Anurag</p>
        <button onClick={handleNewButton} className="bg-white text-black rounded-xl text-3xl font-medium py-4">
          New +
        </button>
        <div className="tags-container">
          <h1 className="text-white font-medium text-3xl mb-8">Tags</h1>
          <section className="tags flex flex-col gap-8 items-start">
            {Object.keys(checked).map((tag, index) => (
              <button
                key={index}
                id={index}
                onClick={() => {
                  handleTagFilter(tag);
                }}
                className="before:content-['#'] text-white text-2xl ml-4">
                {tag}
              </button>
            ))}
          </section>
        </div>
      </section>
      <main className="main h-screen rounded-2xl bg-white col-span-6 p-16 overflow-y-scroll">
        {isNewNoteVisible ? (
          <CreateNote handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} handleCheckboxChange={handleCheckboxChange} title={input.title} content={input.content} checked={checked} />
        ) : (
          <>
            <section className="heading text-3xl font-semi-bold mb-8 text-center bg-zinc-800 text-white py-4 rounded-xl">
              <h1>Your Notes</h1>
            </section>
            <section className="notes-container grid gap-12">
              {isViewing === "" ? (
                <div>
                  <h1 className="before:content-['#'] text-3xl font-bold bg-zinc-800 text-white inline-block py-4 px-8 rounded-full">all</h1>
                  <div className="grid grid-cols-4 gap-8">
                    {notes.map((note, index) => {
                      if (note.tags.includes("all")) return <Note key={index} id={index} title={note.title} content={note.content} created={note.created}></Note>;
                    })}
                  </div>
                </div>
              ) : (
                <div>
                  <h1 className="before:content-['#'] text-3xl font-bold bg-zinc-800 text-white inline-block py-4 px-8 rounded-full">{isViewing}</h1>
                  {filteredNotes.length !== 0 ? (
                    <div className="py-8 grid grid-cols-3 gap-8">
                      {filteredNotes.map((note, index) => {
                        return note && <Note key={index} id={index} title={note.title} content={note.content} created={note.created}></Note>;
                      })}
                    </div>
                  ) : (
                    <div className="py-8">
                      <p className="text-2xl">Oops! You currently have no notes in this category.</p>
                      <p className="text-2xl">Try Adding a note in this category by clicking the "New +" button.</p>
                    </div>
                  )}
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
