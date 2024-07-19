export default function TagCategory() {
  return (
    <>
      <section className="heading text-5xl mb-8">
        <h1>Your Notes</h1>
      </section>
      <section className="notes-container grid grid-flow-col auto-cols-31 gap-4 overflow-x-scroll py-4">
        {tags.map((tag) => {
          return (
            <div>
              {tag.notes.map((note, index) => {
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
            </div>
          );
        })}
      </section>
    </>
  );
}
