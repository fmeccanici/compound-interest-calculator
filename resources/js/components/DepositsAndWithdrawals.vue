<template>
    <div class="flex flex-col">
        <div class="flex flex-col">
            <label
                class="font-bold text-sm"
                for="deposit_amount">
                Deposits
            </label>
            <input-field
                required="false"
                type="text"
                @input-update="handleDepositAmountUpdate"
            >

            </input-field>
        </div>
        <div class="flex flex-col mt-2">
            <label for="months" class="font-bold text-sm">Deposit frequency</label>
            <input-field
                type="select"
                :select-values="['Yearly', 'Quarterly', 'Monthly', 'Daily']"
                @input-update="handleDepositFrequencyUpdate"
            ></input-field>
        </div>
    </div>
</template>

<script>
export default {
    name: "DepositsAndWithdrawals",
    emits: ['deposit-amount-update', 'deposit-frequency-update'],
    data() {
        return {
            depositAmount: null,
            depositFrequency: null
        }
    },
    methods: {
        handleDepositFrequencyUpdate(depositFrequency) {
            this.$emit('deposit-frequency-update', depositFrequency);
        },
        handleDepositAmountUpdate(depositAmount) {
            this.$emit('deposit-amount-update', depositAmount);
        }
    }
}
</script>

<style scoped>

</style>
