# Arbitrage Calculator

The Arbitrage Calculator is tool designed to assist punters in identifying and capitalizing on arbitrage opportunities in sports betting. When given odds for an event, this calculator evaluates and displays the exact stake amounts required to ensure a guaranteed profit. A light indicator feature quickly tells you whether the event can lock in profit or not.

[👉🏼 Test it here 👈🏼](https://lukereed1.github.io/arb-calculator/)
                        
## Features

- **Integration with Arb Finder Console App**: The calculator was designed to use in tandem with the [Arb Check Console App](https://github.com/lukereed1/arb-check-console) to source potential arbitrage opportunities.
- **Arb Detection with Visual Indicator**: Determine if a set of odds presents an arbitrage opportunity at a glance — the light goes green if you can lock in profit and red if not.
- **Stake Calculation**: Upon identifying arbs, receive precise stake amounts for each outcome to secure a profit.

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
   - Observe the light: green indicates profit can be locked in, while red suggests otherwise. If it's green, the calculator will also present the stake amounts for each outcome.

4. **Action**:
   - If the event is arbable (green light), utilize the given stake amounts when placing your bets with the respective bookmakers.
