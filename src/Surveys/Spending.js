import React from "react";
import { RadioButton, SpendingContainer } from "./styled";

const Spending = () => {
  return (
    <SpendingContainer>
      <p>On average, how much do you spend on clothes each year?</p>
      <label>$0-$49</label>
      <RadioButton type="radio" value="$0-$49" />
      <label>$50-$99</label>
      <RadioButton type="radio" value="$50-$99" />
      <label>$100-$499</label>
      <RadioButton type="radio" value="$100-$499" />
      <label>$500-$999</label>
      <RadioButton type="radio" value="$500-$999" />
      <label>$1000+</label>
      <RadioButton type="radio" value="$1000" />
      <button>Submit</button>
    </SpendingContainer>
  );
};

export default Spending;
