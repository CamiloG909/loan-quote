import React from "react";

const Total = ({ total, value, deadline }) => (
	<div>
		<p>Total: {total.toFixed(2)}</p>
		<p>Deadline: {deadline}</p>
		<p>Pago mensual: {(total / deadline).toFixed(2)}</p>
		<p>Value: {value}</p>
	</div>
);

export default Total;
