import React from "react";
import { SurveysPage, SurveyContainer } from "./styled";
import Spending from "./Spending";
import Lifecycle from "./Lifecycle";

const Survey = () => {
  return (
    <SurveysPage>
      <SurveyContainer>
        <Spending />
        <Lifecycle />
      </SurveyContainer>
    </SurveysPage>
  );
};

export default Survey;
