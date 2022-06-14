import React, { Fragment } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Menubar from "./components/Menubar/Menubar";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <div className="container">
        <div className="header">
          <Header/>
        </div>
        <div className="content"></div>
        <div className="footer">
			<Menubar/>
		</div>
      </div>
    </Fragment>
  );
}

export default App;
