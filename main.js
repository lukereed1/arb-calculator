function arbitrageCalculator(odds1, odds2, totalStake) {
	// Calculate implied probabilities
	const impliedProbability1 = 1 / odds1;
	const impliedProbability2 = 1 / odds2;

	// Calculate the total implied probability
	const totalImpliedProbability = impliedProbability1 + impliedProbability2;

	// If totalImpliedProbability is less than or equal to 1, it's an arbitrage opportunity
	if (totalImpliedProbability <= 1) {
		// Calculate individual stakes for both odds
		const stake1 = totalStake * (impliedProbability1 / totalImpliedProbability);
		const stake2 = totalStake * (impliedProbability2 / totalImpliedProbability);

		// Calculate potential payouts
		const payout1 = stake1 * odds1;
		const payout2 = stake2 * odds2;

		return {
			stake1: stake1,
			stake2: stake2,
			payout1: payout1,
			payout2: payout2,
			profit: Math.min(payout1, payout2) - totalStake,
		};
	} else {
		return {
			message: "Not an arbitrage opportunity",
		};
	}
}

// Test the calculator
const odds1 = 1.5;
const odds2 = 3.5;
const totalStake = 100;

const result = arbitrageCalculator(odds1, odds2, totalStake);
console.log(result);
