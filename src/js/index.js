//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
//let userInput = window.prompt("how high?");
var counter = 0;

const renderCount = () => {
	counter += 1;
	var displayCount = "000000" + counter;
	var countUp = displayCount.slice(-6);

	ReactDOM.render(
		<Home
			prop1={countUp.charAt(0)}
			prop2={countUp.charAt(1)}
			prop3={countUp.charAt(2)}
			prop4={countUp.charAt(3)}
			prop5={countUp.charAt(4)}
			prop6={countUp.charAt(5)}
		/>,
		document.querySelector("#app")
	);
};

setInterval(renderCount, 1000);
