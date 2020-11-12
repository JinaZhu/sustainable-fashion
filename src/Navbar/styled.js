import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    height: 8vh;
    border-bottom: 1px solid white; 
    width: 100vw; 
    color: ${(props) => props.secondaryColor}; 
`

export const Logo = styled.p`
    font-size: 25px;
    font-weight: bold; 
    margin: 0 0 0 25px;
    font-family: "Gravitas One", cursive;
`

export const RouteContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    width: 30%
`

export const StyledLink = styled(Link)`
    color: ${(props) => props.secondaryColor}; 
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    z-index: 10; 
`


export const LinkP = styled.p`
    ${(props) => {
        return (
        props.isActive &&
        css`
         text-shadow: 0 0 10px ${(props) => props.secondaryColor}, 0 0 20px ${(props) => props.secondaryColor}, 0 0 30px ${(props) => props.color}, 0 0 40px ${(props) => props.color}, 0 0 50px ${(props) => props.color}, 0 0 60px ${(props) => props.color}, 0 0 70px ${(props) => props.color};
        `
        );
    }}
`