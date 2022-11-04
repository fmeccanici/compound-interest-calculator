<template>
    <div>
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
                v-model="initialBalance"
                name="initial_balance"
                id="initial_balance"
                type="text">
        </div>

        <label for="interest_rate">Interest rate:</label>
        <div id="interest_rate" class="interest_rate">
            <input
                required
                v-model="interestRateInPercentages"
                name="interest_rate"
                id="interest_rate"
                type="text">
        </div>
        <div class="years_and_months">
            <div class="years">
                <label for="years">Years:</label>
                <input
                    required
                    v-model="amountOfYears"
                    type="text"
                    placeholder="0">
            </div>
            <div class="months">
                <label for="months">Months:</label>
                <input
                    v-model="amountOfMonths"
                    type="text"
                    placeholder="0">
            </div>
        </div>

        <label for="months">Compound frequency:</label>
        <select
            v-model="compoundInterval"
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
            v-model="totalMoney"
            type="text"
        >
        <label for="">Deposits:</label>
        <input
            v-model="depositAmount"
            type="text"
        >
        <label for="months">Deposit frequency:</label>
        <select
            v-model="depositInterval"
            class="deposit_interval"
            name="deposit_interval"
            id="deposit_interval">
            <option value="yearly">Yearly</option>
            <option value="quarterly">Quarterly</option>
            <option value="monthly">Monthly</option>
            <option value="daily">Daily</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "CompoundInterestCalculator",
    data () {
        return {
            selectedCurrency : '$',
            initialBalance : 100,
            interestRateInPercentages : 4,
            amountOfYears: 10,
            amountOfMonths: 0,
            compoundInterval: 'yearly',
            totalMoney: null,
            depositAmount : 100,
            depositInterval: 'yearly',
        }
    },
    methods: {
        calculateTotalMoney() {
            // Formulae from https://www.wallstreetiswaiting.com/running-the-numbers-1/calculating-interest-recurring-payments/
            let interestRate = this.interestRateInPercentages / 100;
            let totalMoneyWithoutDeposits = this.initialBalance * Math.pow((1 + interestRate / this.totalCompoundsPerYear), this.totalCompoundTime);

            let compound = Math.pow((1 + interestRate / this.totalCompoundsPerYear), this.totalCompoundTime);

            let totalMoneyWithDeposits = this.totalAmountOfDepositsPerYear * (compound - 1) / interestRate;
            this.totalMoney = Math.round((totalMoneyWithoutDeposits + totalMoneyWithDeposits) * 100 ) / 100;
        },
    },
    computed: {
        totalCompoundTime() {
            return this.amountOfYears * this.totalCompoundsPerYear;
        },
        totalCompoundsPerYear()  {
            if (this.compoundInterval === 'yearly')
            {
                return 1;
            } else if (this.compoundInterval === 'monthly')
            {
                return 12
            } else if (this.compoundInterval === 'quarterly')
            {
                return 4;
            } else if (this.compoundInterval === 'daily')
            {
                return 365;
            }
        },
        totalAmountOfDepositsPerYear() {
            if (this.depositInterval === 'yearly')
            {
                return this.depositAmount;
            } else if (this.depositInterval === 'monthly')
            {
                return this.depositAmount * 12;
            } else if (this.depositInterval === 'quarterly')
            {
                return this.depositAmount * 4;
            } else if (this.depositInterval === 'daily')
            {
                return this.depositAmount * 365;
            }
        }
    }

}
</script>

<style scoped>

</style>
