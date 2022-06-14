import React, { Fragment } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./globalStyles";

function App() {
	return (
		<Fragment>
			<GlobalStyle/>
			<Header/>
			<div>
      My first react app
			</div>
		</Fragment>
	);
}

export default App;
