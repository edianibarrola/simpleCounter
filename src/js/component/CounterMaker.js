import React from "react";

import PropTypes from "prop-types";

export const CounterMaker = props => {
	return <div className="card  bg-dark p-2">{props.title}</div>;
};
CounterMaker.propTypes = {
	title: PropTypes.string
};
