import React from "react";
import { quoteTotal } from "../helpers";
import { toast, Toaster } from "react-hot-toast";

const Form = (props) => {
	const { value, saveValue, deadline, saveDeadline, saveTotal, saveLoading } =
		props;

	const loanQuote = (e) => {
		e.preventDefault();

		if (value === 0 || deadline === 0) {
			return toast.error("Please, fill all fields");
		}

		// Show spinner
		saveLoading(true);

		setTimeout(() => {
			const total = quoteTotal(value, deadline);
			saveTotal(total);

			saveLoading(false);
			toast.success("Successfully");
		}, 500);
	};

	return (
		<section className="container-form">
			<form className="form" onSubmit={loanQuote}>
				<p className="form__subtitle">Value</p>
				<input
					className="form__input"
					type="number"
					placeholder="Type value here..."
					onChange={(e) => saveValue(Number(e.target.value))}
				/>
				<p className="form__subtitle">Deadline to pay</p>
				<select
					className="form__select"
					onChange={(e) => saveDeadline(Number(e.target.value))}
				>
					<option value="">Select option</option>
					<option value="3">3 months</option>
					<option value="6">6 month</option>
					<option value="12">12 months</option>
					<option value="24">24 months</option>
				</select>
				<button className="form__btn">
					Quote <i className="bi bi-calculator-fill"></i>
				</button>
			</form>
			<Toaster
				position="bottom-center"
				toastOptions={{
					duration: 1300,
					style: {
						background: "#363636",
						color: "#fff",
						fontSize: "1.5rem",
					},
				}}
			/>
		</section>
	);
};

export default Form;
