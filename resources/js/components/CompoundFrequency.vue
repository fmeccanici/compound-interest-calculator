<template>
    <div>
        <label for="months">Compound frequency:</label>
        <select
            v-model="compoundInterval"
            class="compound_interval"
            name="compound_interval"
            id="compound_interval">
            <option value="yearly">Yearly (1/yr)</option>
            <option value="quarterly">Quarterly (4/yr)</option>
            <option value="monthly">Monthly (12/yr)</option>
            <option value="daily">Daily (365/yr)</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "CompoundFrequency",
    data() {
        return {
            compoundInterval: 'yearly'
        }
    }
}
</script>

<style scoped>

</style>
