import React, { Fragment, useState } from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Message from "./components/Message.jsx";
import Total from "./components/Total.jsx";
import Spinner from "./components/Spinner.jsx";

function App() {
	const [value, saveValue] = useState(0);
	const [deadline, saveDeadline] = useState(0);
	const [total, saveTotal] = useState(0);
	const [loading, saveLoading] = useState(false);

	let component;

	if (loading) {
		component = <Spinner />;
	} else if (total === 0) {
		component = <Message />;
	} else {
		component = <Total total={total} deadline={deadline} value={value} />;
	}
	return (
		<Fragment>
			<Header title="Loan quote" />
			<main>
				<Form
					value={value}
					saveValue={saveValue}
					deadline={deadline}
					saveDeadline={saveDeadline}
					total={total}
					saveTotal={saveTotal}
					saveLoading={saveLoading}
				/>

				{component}
			</main>
		</Fragment>
	);
}

export default App;
