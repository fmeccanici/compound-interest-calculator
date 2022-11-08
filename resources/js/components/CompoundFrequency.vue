<template>
    <div class="flex flex-col">
        <input-field
            label="Compound frequency"
            type="select"
            :select-values="['Yearly (1/yr)', 'Quarterly (4/yr)', 'Monthly (12/yr)', 'Daily (365/yr)']"
            @input-update="handleCompoundFrequencyUpdate"
        ></input-field>

    </div>
</template>

<script>
export default {
    name: "CompoundFrequency",
    data() {
        return {
            compoundFrequency: 'yearly'
        }
    },
    methods: {
        handleCompoundFrequencyUpdate()
        {
            this.$emit('compound-frequency-update', this.compoundFrequency)
        }
    }
}
</script>

<style scoped>

</style>
