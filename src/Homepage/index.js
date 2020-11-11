import React, { useContext } from "react";
import {ColorContext} from "../ColorContext"

import Navbar from "../Navbar"
import { HomepageContainer } from "./styled"
import Footer from "../Footer"

const currentPage = 'home'
const Homepage = () => {
  const {color, setColor} = useContext(ColorContext); 

  return (
    <HomepageContainer backgroundColor={color.hex}>
      <Navbar currentPage={currentPage}/>
      <p>This is the homepage. </p>
      <Footer/>
    </HomepageContainer>
  );
};

export default Homepage;
