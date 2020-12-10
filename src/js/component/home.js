import React from "react";
import { CounterMaker } from "./CounterMaker";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center d-flex justify-content-center align-self-center mt-5">
			<i className="far fa-clock fa-3x bg-dark p-2" />
			<CounterMaker title="0" />
			<CounterMaker title="0" />
			<CounterMaker title="0" />
			<CounterMaker title="0" />
			<CounterMaker title="0" />
			<CounterMaker title="0" />
		</div>
	);
}
