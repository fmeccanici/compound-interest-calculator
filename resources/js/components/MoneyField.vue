<template>
    <div class="flex flex-col">
        <label
            class="font-bold text-sm"
            for="money"
        >
            {{ title }}
        </label>
        <div
            id="money"
        >
            <label
                class="p-1"
                for="money"
                v-text="currency"
            ></label>
            <input-field
                :value="amount"
                required="true"
                @input-update="handleAmountUpdate"
            >

            </input-field>
        </div>
    </div>
</template>

<script>
import InputField from './InputField.vue';

export default {
    name: "MoneyField",
    components: {
        InputField
    },
    props: ['currency', 'title', 'amount'],
    methods: {
        handleAmountUpdate() {
            this.$emit('amount-update', this.amount)
        }
    }
}
</script>

<style scoped>

</style>
