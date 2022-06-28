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
        <div className="container">
          <div className="header">
            <Header />
          </div>
          <div className="content">
            <RouterComp />
          </div>
          <div className="footer">
            <Menubar />
          </div>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
