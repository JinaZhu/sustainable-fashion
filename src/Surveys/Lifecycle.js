import React, { useState } from "react";
import {
  LifecycleContainer,
  Question,
  ButtonContainer,
  YearTracker,
  CounterContainer,
  CounterNum,
  SubmitButton,
  ContainerPaddings,
} from "./styled";
import { DEBUG, PREFIX } from "../utils";

const api_path = PREFIX + "/api/lifecycle";

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

  async function addLifecycleVote(e, year) {
    e.preventDefault();
    try {
      const response = await fetch(api_path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(counter),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <ContainerPaddings border="left">
      <LifecycleContainer>
        <Question>
          What is the average lifecycle of a piece of clothing?
        </Question>
        <CounterContainer>
          <YearTracker onClick={(e) => renderCounter(1)}>▲</YearTracker>
          <CounterNum>{counter}</CounterNum>
          <YearTracker onClick={(e) => renderCounter(-1)}>▼</YearTracker>
        </CounterContainer>
        <ButtonContainer>
          <SubmitButton
            onClick={(e) => {
              addLifecycleVote(e, counter);
            }}
          >
            Submit
          </SubmitButton>
        </ButtonContainer>
      </LifecycleContainer>
    </ContainerPaddings>
  );
};

export default Lifecycle;
