import React, { useState } from "react";

import {
  ContainerPaddings,
  LandfillContainer,
  Question,
  SubmitButton,
  ButtonContainer,
  PercentageInput,
  PercentageSymbol,
  InputContainter,
} from "./styled";
import { DEBUG, PREFIX } from "../utils";

const api_path = PREFIX + "/api/landfill";
console.log(api_path)

const Landfill = () => {
  const [answer, setAnswer] = useState('101')

  async function addLandfillVote() {
    try {
      const response = await fetch(api_path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answer)
      });
      const data = await response.json();
      console.log(data)
    } catch (error) {
      console.log("error", error); 
    }
  }
  console.log(answer)

  return (
    <ContainerPaddings border="left">
      <LandfillContainer>
        <Question>
          What percentage of clothes ends up in landfills or incinerators?{" "}
        </Question>
        <InputContainter>
          <PercentageInput type="number" min="0" max="100" onChange={e => setAnswer(e.target.value)}></PercentageInput>
          <PercentageSymbol>%</PercentageSymbol>
        </InputContainter>
        <ButtonContainer>
          <SubmitButton onClick={addLandfillVote}>Submit</SubmitButton>
        </ButtonContainer>
      </LandfillContainer>
    </ContainerPaddings>
  );
};

export default Landfill;
