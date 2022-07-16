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
            <div className="crad-body">
              <div className="card-title">Individual Registration</div>
              <p className="card-text">
                <label>Name:</label>
                <br />
                <input type="text" className="input" placeholder="UserName" />
                <br />
                <label>Email:</label>
                <br />
                <input
                  type="text"
                  className="input"
                  placeholder="urmail@mail.com"
                />
                <br />
                <label>COD ID:</label>
                <br />
                <input type="text" className="input" placeholder="4884884848" />
                <br />
                <label>COD NAME:</label>
                <br />
                <input type="text" className="input" placeholder="ME_LUCIFER" />
              </p>
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
