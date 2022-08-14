import React, { Fragment } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Menubar from "./components/Menubar/Menubar";
import RouterComp from "./components/Router";
import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <div className="mt-app-container">
          <div className="mt-app-header">
            <Header />
          </div>
          <div className="mt-app-content">
            <RouterComp />
          </div>
          <div className="mt-app-footer">
            <Menubar />
          </div>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
