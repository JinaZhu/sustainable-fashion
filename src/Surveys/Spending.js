import React, { useState } from "react";
import { SpendingOption, SpendingContainer, Question, Options } from "./styled";

const Spending = () => {
  const [selectedSpendingAmount, setSelectedSpendingType] = useState("");

  return (
    <SpendingContainer>
      <Question>
        On average, how much do you spend on clothes each year?
      </Question>
      <SpendingOption>
        <Options>$0-$49</Options>
      </SpendingOption>
      <SpendingOption>
        <Options>$50-$99</Options>
      </SpendingOption>
      <SpendingOption>
        <Options>$100-$499</Options>
      </SpendingOption>
      <SpendingOption>
        <Options>$500-$999</Options>
      </SpendingOption>
      <SpendingOption>
        <Options>$1000+</Options>
      </SpendingOption>
    </SpendingContainer>
  );

  //   return (
  //     <SpendingContainer>

  //       <label>On average, how much do you spend on clothes each year?</label>
  //       <p>$0-$49</p>
  //       <RadioButton type="radio" name="spending" value="$0-$49" />
  //       <p>$50-$99</p>
  //       <RadioButton type="radio" name="spending" value="$50-$99" />
  //       <p>$100-$499</p>
  //       <RadioButton type="radio" name="spending" value="$100-$499" />
  //       <p>$500-$999</p>
  //       <RadioButton type="radio" name="spending" value="$500-$999" />
  //       <p>$1000+</p>
  //       <RadioButton type="radio" name="spending" value="$1000" />
  //       <button>Submit</button>
  //     </SpendingContainer>
  //   );
};

export default Spending;
