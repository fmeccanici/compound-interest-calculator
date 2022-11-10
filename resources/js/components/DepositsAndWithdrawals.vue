<template>
    <div class="flex flex-col pt-4">
        <div
            class="flex items-center"
            :class="{ 'mb-6' : showDeposits, 'mb-2' : ! showDeposits }"
        >
            <label @input="toggleShowDeposits" for="toggleDeposits" class="flex items-center cursor-pointer">
                <!-- toggle -->
                <div class="relative">
                    <input type="checkbox" id="toggleDeposits" class="sr-only">
                    <!-- line -->
                    <div :class="{ 'bg-primary' : showDeposits, 'bg-gray-200' : ! showDeposits }"
                         class="block w-12 h-7 rounded-full"></div>
                    <!-- dot -->
                    <div
                        :class="{ 'translate-x-5' : showDeposits, 'translate-x-0' : ! showDeposits }"
                        class="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition"></div>
                </div>
                <!-- label -->
                <div class="ml-3 text-sm">
                    Deposits
                </div>
            </label>
        </div>

        <div v-show="showDeposits" class="flex flex-col">
            <input-field
                label="Amount"
                required="false"
                type="text"
                @input-update="handleDepositAmountUpdate"
            >

            </input-field>
        </div>
        <div v-show="showDeposits" class="flex flex-col mt-2 pb-1">
            <input-field
                label="Deposit frequency"
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
    emits: ['deposit-amount-update', 'deposit-frequency-update', 'use-deposits'],
    data() {
        return {
            depositAmount: null,
            depositFrequency: null,
            showDeposits : false
        }
    },
    methods: {
        toggleShowDeposits() {
            this.showDeposits = ! this.showDeposits;
            this.$emit('use-deposits', this.showDeposits);
        },
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
