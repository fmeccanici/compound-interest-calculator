<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Compound Interest Calculator</title>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    </head>
    <body>
        <main x-data="calculator">
                <label for="currency">Currency:</label>
                <div id="currency" class="radio-switch">
                    <input name="currency" id="currency_1" type="radio" checked value="$">
                    <label @click="selectedCurrency = '$'" for="currency_1">$</label>

                    <input name="currency" id="currency_2" type="radio" value="€">
                    <label @click="selectedCurrency = '€'" for="currency_2">€</label>

                    <input name="currency" id="currency_3" type="radio" value="£">
                    <label @click="selectedCurrency = '£'" for="currency_3">£</label>
                </div>

                <label for="initial_balance">Initial balance:</label>
                <div id="initial_balance" class="initial_balance">
                    <label for="initial_balance" x-text="selectedCurrency"></label>
                    <input
                        required
                        x-model="initialBalance"
                        name="initial_balance"
                        id="initial_balance"
                        type="text">
                </div>

                <label for="interest_rate">Interest rate:</label>
                <div id="interest_rate" class="interest_rate">
                    <input
                        required
                        x-model="interestRateInPercentages"
                        name="interest_rate"
                        id="interest_rate"
                        type="text">
                </div>
                <div class="years_and_months">
                    <div class="years">
                        <label for="years">Years:</label>
                        <input
                            required
                            x-model="amountOfYears"
                            type="text"
                            placeholder="0">
                    </div>
                    <div class="months">
                        <label for="months">Months:</label>
                        <input
                            x-model="amountOfMonths"
                            type="text"
                            placeholder="0">
                    </div>
                </div>

                <label for="months">Compound interval:</label>
                <select
                    x-model="compoundInterval"
                    class="compound_interval"
                    name="compound_interval"
                    id="compound_interval">
                    <option value="yearly">Yearly (1/yr)</option>
                    <option value="quarterly">Quarterly (4/yr)</option>
                    <option value="monthly">Monthly (12/yr)</option>
                    <option value="daily">Daily (365/yr)</option>
                </select>

                <button @click="calculateTotalMoney();">
                    Calculate
                </button>
                <input
                    x-model="totalMoney"
                    type="text"
                >
                <label for="">Deposits:</label>
                <input
                    x-model="depositAmount"
                    type="text"
                >
            <label for="months">Compound interval:</label>
            <select
                x-model="depositInterval"
                class="deposit_interval"
                name="deposit_interval"
                id="deposit_interval">
                <option value="yearly">Yearly</option>
                <option value="quarterly">Quarterly</option>
                <option value="monthly">Monthly</option>
                <option value="daily">Daily</option>
            </select>

        </main>

    </body>
</html>
