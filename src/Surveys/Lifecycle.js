import React, { useState } from "react";
import {
  LifecycleContainer,
  Question,
  ButtonContainer,
  YearTracker,
  CounterContainer,
  CounterNum,
  SubmitButton,
} from "./styled";
import up from "../images/up.svg";
import down from "../images/down.svg";

const Lifecycle = () => {
  const [counter, setCounter] = useState(0);

  function renderCounter(action) {
    let currentCounter = counter + action;
    if (currentCounter === 11) {
      currentCounter = 1;
    } else if (currentCounter === -1) {
      currentCounter = 10;
    }
    setCounter(currentCounter);
  }
  return (
    <LifecycleContainer>
      <Question>What is the average lifecycle of a piece of clothing?</Question>
      <CounterContainer>
        <YearTracker onClick={(e) => renderCounter(1)}>
          ▲{/* <img src={up} alt="up arrow" width="15" /> */}
        </YearTracker>
        <CounterNum>{counter}</CounterNum>
        <YearTracker onClick={(e) => renderCounter(-1)}>
          ▼{/* <img src={down} alt="up arrow" width="15" /> */}
        </YearTracker>
      </CounterContainer>
      <ButtonContainer>
        <SubmitButton>Submit</SubmitButton>
      </ButtonContainer>
    </LifecycleContainer>
  );
};

export default Lifecycle;
