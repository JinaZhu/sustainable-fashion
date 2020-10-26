import React, { useState } from "react";
import {
  SpendingOption,
  SpendingContainer,
  Question,
  SubmitButton,
  ButtonContainer,
  ContainerPaddings,
} from "./styled";
// import { DEBUG, PREFIX } from "../utils";

const spendingOptions = [
  "$0-$49",
  "$50-$99",
  "$100-$499",
  "$500-$999",
  "$1000+",
];
console.log(process.env.NODE_ENV);
export const DEBUG = process.env.NODE_ENV === "development" ? true : false;
console.log("DEBUG", DEBUG);
export const PREFIX = DEBUG
  ? "http://localhost:80"
  : "https://sustainable-fashion.herokuapp.com";
console.log("PREFIX", PREFIX);
const api_path = PREFIX + "/spending";
console.log("api_path", api_path);

const Spending = () => {
  const [spendingAmount, setSpendingType] = useState("");

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
    <ContainerPaddings>
      <SpendingContainer>
        <Question>
          On average, how much do you spend on clothes each year?
        </Question>
        {spendingOptions.map((option) => {
          return (
            <SpendingOption
              key={option}
              onClick={() => setSpendingType(option)}
              isActive={checkActive(option)}
            >
              <p>{option}</p>
            </SpendingOption>
          );
        })}
        <ButtonContainer>
          <SubmitButton onClick={(e) => sendSpendingAmount(e, spendingAmount)}>
            Submit
          </SubmitButton>
        </ButtonContainer>
      </SpendingContainer>
    </ContainerPaddings>
  );
};

export default Spending;
