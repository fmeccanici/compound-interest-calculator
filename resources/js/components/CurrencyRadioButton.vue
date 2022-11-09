<template>
    <div>
        <input
            name="currency"
            id="currency"
            :key="'currency_' + this.currency"
            type="radio"
            :checked="selected"
            class="opacity-0 fixed w-0"
        >

        <label
            for="currency"
            @click="this.select"
            class="cursor-pointer pt-2 pb-2 pr-4 pl-4 bg-white border-solid border-gray-300 border-l border-t border-b"
            :class="{ 'bg-midnight-blue text-white' : selected, 'rounded-l-lg' : this.index === 0, 'rounded-r-lg border-r-2' : this.index + 1 === this.amountOfCurrencies }"
        >
            {{ currency }}
        </label>
    </div>
</template>

<script>
export default {
    name: "CurrencyRadioButton",
    props: ['currency', 'selected', 'index', 'amountOfCurrencies'],
    emits: ['selected'],
    methods: {
        select() {
            this.$emit('selected', this.currency)
        }
    }
}
</script>

<style scoped>

</style>
