<template>
    <div class="pl-5 pr-5 pt-5 m-3 rounded-lg border-solid border border-gray-300">

        <div class="space-y-8 divide-y divide-gray-200">
            <div class="space-y-8 divide-y divide-gray-200">
                <div class="space-y-5">
                    <currency-switch
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
                        class="col-span-3"
                        @amount-of-years-update="onAmountOfYearsUpdate"
                        @amount-of-months-update="onAmountOfMonthsUpdate"
                    >
                    </years-and-months>

                    <compound-frequency
                        @compound-frequency-update="onCompoundFrequencyUpdate"
                        class="col-span-3"></compound-frequency>

                </div>

                <div>
                    <deposits-and-withdrawals
                        @use-deposits="onUseDepositsUpdate"
                        @deposit-amount-update="onDepositAmountUpdate"
                        @deposit-frequency-update="onDepositFrequencyUpdate"
                        class="col-span-3 mt-5"
                    ></deposits-and-withdrawals>
                </div>

                <div class="flex md:flex-row md:space-x-10 flex-col items-left space-y-5 md:space-y-0  pt-7">
                    <output-field-leading-add-on
                        label="Total earned money"
                        id="money"
                        :add-on="selectedCurrency"
                        :show-output="calculateClicked"
                        :value="totalMoney"
                    ></output-field-leading-add-on>
                    <output-field-leading-add-on
                        label="Invested money"
                        id="money"
                        :add-on="selectedCurrency"
                        :show-output="calculateClicked"
                        :value="investedMoney"
                    ></output-field-leading-add-on>
                    <output-field-leading-add-on
                        label="Interest earned"
                        id="money"
                        :add-on="selectedCurrency"
                        :show-output="calculateClicked"
                        :value="interestEarned"
                    ></output-field-leading-add-on>
                </div>
            </div>

            <div class="pt-5 pb-5">
                <div class="flex justify-end">
                    <button @click="handleResetClicked()" type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Reset</button>
                    <button @click="handleCalculateClick()" type="submit" class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-wet-asphalt focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Calculate</button>
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
            selectedCurrency : '€',
            calculateClicked : false,
            investedMoney : null,
            interestEarned : null,
            useDeposits : false
        }
    },
    methods: {
        handleCalculateClick() {
            this.calculateClicked = true;
            this.calculateTotalMoney();
            this.calculateInvestedMoney();
            this.calculateInterestEarned();
        },
        handleResetClicked() {
            this.calculateClicked = false;
        },
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
        },
        calculateInvestedMoney() {
            if (this.withDeposits)
            {
                this.investedMoney = Math.round((this.initialBalance + this.totalAmountOfDepositsPerYear * this.amountOfYears) * 100) / 100;
            } else {
                this.investedMoney = Math.round(this.initialBalance * 100) / 100;
            }
        },
        calculateInterestEarned() {
            if (this.totalMoney)
            {
                this.interestEarned = Math.round((this.totalMoney - this.investedMoney) * 100) / 100;
            } else {
                this.interestEarned = null;
            }
        },
        onUseDepositsUpdate(useDeposits)
        {
            this.useDeposits = useDeposits;
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
            return this.useDeposits && this.depositFrequency !== null && this.depositAmount !== null ;
        },
    }

}
</script>

<style scoped>

</style>
