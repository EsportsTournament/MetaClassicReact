import {
  Box,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import React from "react";
import "./FormStepper.scss";

const steps = [
  {
    label: "Step 1 of 3",
    description: (
      <div className="row">
        <div className="col-6">
          <div>
            <div className="card-body">
              <div className="card-title">Individual Registration</div>
              <div className="card-description">
                <div className="input-field">
                  <label>Name:</label>
                  <input type="text" className="input" placeholder="UserName" />
                </div>
                <div className="input-field">
                  <label>Email:</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="urmail@mail.com"
                  />
                </div>
                <div className="input-field">
                  <label>COD ID:</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="4884884848"
                  />
                </div>
                <div className="input-field">
                  <label>COD Name:</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="ME_LUCIFER"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Step 2 of 3",
    description: (
      <div className="row">
        <div className="col-6">
          <div>
            <div className="card-body">
              <div className="card-title center">
                Subscribe to creator channels:
              </div>
              <div className="card-description center">
                {/* <span className="dot">
                  &nbsp;&nbsp;&nbsp;My
                  <br />
                  Youtube <br />
                  Channel
                </span> */}
                <div className="circle">My Youtube Channel</div>
              </div>
            </div>
            <span className="step2">My Youtube Channel</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Step 3 of 3",
    description: (
      <div className="row">
        <div className="col-6">
          <div className="card-body">
            <h5 className="card-title">Upload Your Payment screenshot</h5>
            <input type="file" className="step2" />
          </div>
        </div>
      </div>
    ),
  },
];

export default function FormStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last Step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography className="card">
                {step.description}
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1, ml: 16 }}
                      className="input1"
                    >
                      {index === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                      className="input2"
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All Steps completed- you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
