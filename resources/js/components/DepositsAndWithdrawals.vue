<template>
    <div class="flex">
        <div class="flex flex-col">
            <label
                for="deposit_amount">
                Deposits
            </label>
            <input
                class="p-1 rounded-lg"
                name="deposit_amount"
                v-model="depositAmount"
                type="text"
            >
        </div>
        <div class="flex flex-col">
            <label for="months">Deposit frequency</label>
            <select
                v-model="depositFrequency"
                class="p-1 rounded-lg"
                name="deposit_frequency"
                id="deposit_frequency">
                <option value="yearly">Yearly</option>
                <option value="quarterly">Quarterly</option>
                <option value="monthly">Monthly</option>
                <option value="daily">Daily</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: "DepositsAndWithdrawals",
    data() {
        return {
            depositAmount: null,
            depositFrequency: null
        }
    }
}
</script>

<style scoped>

</style>
