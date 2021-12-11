import React, { Fragment, useState } from "react";
import { quoteTotal } from "../helpers";

const Form = (props) => {
	const { value, saveValue, deadline, saveDeadline, saveTotal, saveLoading } =
		props;

	const [error, saveError] = useState(false);

	const loanQuote = (e) => {
		e.preventDefault();

		if (value === 0 || deadline === 0) {
			return saveError(true);
		}

		saveError(false);

		// Show spinner
		saveLoading(true);

		setTimeout(() => {
			const total = quoteTotal(value, deadline);
			saveTotal(total);

			saveLoading(false);
		}, 1000);
	};

	return (
		<Fragment>
			<form onSubmit={loanQuote}>
				<p>Value</p>
				<input
					type="number"
					placeholder="Value"
					onChange={(e) => saveValue(Number(e.target.value))}
				/>
				<p>Deadline to pay</p>
				<select onChange={(e) => saveDeadline(Number(e.target.value))}>
					<option value="">Select option</option>
					<option value="3">3 months</option>
					<option value="6">6 month</option>
					<option value="12">12 months</option>
					<option value="24">24 months</option>
				</select>
				<button>
					Quote <i className="bi bi-calculator-fill"></i>
				</button>
			</form>
			{error ? (
				<div>
					<p>All fields are required</p>
				</div>
			) : null}
		</Fragment>
	);
};

export default Form;
