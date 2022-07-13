import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { multiStepContext } from "./StepContext";
import "./FormStepper.scss";
export default function SecondStep() {
  const { setStep } = React.useContext(multiStepContext);
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div>
            <div className="card-body">
              <h5 className="card-title">Subscribe to creator channels:</h5>
              <span className="dot">
                &nbsp;&nbsp;&nbsp;My
                <br />
                Youtube <br />
                Channel
              </span>
            </div>
            <span className="step2">My Youtube Channel</span>
          </div>
        </div>
        <Button
          variant="contained"
          onClick={() => setStep(1)}
          color="secondary"
        >
          Back
        </Button>
        <span></span>
        <Button variant="contained" onClick={() => setStep(3)} color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}
