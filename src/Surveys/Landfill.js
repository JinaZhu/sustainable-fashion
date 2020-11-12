import React, { useState, useContext } from "react";

import {ColorContext} from "../ColorContext"
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
  const {color, setColor} = useContext(ColorContext); 

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

  return (
    <ContainerPaddings secondaryColor={color.secondaryColor} border="left">
      <LandfillContainer secondaryColor={color.secondaryColor}>
        <Question>
          What percentage of clothes ends up in landfills or incinerators?{" "}
        </Question>
        <InputContainter>
          <PercentageInput secondaryColor={color.secondaryColor} color={color.hex} type="number" min="0" max="100" onChange={e => setAnswer(e.target.value)}></PercentageInput>
          <PercentageSymbol secondaryColor={color.secondaryColor}>%</PercentageSymbol>
        </InputContainter>
        <ButtonContainer>
          <SubmitButton secondaryColor={color.secondaryColor} color={color.hex} onClick={addLandfillVote}>Submit</SubmitButton>
        </ButtonContainer>
      </LandfillContainer>
    </ContainerPaddings>
  );
};

export default Landfill;
