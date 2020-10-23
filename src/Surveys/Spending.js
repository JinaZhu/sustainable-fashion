import React, { useState } from "react";
import { SpendingOption, SpendingContainer, Question, Options } from "./styled";

const spendingOptions = [
  "$0-$49",
  "$50-$99",
  "$100-$499",
  "$500-$999",
  "$1000+",
];

const Spending = () => {
  const [SpendingAmount, setSpendingType] = useState("");
  console.log(SpendingAmount);

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
    </SpendingContainer>
  );
};

export default Spending;
