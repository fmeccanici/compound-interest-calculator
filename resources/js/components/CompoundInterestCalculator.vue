<template>
    <div class="bg-slate-200 p-3 m-3 w-1/3 rounded-lg border-solid border-2 border-gray-300">

        <currency-switch :currencies="['€', '$', '£']"></currency-switch>

        <initial-balance></initial-balance>

        <div class="flex">
            <interest-rate></interest-rate>
            <years-and-months></years-and-months>
        </div>

        <compound-frequency></compound-frequency>

        <deposits-and-withdrawals></deposits-and-withdrawals>

        <button

            @click="calculateTotalMoney()"
        >
            Calculate
        </button>
        <input
            v-model="totalMoney"
            type="text"
        >

    </div>
</template>

<script>
import CurrencyRadioButtons from "./CurrencySwitch.vue";
import InitialBalance from "./InitialBalance.vue";

export default {
    name: "CompoundInterestCalculator",
    components: {
        CurrencyRadioButtons,
        InitialBalance
    },
    data () {
        return {
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
