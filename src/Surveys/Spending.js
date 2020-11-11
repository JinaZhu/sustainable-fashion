import React, { useState, useContext } from "react";

import {ColorContext} from "../ColorContext"
import {
  SpendingOption,
  SpendingContainer,
  Question,
  SubmitButton,
  ButtonContainer,
  ContainerPaddings,
} from "./styled";
import { DEBUG, PREFIX } from "../utils";

const spendingOptions = [
  "$0-$49",
  "$50-$99",
  "$100-$499",
  "$500-$999",
  "$1000+",
];

const api_path = PREFIX + "/api/spending";
console.log(api_path)

const Spending = () => {
  const [spendingAmount, setSpendingType] = useState("");
  const {color, setColor} = useContext(ColorContext); 

  async function sendSpendingAmount(e, spendingAmount) {
    e.preventDefault();
    try {
      const response = await fetch(api_path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(spendingAmount),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  function checkActive(selectedAmount) {
    if (spendingAmount === selectedAmount) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <ContainerPaddings secondaryColor={color.secondaryColor}>
      <SpendingContainer>
        <Question>
          On average, how much do you spend on clothes each year?
        </Question>
        {spendingOptions.map((option) => {
          return (
            <SpendingOption
              secondaryColor={color.secondaryColor}
              color={color.hex}
              key={option}
              onClick={() => setSpendingType(option)}
              isActive={checkActive(option)}
            >
              <p>{option}</p>
            </SpendingOption>
          );
        })}
        <ButtonContainer>
          <SubmitButton secondaryColor={color.secondaryColor} color={color.hex} onClick={(e) => sendSpendingAmount(e, spendingAmount)}>
            Submit
          </SubmitButton>
        </ButtonContainer>
      </SpendingContainer>
    </ContainerPaddings>
  );
};

export default Spending;
