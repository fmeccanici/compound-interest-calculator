<template>
    <div class="mt-2">
        <label
            class="font-bold text-sm"
            for="initial_balance"
        >
            Initial balance
        </label>
        <div
            id="initial_balance"
        >
            <label
                class="p-1 border-solid border-2 border-gray-300 pl-2 pr-2 rounded-l-lg"
                for="initial_balance"
                v-text="selectedCurrency"
            ></label>
            <input
                class="p-1 rounded-r-lg w-3/4"
                required
                v-model="initialBalance"
                name="initial_balance"
                id="initial_balance"
                type="text"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "InitialBalance",
    data() {
        return {
            initialBalance: null,
            selectedCurrency: '€'
        }
    }
}
</script>

<style scoped>

</style>
