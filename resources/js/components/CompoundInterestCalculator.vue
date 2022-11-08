<template>
    <div class="pl-5 pr-5 pt-5 m-3 rounded-lg border-solid border border-gray-300">

        <div class="space-y-8 divide-y divide-gray-200">
            <div class="space-y-8 divide-y divide-gray-200">
                <div>
                    <currency-switch
                        class="col-span-4 mb-3"
                        :currencies="['€', '$', '£']"
                        @selected-currency-update="onSelectedCurrencyUpdate"
                    ></currency-switch>
                    <money-field
                        title="Initial balance"
                        :currency="selectedCurrency"
                        :amount="initialBalance"
                        @amount-update="onInitialBalanceUpdate"
                    ></money-field>
                    <interest-rate
                        class="col-span-2"
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
                        class="col-span-3 mt-2"></compound-frequency>

                </div>

                <div>
                    <deposits-and-withdrawals
                        @deposit-amount-update="onDepositAmountUpdate"
                        @deposit-frequency-update="onDepositFrequencyUpdate"
                        class="col-span-3 mt-5"
                    ></deposits-and-withdrawals>
                </div>

                <div>
                    <input-field-leading-add-on label="Total money" type="text" name="money" id="money" :add-on="selectedCurrency" :value="totalMoney"></input-field-leading-add-on>
                </div>
            </div>

            <div class="pt-5 pb-5">
                <div class="flex justify-end">
                    <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Reset</button>
                    <button @click="calculateTotalMoney()" type="submit" class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-wet-asphalt focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Calculate</button>
                </div>
            </div>
        </div>


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
