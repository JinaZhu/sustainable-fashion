import styled from "styled-components";

export const SurveysContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0f4c81;
`;

export const Question = styled.p`
  font-family: "Gravitas One", cursive;
  font-size: 25px;
  color: white;
`;

export const SpendingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-left: 1px solid white;
  border-right: 1px solid white;
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

  &:hover {
    background-color: white;
    color: #0f4c81;
  }
`;
