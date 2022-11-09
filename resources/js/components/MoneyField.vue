<template>
    <input-field-leading-add-on :label="title" type="text" name="money" id="money" :add-on="currency" :value="amount" @input="handleAmountUpdate"></input-field-leading-add-on>
</template>

<script>
import InputFieldLeadingAddOn from './InputFieldLeadingAddOn.vue';

export default {
    name: "MoneyField",
    components: {
        InputFieldLeadingAddOn
    },
    props: ['currency', 'title', 'amount'],
    methods: {
        handleAmountUpdate(event) {
            this.$emit('amount-update', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>
