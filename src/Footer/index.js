import React, { useContext } from 'react';
import {ColorContext} from "../ColorContext"

const color = [
{"hex": "#FA7268", "colorName": "Living Coral", "secondaryColor": "#f2f2f2", 'year': "2019"}, 
{"hex": "#5f4b8b", "colorName": "Ultra Violet", "secondaryColor": "#f2f2f2", 'year': "2018"}, 
{"hex": "#88B04B", "colorName": "Greenery", "secondaryColor": "#f2f2f2", 'year': "2017"},
{"hex": "#f7cac9", "colorName": "Rose Quartz", "secondaryColor": "#f2f2f2", 'year': "2016"},
{"hex": "#964f4c", "colorName": "Marsala", "secondaryColor": "#f2f2f2", 'year': "2015"},
{"hex": "#AD5E99", "colorName": "Radiant Orchid", "secondaryColor": "#f2f2f2", 'year': "2014"},
{"hex": "#AD5E99", "colorName": "Emerald", "secondaryColor": "#f2f2f2", 'year': "2013"},
]

const Footer = () => {
    const {color, setColor} = useContext(ColorContext)
    console.log(color)
    return (
        <div>
            <p>Footer</p>
        </div>
    )
}

export default Footer;