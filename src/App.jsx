import { useState } from "react";
import CreateNote from "./CreateNote";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function App() {
  const [filtered, setFiltered] = useState({});
  const [input, setInput] = useState({ title: "", content: "" });
  const [isNewNoteVisible, setIsNewNoteVisible] = useState(false);
  const [tags, setTags] = useState([
    { tagName: "all", notes: [] },
    { tagName: "priority", notes: [] },
    { tagName: "shopping", notes: [] },
    { tagName: "work", notes: [] },
  ]);
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

    setTags((prevTags) => prevTags.map((tag) => (checked[tag.tagName] ? { ...tag, notes: [...tag.notes, newNote] } : tag)));

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
          <h1 className="text-white font-medium text-3xl mb-4">Tags</h1>
          <section className="tags flex flex-col gap-4 ">
            {tags.map((tag, index) => (
              <button key={index} id={index} className="before:content-['#'] text-white text-2xl ml-4">
                {tag.tagName}
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
            <section className="heading text-5xl mb-8">
              <h1>Your Notes</h1>
            </section>
            <section className="notes-container grid gap-12">
              {tags.map(
                (tag, index) =>
                  tag.notes.length !== 0 && (
                    <div key={index}>
                      <h1 className="before:content-['#'] text-3xl">{tag.tagName}</h1>
                      <div className="cards-container grid grid-flow-col auto-cols-29 gap-8 overflow-x-scroll py-4">
                        {tag.notes.map((note, noteIndex) => (
                          <div key={noteIndex} className="card rounded-xl bg-zinc-700 text-white p-8 flex flex-col gap-4 justify-between">
                            <div className="flex flex-col gap-4">
                              <p className="text-3xl font-semibold">{note.title}</p>
                              <p className="text-2xl line-clamp-2">{note.content}</p>
                              <p className="text-base font-thin">{note.created}</p>
                            </div>
                            <button className="border-2 border-zinc-300 outline-none hover:bg-zinc-100 hover:text-black py-2 px-4 w-fit">delete</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
