import React, { useState, useContext } from "react";

import {ColorContext} from "../ColorContext"
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
console.log(api_path)

const Lifecycle = () => {
  const [counter, setCounter] = useState(0);
  const {color, setColor} = useContext(ColorContext); 

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
    <ContainerPaddings secondaryColor={color.secondaryColor} border="left">
      <LifecycleContainer secondaryColor={color.secondaryColor}>
        <Question>
          What is the average lifecycle of a piece of clothing?
        </Question>
        <CounterContainer>
          <YearTracker secondaryColor={color.secondaryColor} color={color.hex} onClick={(e) => renderCounter(1)}>▲</YearTracker>
          <CounterNum secondaryColor={color.secondaryColor} color={color.hex} >{counter}</CounterNum>
          <YearTracker secondaryColor={color.secondaryColor} color={color.hex} onClick={(e) => renderCounter(-1)}>▼</YearTracker>
        </CounterContainer>
        <ButtonContainer>
          <SubmitButton secondaryColor={color.secondaryColor} color={color.hex} 
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
