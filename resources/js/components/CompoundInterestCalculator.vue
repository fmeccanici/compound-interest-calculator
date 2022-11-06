<template>
    <div class="grid grid-cols-4 bg-slate-200 p-3 m-3 rounded-lg border-solid border-2 border-gray-300">

        <currency-switch
            class="col-span-4"
            :currencies="['€', '$', '£']"
            @selected-currency-update="onSelectedCurrencyUpdate"
        ></currency-switch>

        <money-field
            title="Initial balance"
            :currency="selectedCurrency"
            :amount="initialBalance"
            @amount-update="onInitialBalanceUpdate"
            class="col-span-4 mt-10"
        ></money-field>


        <interest-rate
            class="col-span-4 mt-2"
            @interest-rate-update="onInterestRateUpdate"
        ></interest-rate>

        <years-and-months
            class="col-span-3 mt-2"
            @amount-of-years-update="onAmountOfYearsUpdate"
            @amount-of-months-update="onAmountOfMonthsUpdate"
        >
        </years-and-months>

        <compound-frequency
            @compound-frequency-update="onCompoundFrequencyUpdate"
            class="mb-2 col-span-3 mt-2"></compound-frequency>

        <deposits-and-withdrawals
            @deposit-amount-update="onDepositAmountUpdate"
            @deposit-frequency-update="onDepositFrequencyUpdate"
            class="col-span-3"
        ></deposits-and-withdrawals>

        <button
            class="col-span-4 w-full bg-primary rounded-lg mt-5 mb-5 text-white"
            @click="calculateTotalMoney()"
        >
            Calculate
        </button>

        <money-field
            class="col-span-4 mb-2"
            :amount="totalMoney"
            title="Total money"
            :currency="selectedCurrency"
        ></money-field>

        <money-field
            class="col-span-4 mb-2"
            :amount="investedMoney"
            title="Invested money"
            :currency="selectedCurrency"
        ></money-field>

        <money-field
            class="col-span-4 "
            :amount="interestEarned"
            title="Interest earned"
            :currency="selectedCurrency"
        ></money-field>

    </div>
</template>

<script>
import CurrencySwitch from "./CurrencySwitch.vue";
import MoneyField from "./MoneyField.vue"

export default {
    name: "CompoundInterestCalculator",
    components: {
        CurrencySwitch,
        MoneyField
    },
    data () {
        return {
            initialBalance : 1000,
            interestRateInPercentages : 7,
            amountOfYears: 20,
            amountOfMonths: 0,
            compoundInterval: 'yearly',
            totalMoney: null,
            depositAmount : null,
            depositFrequency : 'yearly',
            selectedCurrency : '€'
        }
    },
    methods: {
        calculateTotalMoney() {
            // Formulae from https://www.wallstreetiswaiting.com/running-the-numbers-1/calculating-interest-recurring-payments/
            let interestRate = this.interestRateInPercentages / 100;
            let totalMoneyWithoutDeposits = this.initialBalance * Math.pow((1 + interestRate / this.totalCompoundsPerYear), this.totalCompoundTime);

            if (this.withDeposits)
            {
                let compound = Math.pow((1 + interestRate / this.totalCompoundsPerYear), this.totalCompoundTime);

                let totalMoneyWithDeposits = this.totalAmountOfDepositsPerYear * (compound - 1) / interestRate;

                this.totalMoney = totalMoneyWithoutDeposits + totalMoneyWithDeposits;
            } else {
                this.totalMoney = totalMoneyWithoutDeposits;
            }

            this.totalMoney = Math.round(this.totalMoney * 100) / 100;
        },
        onInitialBalanceUpdate(initialBalance)
        {
            this.initialBalance = initialBalance;
        },
        onInterestRateUpdate(interestRate)
        {
            this.interestRateInPercentages = interestRate;
        },
        onSelectedCurrencyUpdate(currency)
        {
            this.selectedCurrency = currency;
        },
        onAmountOfYearsUpdate(years)
        {
            this.amountOfYears = years;
        },
        onAmountOfMonthsUpdate(months)
        {
            this.amountOfMonths = months;
        },
        onCompoundFrequencyUpdate(compoundFrequency)
        {
            this.compoundInterval = compoundFrequency;
        },
        onDepositAmountUpdate(depositAmount)
        {
            this.depositAmount = depositAmount;
        },
        onDepositFrequencyUpdate(depositFrequency)
        {
            this.depositFrequency = depositFrequency;
        }
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
            if (this.depositFrequency  === 'yearly')
            {
                return this.depositAmount;
            } else if (this.depositFrequency  === 'monthly')
            {
                return this.depositAmount * 12;
            } else if (this.depositFrequency  === 'quarterly')
            {
                return this.depositAmount * 4;
            } else if (this.depositFrequency  === 'daily')
            {
                return this.depositAmount * 365;
            }
        },
        withDeposits() {
            return this.depositFrequency !== null && this.depositAmount !== null;
        },
        investedMoney() {
            if (this.withDeposits)
            {
                return this.initialBalance + this.totalAmountOfDepositsPerYear * this.amountOfYears
            }

            return this.initialBalance;
        },
        interestEarned() {
            if (this.totalMoney)
            {
                return this.totalMoney - this.investedMoney;
            }

            return null;
        }
    }

}
</script>

<style scoped>

</style>
