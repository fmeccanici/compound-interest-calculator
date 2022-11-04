<template>
    <div>
        <label for="">Deposits:</label>
        <input
            v-model="depositAmount"
            type="text"
        >
        <label for="months">Deposit frequency:</label>
        <select
            v-model="depositInterval"
            class="deposit_interval"
            name="deposit_interval"
            id="deposit_interval">
            <option value="yearly">Yearly</option>
            <option value="quarterly">Quarterly</option>
            <option value="monthly">Monthly</option>
            <option value="daily">Daily</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "DepositsAndWithdrawals",
    data() {
        return {
            depositAmount: null,
            depositInterval: null
        }
    }
}
</script>

<style scoped>

</style>
