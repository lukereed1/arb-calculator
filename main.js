const odds1 = document.getElementById("odds1");
const odds2 = document.getElementById("odds2");
const totalStake = document.getElementById("total-stake");
const calcButton = document.getElementById("calc");

const odds1Stake = document.getElementById("odds1-stake");
const odds2Stake = document.getElementById("odds2-stake");

const totalPayout = document.getElementById("total-payout");
const profit = document.getElementById("profit");
const roi = document.getElementById("roi");

calcButton.addEventListener("click", () => calculate());

function calculate() {
	if (odds1.value === "" || odds2.value === "" || totalStake.value === "") {
		alert("Please fill in the odds 1, odds 2, and total stake field ");
		return;
	}

	if (isNaN(odds1.value) || isNaN(odds2.value) || isNaN(totalStake.value)) {
		alert("Please enter a number into each field");
		return;
	}

	// // Calculate implied probabilities
	const impliedProbability1 = 1 / odds1.value;
	const impliedProbability2 = 1 / odds2.value;

	// // Calculate the total implied probability
	const totalImpliedProbability = impliedProbability1 + impliedProbability2;

	// Calculate individual stakes for both odds
	const odds1StakeAmount =
		+totalStake.value *
		(impliedProbability1 / totalImpliedProbability).toFixed(2);
	const odds2StakeAmount =
		+totalStake.value *
		(impliedProbability2 / totalImpliedProbability).toFixed(2);

	odds1Stake.value = "$" + odds1StakeAmount;
	odds2Stake.value = "$" + odds2StakeAmount;

	// Calculate total payout
	const totalPayoutAmount = (
		(1 / totalImpliedProbability) *
		+totalStake.value
	).toFixed(2);

	totalPayout.value = "$" + totalPayoutAmount;

	// Calculate total profit
	const totalProfit = (totalPayoutAmount - totalStake.value).toFixed(2);
	profit.value = "$" + totalProfit;

	// Calculate ROI percentage
	const roiAmount = ((totalProfit / totalStake.value) * 100).toFixed(2);
	roi.value = roiAmount + "%";
}
