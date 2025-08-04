import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState([]);

  const inputIsValid = userInput.lengh > 0;

  return (
    <>
      <Header />
      <UserInput />
      {inputIsValid && <Results />}
    </>
  );
}

export default App;
