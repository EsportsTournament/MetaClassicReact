import React from "react";
import Button from "@mui/material/Button";
import { multiStepContext } from "./StepContext";
import "./FormStepper.scss";

export default function FirstStep() {
  const { setStep, userData, setUserData } = React.useContext(multiStepContext);
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div>
            <div className="card-body">
              <h5 className="card-title">Individual Registration</h5>
              <p className="card-text">
                ,<label>Name:</label>
                <input
                  type="text"
                  value={userData["Name"]}
                  onChange={(e) =>
                    setUserData({ ...userData, Name: e.target.value })
                  }
                  className="input"
                  placeholder="userName"
                />
                <br />
                <label>Email:</label>
                <br />
                <input
                  type="email"
                  className="input"
                  placeholder="urmail@mail.com"
                  value={userData["Email"]}
                  onChange={(e) =>
                    setUserData({ ...userData, Email: e.target.value })
                  }
                />
                <br />
                <label>COD Name:</label>
                <br />
                <input
                  type="text"
                  className="input"
                  placeholder="ME_LUCIFER"
                  value={userData["COD_NAME"]}
                  onChange={(e) =>
                    setUserData({ ...userData, COD_NAME: e.target.value })
                  }
                />
              </p>
            </div>
          </div>
          <Button
            variant="contained"
            onClick={() => setStep(2)}
            color="primary"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
