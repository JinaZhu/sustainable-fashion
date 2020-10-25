import React from "react";
import { SurveysPage, SurveyContainer } from "./styled";
import Spending from "./Spending";
import Lifecycle from "./Lifecycle";
import Landfill from "./Landfill";

const Survey = () => {
  return (
    <SurveysPage>
      <SurveyContainer>
        <Spending />
        <Lifecycle />
        <Landfill />
      </SurveyContainer>
    </SurveysPage>
  );
};

export default Survey;
