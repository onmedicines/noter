export default function CreateNote({ title, content, handleFormSubmit, handleInputChange }) {
  return (
    <div className="bg-white grid place-items-center">
      <form onSubmit={handleFormSubmit} className="flex flex-col w-wide">
        <input name="title" type="text" placeholder="Title" onChange={handleInputChange} value={title} className="text-2xl outline-0 px-4 py-2 border-2" />
        <textarea name="content" type="text" placeholder="Note..." onChange={handleInputChange} value={content} rows="4" className="text-2xl outline-0 px-4 py-2 resize-none border-2" />
        <button type="submit" className="outline-0 py-4 text-xl text-white bg-black">
          Add
        </button>
      </form>
    </div>
  );
}
