import React from "react";
import { SurveysPage, SurveyContainer } from "./styled";
import Spending from "./Spending";

const Survey = () => {
  return (
    <SurveysPage>
      <SurveyContainer>
        <Spending />
      </SurveyContainer>
    </SurveysPage>
  );
};

export default Survey;
