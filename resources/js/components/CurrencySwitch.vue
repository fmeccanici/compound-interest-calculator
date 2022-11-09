<template>
    <div class="flex flex-col">
        <label
            class="block text-sm font-medium text-gray-700 mb-2"
            for="currencies"
        >
            Currency
        </label>

        <div
            class="inline-flex"
            id="currencies"
        >
            <currency-radio-button
                v-for="(currency, index) in currencies"
                :currency="currency"
                :selected="selectedCurrency === currency"
                @selected="onRadioButtonSelected"
                :index="index"
                :amountOfCurrencies="currencies.length"
              >
            </currency-radio-button>
        </div>
    </div>

</template>

<script>
export default {
    name: "CurrencyRadioButtons",
    props: ['currencies'],
    data() {
        return {
            selectedCurrency : '€',
        }
    },
    methods: {
        onRadioButtonSelected(currency) {
            this.selectedCurrency = currency;
            this.$emit('selected-currency-update', this.selectedCurrency)
        }
    }

}
</script>

<style scoped>

</style>
