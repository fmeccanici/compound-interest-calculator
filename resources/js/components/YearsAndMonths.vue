<template>
    <div class="flex justify-around">
        <div class="flex flex-col">
            <label
                class="font-bold text-sm"
                for="years"
            >
                Years
            </label>
            <input
                class="w-1/2 p-1 border-solid border-2 border-gray-200 rounded-lg"
                required
                v-model="amountOfYears"
                type="text">
        </div>
        <div class="flex flex-col">
            <label
                class="font-bold text-sm"
                for="months"
            >
                Months
            </label>
            <input
                class="w-1/2 p-1 border-solid border-2 border-gray-200 rounded-lg"
                v-model="amountOfMonths"
                type="text">
        </div>
    </div>
</template>

<script>
export default {
    name: "YearsAndMonths",
    data() {
        return {
            amountOfYears: null,
            amountOfMonths: null
        }
    }
}
</script>

<style scoped>

</style>
