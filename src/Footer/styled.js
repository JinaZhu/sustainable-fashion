import styled, {css} from "styled-components";

export const ColorsContainer = styled.div`
    display: flex; 
    align-items: flex-start;
    justify-content: flex-start; 
    margin: 0; 
    overflow-x: scroll;
    user-select: none;
    will-change: transform;
    margin: 0 20px; 
    padding: 10px; 
`

export const ColorDiv = styled.div`
    display: flex; 
    align-items: center;
    justify-content: flex-end; 
    flex-direction: column; 
    min-width: 100px; 
    max-width: 100px; 
    padding: 10px; 
    height: 100px; 
    color: ${(props) => props.secondaryColor};
    background-color: ${(props) => props.color}; 
    overflow: hidden; 
`
export const ColorBorder = styled.div`
    border: 1px solid ${(props) => props.color}; 
    padding: 3px; 
    margin: 10px; 

    ${(props) => {
        return (
          props.isColor &&
          css`
          border: 1px solid ${(props) => props.secondaryColor}; 
          `
        );
      }}
`

export const Year = styled.p`
    font-family: "Gravitas One", cursive;
    font-weight: bold; 
    font-size: 35px; 
    margin: 0;
    padding: 0
`

