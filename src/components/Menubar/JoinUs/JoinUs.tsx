import React from "react";

function JoinUs() {
  return (
    <div className="bgCoc joinUs">
      <div className="formCard">
        <div className="cardTitle">Join Us</div>
        <div className="cardBody">
          <div className="formGroup">
            <div className="label">Name:</div>
            <div className="input">
              <input type="text" name="name" id="name" />
            </div>
          </div>
          <div className="formGroup">
            <div className="label">Gender:</div>
            <div className="input">
              <input type="radio" name="gender" id="gender" value="male" /> Male
              <input type="radio" name="gender" id="gender" value="male" /> Female
              <input type="radio" name="gender" id="gender" value="male" /> Other
            </div>
          </div>
          <div className="formGroup">
            <div className="label">Date Of Birth:</div>
            <div className="input">
              <input type="date" name="dob" id="dob" />
            </div>
          </div>
          <div className="formGroup">
            <div className="label">Discord:</div>
            <div className="input">
              <input type="text" name="discord" id="discord" />
            </div>
          </div>
          <div className="formGroup">
            <div className="label">Whatsapp Number:</div>
            <div className="input">
              <input type="text" name="wano" id="wano" />
            </div>
          </div>
          <div className="formGroup">
            <div className="button">
             <button className="mt-button" onClick={() => {
              alert("Thanks:) See You Soon");
             }} >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;