import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
    // 0 또는 마이너스 값이면 TypeError 발생(Cannot read properties of undefined)
  });

  // 유효할 때만 컴포넌트 렌더링하기 위해 변수 설정
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    // 여기로 넘어오는 newValue는 문자열!! -> '+'는 concat이 되어버림
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        // [inputIdentifier]: +e.target.value,
        // '+'를 앞에 붙여서 강제 숫자 변환시키기
        [inputIdentifier]: +newValue, // "[key]"->String값으로 받기
      };
    });
  }

  // const handleChange = (inputIdentifier, e) => {
  //   const inputValue = +e.target.value;
  //    setUserInput(prevUserInput => ({
  //     ...prevUserInput,
  //     [inputIdentifier]: inputValue,
  //   }));
  // }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
