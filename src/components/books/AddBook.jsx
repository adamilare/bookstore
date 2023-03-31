const AddBook = () => (
  <div className="add-book">
    <span className="add-book-title">ADD NEW BOOK</span>
    <form className="add-book-form">
      <input type="text" placeholder="Book title" />
      <select>
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="economy">Economy</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
