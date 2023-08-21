# Arbitrage Calculator

The Arbitrage Calculator is tool designed to assist punters in identifying and capitalizing on arbitrage opportunities in sports betting. When given odds for an event, this calculator evaluates and displays the exact stake amounts required to ensure a guaranteed profit. A light indicator feature quickly tells you whether the event can lock in profit or not.

[👉🏼 Test it here 👈🏼](https://lukereed1.github.io/arb-calculator/)

## What is Arbitrage?

Betting/sports arbitrage is an example of arbitrage arising on betting markets due to either bookmakers' differing opinions on event outcomes or errors. When conditions allow, by placing one bet per each outcome with different betting companies, the bettor can make a profit regardless of the outcome.
                  
## Features

- **Integration with Arb Check Console App**: The calculator was designed to use in tandem with the [Arb Check Console App](https://github.com/lukereed1/arb-check-console) to source potential arbitrage opportunities.
- **Arb Detection with Visual Indicator**: Determine if a set of odds presents an arbitrage opportunity at a glance — the light goes green if you can lock in profit and red if not.
- **Stake Calculation**: Upon identifying arbs, receive precise stake amounts for each outcome to secure a profit.
- **Bet outcomes**: Total payout, total profit and ROI percentage are calculated and shown.

## Prerequisites

To effectively use the Arbitrage Calculator, you'll need:

- Odds from bookmakers that might present an arbitrage opportunity, preferably sourced using the Arb Finder Console App.

## Installation and Usage

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/lukereed1/arb-calculator.git
   ```

2. **Navigate to the Repository Folder**:

   ```bash
   cd arb-calculator
   ```

3. **Open the HTML File**:
   Open `index.html` file with preferred browser.

### Usage

1. **Find Arbitrage opportunity**

   - Use the Arb Check Console Application to find arbitrage opportunities.

2. **Input Odds**:

   - Launch the Arbitrage Calculator.
   - Manually input the odds for each potential outcome of the event.

3. **Evaluate**:

   - Hit the 'Calculate' button.
   - Observe the light: green indicates profit can be locked in, while red suggests otherwise. The calculator will present the stake amounts for each outcome.
   - Total payout, profit and ROI percentage are also shown.
4. **Action**:
   - If the event is arbable (green light), utilize the given stake amounts when placing your bets with the respective bookmakers.
