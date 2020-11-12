import styled, {css} from "styled-components";

export const FooterDiv = styled.div`
    margin: 10px;
    color: ${(props) => props.secondaryColor}; 
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TopBorder = styled.div`
    border-top: 1px solid ${(props) => props.secondaryColor}; 
    width: 40%;
    height: 10px; 
`

export const Logo = styled.div`
    width: 20%; 
    font-family: "Gravitas One", cursive;
    font-size: 25px;
    text-align: center; 
`

export const FooterHeader = styled.h3`
    font-family: "Gravitas One", cursive;
    font-size: 20px; 
    margin: 10px 0 0 35px; 
    text-align: left; 
`

export const FooterSideNote = styled.p`
    margin: 0 0 0 50px; 
    font-size: 10px;
    text-align: left; 
`

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
    min-width: 60px; 
    max-width: 60px; 
    padding: 10px; 
    padding-bottom: 0; 
    height: 70px; 
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
    font-size: 25px; 
    margin: 0;
    padding: 0
`

export const ColorName = styled.p`
    font-size: 12px; 
`

export const MailImg = styled.img`
    width: 35px; 
`

export const EmailLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.color};
  padding: 3rem;
  white-space: nowrap;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px; 
`;

export const EmailButton = styled.button`
    background-color: ${(props) => props.secondaryColor}; 
    border: none;
    outline: none; 
    height: 25px; 

    &:hover {
        box-shadow: 0 0 10px ${(props) => props.secondaryColor}, 0 0 40px ${(props) => props.secondaryColor}, 0 0 80px ${(props) => props.secondaryColor};
    }
`

export const Creator = styled.p`
    font-size: 12px; 
    margin-top: 40px; 
`




