import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { multiStepContext } from "./StepContext";
import "./FormStepper.scss";
export default function ThirdStep() {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div className="card-body">
            <h5 className="card-title">Upload your payment screenshot</h5>
            <input
              className="step2"
              type="file"
              onChange={(e) =>
                setUserData({ ...userData, File: e.target.value })
              }
              value={userData["File"]}
            />
          </div>
        </div>
        <Button
          variant="contained"
          onClick={() => setStep(2)}
          color="secondary"
        >
          Back
        </Button>{" "}
        <span></span>
        <Button variant="contained" onClick={submitData} color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
}
