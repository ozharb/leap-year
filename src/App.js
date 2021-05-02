import React from "react";
import Frog from "./Frog";
import { useState, useEffect } from "react";
import { leapYear } from "./leapYear-function";
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
    <main className="App">
      <h1>Leap Year</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="year-input">Enter year:</label>
        <input id="year-input" name="year" />
        <button type="submit">submit</button>
      </form>
      {hasAnswered && <p id="error">{error}</p>}
      {hasAnswered && (
        <p>
          The year, {year}, is {response}
        </p>
      )}
      <Frog response={response} year={year} />
    </main>
  );
}

export default App;
