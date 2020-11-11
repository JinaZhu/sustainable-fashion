import React from "react";
import { SurveysPage, SurveyContainer } from "./styled";
import Spending from "./Spending";
import Lifecycle from "./Lifecycle";
import Landfill from "./Landfill";
import Navbar from "../Navbar"

const Survey = () => {
  return (
    <SurveysPage>
      <Navbar currentPage={"survey"}/>
      <SurveyContainer>
        <Spending />
        <Lifecycle />
        <Landfill />
      </SurveyContainer>
    </SurveysPage>
  );
};

export default Survey;
