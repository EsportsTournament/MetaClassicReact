import * as React from "react";
import { useContext } from "react";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import "./FormStepper.scss";
import ThirdStep from "./ThirdStep";
import SecondStep from "./SecondStep";
import FirstStep from "./FirstStep";
import { multiStepContext } from "./StepContext";

export default function FormStepper() {
  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step: number) {
    console.log(step);

    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  }
  return (
    <div className="content">
      <div className="App-header">
        <h3 style={{ color: "red", textDecoration: "underline" }}>Akshay</h3>
        <div className="center-stepper">
          <Stepper
            style={{ width: "18%" }}
            activeStep={currentStep - 1}
            orientation="vertical"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
      </div>
    </div>
  );
}

