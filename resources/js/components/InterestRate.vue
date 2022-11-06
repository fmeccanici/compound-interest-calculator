<template>
    <div>
        <label
            class="font-bold text-sm"
            for="interest_rate"
        >
            Interest rate
        </label>
        <div
            id="interest_rate"
            class="flex items-center"
        >
            <input-field
                :value="interestRateInPercentages"
                class="p-1 rounded-lg border-solid border-2 border-gray-200"
                required="true"
                @input-update="handleInterestRateInPercentagesChange"
            >
            </input-field>
            <font-awesome-icon
                class="ml-2 text-2xl"
                icon="fa-solid fa-percent"
            />
        </div>
    </div>
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
