import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  // const inputIsValid = userInputs.lenght > 0;

  function handleChange(field, newValue) {
    setUserInputs(prevUserInput => {
      return {
        ...prevUserInput,
        // [field]: +e.target.value,
        [field]: +newValue,
      }
    });
  }

  // const handleChange = (field, e) => {
  //   const inputValue = +e.target.value;
  //    setUserInputs(prevUserInput => ({
  //     ...prevUserInput,
  //     [field]: inputValue,
  //   }));
  // }

  return (
    <>
      <Header />
      <UserInput userInputs={userInputs} onChange={handleChange} />
      <Results inputs={userInputs} />
    </>
  );
}

export default App;
