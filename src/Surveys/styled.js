import styled, { css } from "styled-components";

export const SurveysPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0f4c81;
`;

export const SurveyContainer = styled.div`
  border-top: 1px solid white;
  margin-top: 10%;
`;

export const Question = styled.p`
  font-family: "Gravitas One", cursive;
  font-size: 25px;
  color: white;
  text-align: left;
`;

export const SpendingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid white;
  width: 500px;
  padding: 5px;
`;

export const Options = styled.p`
  font-family: "Montserrat", sans-serif;
`;

export const SpendingOption = styled.div`
  border: 1px solid white;
  width: 10rem;
  margin: 5px;
  color: white;
  cursor: pointer;

  &:hover {
    background: #f2f2f2;
    color: #0f4c81;
    box-shadow: 0 0 10px #f2f2f2, 0 0 40px #f2f2f2, 0 0 80px #f2f2f2;
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
  background-color: f2f2f2;
  color: #0f4c81;
  padding: 10px;
  margin: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  width: 25%;
  border: 1px solid white;
  outline: none;
  cursor: pointer;

  &:hover {
    border: 1px solid white;
    box-shadow: 0 0 10px #f2f2f2, 0 0 40px #f2f2f2, 0 0 80px #f2f2f2;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;
