export default function CreateNote({ title, content, handleFormSubmit, handleInputChange, handleCheckboxChange, checked }) {
  console.log(checked);
  return (
    <div className="bg-white grid place-items-center gap-20">
      <h1 className="text-6xl mt-20">Make a note</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col w-wider">
        <div className="input-container w-full">
          <input name="title" type="text" placeholder="Title" onChange={handleInputChange} value={title} className="text-2xl outline-0 px-4 py-2 border-2 w-full" />
          <textarea name="content" type="text" placeholder="Note..." onChange={handleInputChange} value={content} rows="4" className="text-2xl outline-0 px-4 py-2 resize-none border-2 w-full" />
        </div>
        <div className="checkbox-input grid grid-cols-2">
          <div>
            {checked.all === true ? <input defaultChecked type="checkbox" name="all" id="all" onChange={handleCheckboxChange} /> : <input type="checkbox" name="all" id="all" onChange={handleCheckboxChange} />}
            <label htmlFor="all">#all</label>
          </div>
          <div>
            {checked.priority === true ? <input defaultChecked type="checkbox" name="priority" id="priority" onChange={handleCheckboxChange} /> : <input type="checkbox" name="priority" id="priority" onChange={handleCheckboxChange} />}
            <label htmlFor="priority">#priority</label>
          </div>
          <div>
            {checked.shopping === true ? <input defaultChecked type="checkbox" name="shopping" id="shopping" onChange={handleCheckboxChange} /> : <input type="checkbox" name="shopping" id="shopping" onChange={handleCheckboxChange} />}
            <label htmlFor="shopping">#shopping</label>
          </div>
          <div>
            {checked.work === true ? <input defaultChecked type="checkbox" name="work" id="work" onChange={handleCheckboxChange} /> : <input type="checkbox" name="work" id="work" onChange={handleCheckboxChange} />}
            <label htmlFor="work">#work</label>
          </div>
        </div>
        <button type="submit" className="outline-0 py-4 text-xl text-white bg-zinc-900">
          Add
        </button>
      </form>
    </div>
  );
}
