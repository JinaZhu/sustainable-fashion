import React, { useContext } from 'react';

import {ColorContext} from "../ColorContext"
import {ColorsContainer, ColorDiv, Year, ColorBorder} from "./styled"

const colors = [
    {"hex": "#FA7268", "colorName": "Living Coral", "secondaryColor": "#f2f2f2", 'year': "2019"}, 
    {"hex": "#5f4b8b", "colorName": "Ultra Violet", "secondaryColor": "#f2f2f2", 'year': "2018"}, 
    {"hex": "#88B04B", "colorName": "Greenery", "secondaryColor": "#f2f2f2", 'year': "2017"},
    {"hex": "#f7cac9", "colorName": "Rose Quartz", "secondaryColor": "#f2f2f2", 'year': "2016"},
    {"hex": "#964f4c", "colorName": "Marsala", "secondaryColor": "#f2f2f2", 'year': "2015"},
    {"hex": "#AD5E99", "colorName": "Radiant Orchid", "secondaryColor": "#f2f2f2", 'year': "2014"},
    {"hex": "#046307", "colorName": "Emerald", "secondaryColor": "#f2f2f2", 'year': "2013"},
    {"hex": "#DD4124", "colorName": "Tangerine Tango", "secondaryColor": "#f2f2f2", 'year': "2012"},
    {"hex": "#D65076", "colorName": "Honeysuckle", "secondaryColor": "#f2f2f2", 'year': "2011"},
    {"hex": "#40e0d0", "colorName": "Turquoise", "secondaryColor": "#f2f2f2", 'year': "2010"},
    {"hex": "#EFC050", "colorName": "Mimosa", "secondaryColor": "#f2f2f2", 'year': "2009"},
]

const ColorOfTheYear = () => {
    const {color, setColor} = useContext(ColorContext)
    
    return (
        <ColorsContainer>
            {colors.map((yearColor) => {
                return (
                    <ColorBorder color={yearColor.hex}><ColorDiv color={yearColor.hex} secondaryColor={yearColor.secondaryColor} key={yearColor.hex}>
                        <p>{yearColor.colorName}</p><Year>{yearColor.year}</Year>
                    </ColorDiv></ColorBorder>
                )
            })}
        </ColorsContainer>
    )
}

export default ColorOfTheYear; 