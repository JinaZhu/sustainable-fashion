import React, {useState, useEffect} from 'react';
import {NavContainer, Logo, RouteContainer, StyledLink, LinkP} from "./styled"

const Navbar = ({currentPage}) => {
    const [isHome, setIsHome] = useState(false)
    const [isSurvey, setIsSurvey] = useState(false)

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
        <NavContainer>
            <Logo>-tainable.</Logo>
            <RouteContainer>
            <LinkP isActive={isHome}><StyledLink to="/">Home</StyledLink></LinkP>
            <LinkP isActive={isSurvey}><StyledLink to="/survey">Survey</StyledLink></LinkP>
            </RouteContainer>
        </NavContainer>
    )
}

export default Navbar; 