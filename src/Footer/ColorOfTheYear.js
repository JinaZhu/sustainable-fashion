import React, { useContext } from 'react';

import {ColorContext} from "../ColorContext"
import {ColorsContainer, ColorDiv, Year, ColorBorder, ColorName} from "./styled"

const colors = [
    {"hex": "#0f4c81", "colorName": "Classic Blue", "secondaryColor": "#f2f2f2", "year": "2020"}, 
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
    {"hex": "#5B5EA6", "colorName": "Blue Iris", "secondaryColor": "#f2f2f2", 'year': "2008"},
    {"hex": "#9B2335", "colorName": "Chili Pepper", "secondaryColor": "#f2f2f2", 'year': "2007"},
    {"hex": "#DFCFBE", "colorName": "Sand Dollar", "secondaryColor": "#f2f2f2", 'year': "2006"},
    {"hex": "#53B0AE", "colorName": "Blue Turquoise", "secondaryColor": "#f2f2f2", 'year': "2005"},
    {"hex": "#E15D44", "colorName": "Tigerlily", "secondaryColor": "#f2f2f2", 'year': "2004"},
    {"hex": "#7FCDCD", "colorName": "Aqua Sky", "secondaryColor": "#f2f2f2", 'year': "2003"},
    {"hex": "#BC243C", "colorName": "True Red", "secondaryColor": "#f2f2f2", 'year': "2002"},
    {"hex": "#C3447A", "colorName": "Fuchsia Rose", "secondaryColor": "#f2f2f2", 'year': "2001"},
    {"hex": "#98B4D4", "colorName": "Cerulean Blue", "secondaryColor": "#f2f2f2", 'year': "2000"},
]

const ColorOfTheYear = () => {
    const {color, setColor} = useContext(ColorContext)

    function checkCurrentColor(yearColor) {
        if (yearColor === color.hex) {
            return true
        } else {
            return false
        }
    }
    
    return (
        <ColorsContainer>
            {colors.map((yearColor) => {
                return (
                    <ColorBorder key={yearColor.hex} onClick={() => setColor(yearColor)} isColor={checkCurrentColor(yearColor.hex)}  color={yearColor.hex} secondaryColor={yearColor.secondaryColor}><ColorDiv color={yearColor.hex} secondaryColor={yearColor.secondaryColor}>
                        <ColorName>{yearColor.colorName}</ColorName><Year>{yearColor.year}</Year>
                    </ColorDiv></ColorBorder>
                )
            })}
        </ColorsContainer>
    )
}

export default ColorOfTheYear; 