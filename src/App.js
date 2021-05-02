import React from "react";
import Ball from "./Ball";
import { useState, useEffect } from "react";
import { leapYear } from "./leapYear-function";
import "./App.css";

function App() {
  const [year, setYear] = useState(0);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    //clear page after every new submit
    setError("");
    setHasAnswered(false);

    setYear(e.target["year"].value);
    setHasAnswered(true);
  }
  useEffect(() => {
    try {
      leapYear(year)
        ? setResponse("a leap year!")
        : setResponse("not a leap year.");
    } catch (err) {
      setError(err.message);
    }
  }, [year, error]);

  return (
    <>
      <main className="App">
        <h1>Leap Year Checker</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="year-input">Enter year: </label>
          <br />
          <input id="year-input" name="year" />
          <br />
          <span className="side">
            <button type="submit">submit</button>
          </span>
        </form>
        {hasAnswered && <p id="error">{error}</p>}
        {hasAnswered && !error && (
          <p>
            The year, {year}, is {response}
          </p>
        )}
        <Ball response={response} year={year} error={error} />
      </main>
      <footer>© Oz Harb</footer>
    </>
  );
}

export default App;
