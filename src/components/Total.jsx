import React from "react";

const Total = ({ total, value, deadline }) => (
	<div className="info-result">
		<p className="info-result__title">Summary</p>
		<p className="info-result__text">
			Value: <span className="info-result__span">$ {value}</span>
		</p>
		<p className="info-result__text">
			Deadline: <span className="info-result__span">{deadline} months</span>
		</p>
		<p className="info-result__text">
			Monthly payment: <span className="info-result__span">
				$ {(total / deadline).toFixed(2)}
			</span>
		</p>
		<p className="info-result__text">
			Total: <span className="info-result__span">$ {total.toFixed(2)}</span>
		</p>
	</div>
);

export default Total;
