import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";

export default function AddBook({ bookFacade }) {
  const [newBook, setNewBook] = useState({ title: "", info: "" });
  let [isBlocking, setIsBlocking] = useState(false);

  const onChange = (event) => {
    setIsBlocking(event.target.value.length > 0);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setNewBook({ ...newBook, [name]: value });
  };

  function handleSubmit(event) {
    setIsBlocking(false);
    bookFacade.addBook(newBook);
    event.preventDefault();
    setNewBook({ title: "", info: "" });
  }
  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Add title"
          value={newBook.title}
          onChange={onChange}
          required
        ></input>
        <br></br>
        <input
          name="info"
          placeholder="Add info"
          value={newBook.info}
          onChange={onChange}
          required
        ></input>
        <br></br>
        <button type="submit">Save</button>
        <Prompt
          when={isBlocking}
          message={(location) =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
      </form>
      <p>{JSON.stringify(newBook)}</p>
    </div>
  );
}
