export default {
    selectedCurrency : '$',
    initialBalance : 100,
    interestRateInPercentages : 4,
    amountOfYears: 10,
    amountOfMonths: 0,
    compoundInterval: 'yearly',
    totalMoney: null,
    depositAmount : 100,
    depositInterval: 'yearly',

    calculateTotalMoney() {
        // Formulae from https://www.wallstreetiswaiting.com/running-the-numbers-1/calculating-interest-recurring-payments/
        let interestRate = this.interestRateInPercentages / 100;
        let totalMoneyWithoutDeposits = this.initialBalance * Math.pow((1 + interestRate / this.totalCompoundsPerYear), this.totalCompoundTime);

        let compound = Math.pow((1 + interestRate / this.totalCompoundsPerYear), this.totalCompoundTime);

        let totalMoneyWithDeposits = this.totalAmountOfDepositsPerYear * (compound - 1) / interestRate;
        this.totalMoney = Math.round((totalMoneyWithoutDeposits + totalMoneyWithDeposits) * 100 ) / 100;
        },
    get totalCompoundTime() {
        return this.amountOfYears * this.totalCompoundsPerYear;
    },
    get totalCompoundsPerYear()  {
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

    get totalAmountOfDepositsPerYear() {
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
