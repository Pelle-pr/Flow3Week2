import React from "react-dom";
import { useState } from "react";

export default function FindBook({ bookFacade }) {
  const [book, setbook] = useState(null);
  const [bookId, setBookId] = useState("");

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    setBookId(value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let foundBook = bookFacade.findBook(bookId);
    if (!foundBook) {
      return alert("ingen bog");
    }
    setbook(foundBook);
  }
  function handleDelete(event) {
    event.preventDefault();
    bookFacade.deleteBook(book.id);
    setbook(null);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={bookId}
          type="number"
          placeholder="Enter book id"
          onChange={handleChange}
        ></input>
        <button type="submit">Find Book</button>
      </form>
      {book ? (
        <Book book={book} bookFacade={bookFacade} deleteBook={handleDelete} />
      ) : (
        <p>Enter id for book to see</p>
      )}
    </div>
  );
}

function Book({ bookFacade, book, deleteBook }) {
  return (
    <p>
      ID: {book.id}
      <br></br> Title: {book.title}
      <br></br>
      <button onClick={deleteBook}>Delete</button>
    </p>
  );
}
