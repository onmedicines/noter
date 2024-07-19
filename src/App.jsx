import { useState } from "react";

import CreateNote from "./CreateNote";
import Note from "./Note";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function App() {
  const [input, setInput] = useState({ title: "", content: "" });
  const [notes, setNotes] = useState([]);
  const [newButton, setNewButton] = useState(false);
  const [tags, setTags] = useState([
    { tagName: "#all", notes: [] },
    { tagName: "#priority", notes: [] },
    { tagName: "#shopping", notes: [] },
    { tagName: "#work", notes: [] },
  ]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // generate date string for task
    let now = new Date();
    let date = `${now.getDate()} ${monthNames[now.getMonth()]}, ${now.getFullYear()}`;
    let newNote = { title: input.title, content: input.content, created: date };

    // update notes array with new task
    setNotes((prev) => {
      return [...prev, { title: input.title, content: input.content, created: date }];
    });

    setTags((prevTags) =>
      prevTags.map((tag) => {
        if (tag.tagName === "#all") return { ...tag, notes: [...tag.notes, newNote] };
        else return tag;
      })
    );

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
          <div className="tags-container">
            <h1 className="text-white font-medium text-3xl mb-4">Tags</h1>
            <section className="tags flex flex-col gap-4 ">
              {tags.map((tag, index) => {
                return (
                  <p key={index} id={index} className="text-white text-2xl ml-4">
                    {tag.tagName}
                  </p>
                );
              })}
            </section>
          </div>
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
                {tags
                  .find((tag) => tag.tagName === "#all")
                  .notes.map((note, index) => {
                    return (
                      <div key={index} id={index} className="card border-2 rounded-xl border-zinc-800 bg-zinc-700 text-white p-8 flex flex-col gap-4 justify-between">
                        <div className="flex flex-col gap-4">
                          <p className="text-3xl font-semibold ">{note.title}</p>
                          <p className="text-2xl line-clamp-2 ">{note.content}</p>
                          <p className="text-base font-thin ">{note.created}</p>
                        </div>
                        <button className="border-2 border-zinc-300 outline-none hover:bg-zinc-100 hover:text-black py-2 px-4 w-fit">delete</button>
                      </div>
                    );
                  })}
              </section>
            </>
          )}
        </main>
      </div>
    </>
  );
}

// ------------------chatgpt code-----------------------
// ------------------chatgpt code-----------------------
// ------------------chatgpt code-----------------------

// import { useState } from "react";

// import CreateNote from "./CreateNote";
// import Note from "./Note";

// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// export default function App() {
//   const [input, setInput] = useState({ title: "", content: "" });
//   const [notes, setNotes] = useState([]);
//   const [newButton, setNewButton] = useState(false);
//   const [tags, setTags] = useState([
//     { tagName: "#all", notes: [] },
//     { tagName: "#priority", notes: [] },
//     { tagName: "#shopping", notes: [] },
//     { tagName: "#work", notes: [] },
//   ]);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // generate date string for task
//     let now = new Date();
//     let date = `${now.getDate()} ${monthNames[now.getMonth()]}, ${now.getFullYear()}`;
//     let newNote = { title: input.title, content: input.content, created: date };

//     // update notes array with new task
//     setNotes((prev) => {
//       return [...prev, newNote];
//     });

//     // update tags array with new note
//     setTags((prevTags) =>
//       prevTags.map((tag) => {
//         if (tag.tagName === "#all") return { ...tag, notes: [...tag.notes, newNote] };
//         else return tag;
//       })
//     );

//     // empty input
//     setInput({ title: "", content: "" });
//     // reset newButton to view notes
//     setNewButton(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInput((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   const handleNewButton = () => {
//     setNewButton(true);
//   };

//   return (
//     <>
//       <div className="container mx-auto p-4 min-h-screen grid grid-cols-8 gap-4">
//         <section className="sidebar h-full rounded-2xl p-8 col-span-2 bg-zinc-900 flex flex-col gap-12">
//           <p className="text-white font-medium text-2xl">Hello, Anurag</p>
//           <button onClick={handleNewButton} className="bg-white text-black rounded-xl text-3xl font-medium py-4">
//             New +
//           </button>
//           <div className="tags-container">
//             <h1 className="text-white font-medium text-3xl mb-4">Tags</h1>
//             <section className="tags flex flex-col gap-4 ">
//               {tags.map((tag, index) => (
//                 <p key={index} className="text-white text-2xl ml-4">
//                   {tag.tagName}
//                 </p>
//               ))}
//             </section>
//           </div>
//         </section>
//         <main className="rounded-2xl bg-white col-span-6 p-8">
//           {newButton ? (
//             <CreateNote handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} title={input.title} content={input.content} />
//           ) : (
//             <>
//               <section className="heading text-5xl mb-8">
//                 <h1>Your Notes</h1>
//               </section>
//               <section className="notes-container grid grid-flow-col auto-cols-[min-content] gap-4 overflow-x-scroll py-4">
//                 {tags
//                   .find((tag) => tag.tagName === "#all")
//                   ?.notes.map((note, index) => (
//                     <div key={index} className="card border-2 rounded-xl border-zinc-800 bg-zinc-700 text-white p-8 flex flex-col gap-4 justify-between">
//                       <div className="flex flex-col gap-4">
//                         <p className="text-3xl font-semibold">{note.title}</p>
//                         <p className="text-2xl line-clamp-2">{note.content}</p>
//                         <p className="text-base font-thin">{note.created}</p>
//                       </div>
//                       <button className="border-2 border-zinc-300 outline-none hover:bg-zinc-100 hover:text-black py-2 px-4 w-fit">delete</button>
//                     </div>
//                   ))}
//               </section>
//             </>
//           )}
//         </main>
//       </div>
//     </>
//   );
// }

// ------------------chatgpt code-----------------------
// ------------------chatgpt code-----------------------
// ------------------chatgpt code-----------------------
