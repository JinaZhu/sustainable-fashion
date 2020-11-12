import React, { useContext } from 'react';

import {ColorContext} from "../ColorContext"
import ColorOfTheYear from "./ColorOfTheYear"


const Footer = () => {
    const {color, setColor} = useContext(ColorContext)

    return (
        <div>
            <ColorOfTheYear/>
        </div>
    )
}

export default Footer;