import React, { useContext } from 'react';

import {ColorContext} from "../ColorContext"
import ColorOfTheYear from "./ColorOfTheYear"
import {FooterDiv, EmailLink, EmailButton, Creator, FooterHeader, FooterSideNote, LogoContainer, TopBorder, Logo, MailImg} from "./styled"
import mail from "../images/mail.svg"


const Footer = () => {
    const {color, setColor} = useContext(ColorContext)

    return (
        <FooterDiv secondaryColor={color.secondaryColor}>
            <LogoContainer>
                <TopBorder secondaryColor={color.secondaryColor}></TopBorder>
                <Logo>-tainable.</Logo>
                <TopBorder secondaryColor={color.secondaryColor}></TopBorder>
            </LogoContainer>
            <FooterHeader>Color of the Years</FooterHeader>
            <FooterSideNote>**Select a color to change the page</FooterSideNote>
            <ColorOfTheYear/>
            <MailImg src={mail} alt="mail logo"/>
            <p>What's on your mind?</p>
            <EmailButton color={color.hex} secondaryColor={color.secondaryColor}>
            <EmailLink color={color.hex} href={`mailto:jinazhu87@gmail.com`}>Contact Me</EmailLink>
            </EmailButton>
            <Creator>Designed & Built by Jina Zhu</Creator>
        </FooterDiv>
    )
}

export default Footer;