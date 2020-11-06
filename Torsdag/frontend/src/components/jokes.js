import React from "react-dom";
import { useState } from "react";
export default function Jokes({ facade }) {
  const [joke, setJoke] = useState({});

  function getJokes(event) {
    event.preventDefault();
    facade.getJokes((x) => setJoke(x));
  }
  return (
    <div>
      <button onClick={getJokes}>getJokes</button>
      <p>{joke.joke1}</p>
      <p>{joke.joke1Reference}</p>
      <p>{joke.joke2}</p>
      <p>{joke.joke2Reference}</p>
    </div>
  );
}
