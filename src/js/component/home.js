import React from "react";
import PropTypes from "prop-types";
//import { CounterMaker } from "./CounterMaker";
//include images into your bundle

//create your first component
export function Home(props) {
	return (
		<div className="text-center d-flex justify-content-center align-self-center mt-5">
			<i className="far fa-clock fa-3x bg-dark p-2" />
			<div className="card  bg-dark p-2">{props.prop0}</div>
			<div className="card  bg-dark p-2">{props.prop1}</div>
			<div className="card  bg-dark p-2">{props.prop2}</div>
			<div className="card  bg-dark p-2">{props.prop3}</div>
			<div className="card  bg-dark p-2">{props.prop4}</div>
			<div className="card  bg-dark p-2">{props.prop5}</div>
		</div>
	);
}
Home.propTypes = {
	prop0: PropTypes.string,
	prop1: PropTypes.string,
	prop2: PropTypes.string,
	prop3: PropTypes.string,
	prop4: PropTypes.string,
	prop5: PropTypes.string
};
