export default function Note({ id, title, content, created }) {
  return (
    <div id={id} className="card rounded-xl bg-zinc-700 text-white p-8 flex flex-col gap-4 justify-between">
      <div className="flex flex-col gap-4">
        <p className="text-3xl font-semibold">{title}</p>
        <p className="text-2xl line-clamp-2">{content}</p>
        <p className="text-base font-thin">{created}</p>
      </div>
      <button className="border-2 border-zinc-300 outline-none hover:bg-zinc-100 hover:text-black py-2 px-4 w-fit">delete</button>
    </div>
  );
}
