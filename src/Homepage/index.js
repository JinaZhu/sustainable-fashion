import React from "react";
import Navbar from "../Navbar"
import { HomepageContainer } from "./styled"

const currentPage = 'home'
const Homepage = () => {
  return (
    <HomepageContainer>
      <Navbar currentPage={currentPage}/>
      <p>This is the homepage. </p>
    </HomepageContainer>
  );
};

export default Homepage;
