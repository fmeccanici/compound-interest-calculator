<template>
    <input-field-leading-add-on label="Interest rate" type="text" name="money" id="money" add-on="%" :value="interestRateInPercentages" @input="handleInterestRateInPercentagesChange"></input-field-leading-add-on>
</template>

<script>
import InputField from './InputField.vue';

export default {
    name: "InterestRate",
    components: {
        InputField
    },
    data() {
        return {
            interestRateInPercentages : 7
        }
    },
    methods: {
        handleInterestRateInPercentagesChange(event) {
            this.$emit('interest-rate-update', this.interestRateInPercentages);
        }
    }

}
</script>

<style scoped>

</style>
