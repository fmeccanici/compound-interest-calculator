<template>
    <div class="flex justify-between">
        <div class="flex flex-col">
            <label
                class="font-bold text-sm"
                for="years"
            >
                Years
            </label>
            <input-field
                :value="amountOfYears"
                required="true"
                type="text"
                @input-update="handleAmountOfYearsUpdate"
            ></input-field>
        </div>
        <div class="flex flex-col">
            <label
                class="font-bold text-sm"
                for="months"
            >
                Months
            </label>
            <input-field
                :value="amountOfMonths"
                required="true"
                type="text"
                @input-update="handleAmountOfMonthsUpdate"
            ></input-field>
        </div>
    </div>
</template>

<script>
export default {
    name: "YearsAndMonths",
    data() {
        return {
            amountOfYears: 20,
            amountOfMonths: 0
        }
    },
    methods: {
        handleAmountOfYearsUpdate() {
            this.$emit('amount-of-years-update', this.amountOfYears);
        },
        handleAmountOfMonthsUpdate() {
            this.$emit('amount-of-months-update', this.amountOfMonths);
        }
    }
}
</script>

<style scoped>

</style>
