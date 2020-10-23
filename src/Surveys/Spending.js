import React, { useState } from "react";
import { SpendingOption, SpendingContainer, Question, Options } from "./styled";

const spendingOptions = [
  "$0-$49",
  "$50-$99",
  "$100-$499",
  "$500-$999",
  "$1000+",
];

const DEBUG = process.env.NODE_ENV === "development" ? true : false;
const PREFIX = DEBUG ? "http://localhost:80" : "";
const api_call = PREFIX + "/spending";

const Spending = () => {
  const [SpendingAmount, setSpendingType] = useState("");
  console.log(SpendingAmount);

  async function sendSpendingAmount(e, SpendingAmount) {
    e.preventDefault();
    try {
      const response = await fetch(api_call, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SpendingAmount),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <SpendingContainer>
      <Question>
        On average, how much do you spend on clothes each year?
      </Question>
      {spendingOptions.map((option) => {
        return (
          <SpendingOption key={option} onClick={() => setSpendingType(option)}>
            <Options>{option}</Options>
          </SpendingOption>
        );
      })}
      <button onClick={(e) => sendSpendingAmount(e, SpendingAmount)}>
        Submit
      </button>
    </SpendingContainer>
  );
};

export default Spending;
