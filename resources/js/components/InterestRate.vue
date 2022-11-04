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
            <input
                class="p-1 rounded-lg border-solid border-2 border-gray-200 w-1/2"
                required
                v-model="interestRateInPercentages"
                name="interest_rate"
                id="interest_rate"
                type="text"
            >
                <font-awesome-icon
                    class="ml-2 text-2xl"
                    icon="fa-solid fa-percent"
                />
        </div>
    </div>
</template>

<script>
export default {
    name: "InterestRate",
    data() {
        return {
            interestRateInPercentages : null
        }
    }
}
</script>

<style scoped>

</style>
