import React, { useContext } from "react";

import {ColorContext} from "../ColorContext"
import { SurveysPage, SurveyContainer } from "./styled";
import Spending from "./Spending";
import Lifecycle from "./Lifecycle";
import Landfill from "./Landfill";
import Navbar from "../Navbar"
import Footer from "../Footer"


const Survey = () => {
  const {color, setColor} = useContext(ColorContext); 

  return (
    <SurveysPage backgroundColor={color.hex} color={color.secondaryColor}>
      <Navbar currentPage={"survey"}/>
      <SurveyContainer>
        <Spending />
        <Lifecycle />
        <Landfill />
      </SurveyContainer>
      <Footer />
    </SurveysPage>
  );
};

export default Survey;
