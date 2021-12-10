export function quoteTotal(value, months) {
	// Values
	// 0 - 1000 = 25%
	// 1001 - 5000 = 20%
	// 5001 - 10000 = 15%
	// +10000 = 10%

	let totalValue;

	if (value <= 1000) {
		totalValue = value * 0.25;
	} else if (value > 1000 && value <= 5000) {
		totalValue = value * 0.2;
	} else if (value > 5000 && value <= 10000) {
		totalValue = value * 0.15;
	} else if (value > 10000) {
		totalValue = value * 0.1;
	}

	// Deadline
	// 3 = 5%
	// 6 = 10%
	// 12 = 15%
	// 24 = 20%

	let totalDeadline;

	if (months === 3) {
		totalDeadline = value * 0.05;
	} else if (months === 6) {
		totalDeadline = value * 0.1;
	} else if (months === 12) {
		totalDeadline = value * 0.15;
	} else if (months === 24) {
		totalDeadline = value * 0.2;
	}

	return totalValue + totalDeadline + value;
}
