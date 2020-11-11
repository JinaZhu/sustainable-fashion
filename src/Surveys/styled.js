import styled, { css } from "styled-components";

const FlexDisplay = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 400px;
  padding: 5px;
  height: 75vh;
  padding: 20px;
`;

export const SurveysPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color}
`;

export const ContainerPaddings = styled.div`
  padding: 15px;
  ${(props) => {
    return (
      props.border === "left" &&
      css`
        border-left: 1px solid ${(props) => props.secondaryColor};
      `
    );
  }}
`;

export const SurveyContainer = styled.div`
  display: flex;
`;

export const Question = styled.p`
  font-family: "Gravitas One", cursive;
  font-size: 25px;
  text-align: left;
`;

export const SpendingContainer = styled.div`
  ${FlexDisplay}
  border-bottom: 1px solid white;
`;

export const SpendingOption = styled.div`
  border: 1px solid ${(props) => props.secondaryColor}; 
  width: 10rem;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.secondaryColor};
    color: ${(props) => props.color};
    box-shadow: 0 0 10px ${(props) => props.secondaryColor}, 0 0 40px ${(props) => props.secondaryColor}, 0 0 80px ${(props) => props.secondaryColor};
  }
  ${(props) => {
    return (
      props.isActive &&
      css`
        background: #f2f2f2;
        color: #0f4c81;
        box-shadow: 0 0 10px #f2f2f2, 0 0 40px #f2f2f2, 0 0 80px #f2f2f2;
      `
    );
  }}
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => props.secondaryColor};
  color: ${(props) => props.color};
  padding: 10px;
  margin: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  width: 25%;
  border: 1px solid ${(props) => props.secondaryColor};
  outline: none;
  cursor: pointer;

  &:hover {
    border: 1px solid white;
    box-shadow: 0 0 10px ${(props) => props.secondaryColor}, 0 0 40px ${(props) => props.secondaryColor}, 0 0 80px ${(props) => props.secondaryColor};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const LifecycleContainer = styled.div`
  ${FlexDisplay}
  border-bottom: 1px solid ${(props) => props.secondaryColor};
`;

export const YearTracker = styled.button`
  background: transparent;
  color: ${(props) => props.secondaryColor};
  border: 1px solid ${(props) => props.secondaryColor};
  font-size: 25px;
  padding: 3px;
  outline: none;

  &:hover {
    background: ${(props) => props.secondaryColor};
    color: ${(props) => props.color};
    box-shadow: 0 0 10px ${(props) => props.secondaryColor}, 0 0 40px ${(props) => props.secondaryColor}, 0 0 80px ${(props) => props.secondaryColor};
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CounterNum = styled.div`
  margin: 10px;
  padding: 3px 7px;
  background: ${(props) => props.secondaryColor};
  font-size: 25px;
  width: 25px;
  color: ${(props) => props.color};
`;

//landfill component
export const LandfillContainer = styled.div`
  ${FlexDisplay}
  border-bottom: 1px solid ${(props) => props.secondaryColor};
`;

export const PercentageInput = styled.input`
  width: 50px;
  height: 40px;
  font-size: 25px;
  outline: none;
  color: ${(props) => props.color};
  box-shadow: 0 0 10px ${(props) => props.secondaryColor}, 0 0 40px ${(props) => props.secondaryColor}, 0 0 80px ${(props) => props.secondaryColor};
  border: 1px solid ${(props) => props.secondaryColor};
  font-family: "Montserrat", sans-serif;
`;

export const PercentageSymbol = styled.p`
  font-family: "Gravitas One", cursive;
  font-size: 25px;
  margin-left: 20px;
  font-weight: bold;
  color: ${(props) => props.secondaryColor};
`;

export const InputContainter = styled.div`
  display: flex;
  align-items: center;
`;
