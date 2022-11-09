<template>
    <div class="flex flex-col pt-4">
        <div
            class="flex items-center"
            :class="{ 'mb-6' : showDeposits, 'mb-2' : ! showDeposits }"
        >

            <button @click="toggleShowDeposits"
                    type="button"
                    :class="{ 'bg-primary' : showDeposits, 'bg-gray-200' : ! showDeposits }"
                    class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    role="switch"
                    aria-checked="false"
                    aria-labelledby="annual-billing-label">
                <span aria-hidden="true"
                    :class="{ 'translate-x-5' : showDeposits, 'translate-x-0' : ! showDeposits }"
                    class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                ></span>
            </button>
            <span class="ml-3" id="annual-billing-label">
            <span class="text-sm font-medium text-gray-900">Deposits</span>
          </span>
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
