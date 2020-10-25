import React from "react";

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

const Landfill = () => {
  return (
    <ContainerPaddings border="left">
      <LandfillContainer>
        <Question>
          What percentage of clothes ends up in landfills or incinerators?{" "}
        </Question>
        <InputContainter>
          <PercentageInput type="text" maxlength="3"></PercentageInput>
          <PercentageSymbol>%</PercentageSymbol>
        </InputContainter>
        <ButtonContainer>
          <SubmitButton>Submit</SubmitButton>
        </ButtonContainer>
      </LandfillContainer>
    </ContainerPaddings>
  );
};

export default Landfill;
