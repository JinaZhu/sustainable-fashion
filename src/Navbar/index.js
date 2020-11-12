import React, {useState, useEffect, useContext} from 'react';
import {NavContainer, Logo, RouteContainer, StyledLink, LinkP} from "./styled"
import {ColorContext} from "../ColorContext"

const Navbar = ({currentPage}) => {
    const [isHome, setIsHome] = useState(false)
    const [isSurvey, setIsSurvey] = useState(false)
    const {color, setColor} = useContext(ColorContext)

    function checkPage() {
        if (currentPage === "home") {
            setIsSurvey(false)
            setIsHome(true)
        } else if (currentPage === "survey") {
            setIsSurvey(true)
            setIsHome(false)
        }   
    }   

    useEffect(() => {
        checkPage()
    })

    return (
        <NavContainer secondaryColor={color.secondaryColor}>
            <Logo>-tainable.</Logo>
            <RouteContainer>
            <LinkP isActive={isHome}><StyledLink color={color.hex} secondaryColor={color.secondaryColor} to="/">Home</StyledLink></LinkP>
            <LinkP isActive={isSurvey}><StyledLink color={color.hex} secondaryColor={color.secondaryColor} to="/survey">Survey</StyledLink></LinkP>
            </RouteContainer>
        </NavContainer>
    )
}

export default Navbar; 