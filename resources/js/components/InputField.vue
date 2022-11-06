<template>
    <input v-if="type !== 'select'"
        class="p-1 rounded-lg border-gray-300 border-2 focus:border-primary focus:outline-none"
        :class="class"
        :type="type"
        :required="required"
        v-model="value"
        @input="handleInputUpdate"
    >

    <select
        class="p-1 rounded-lg border-gray-300 border-2 focus:border-primary focus:outline-none"
        @input="handleSelectInputUpdate"
        v-if="type === 'select'"
    >

        <option v-for="selectValue in selectValues" :value="selectValue.toLowerCase()"> {{ selectValue }}</option>
    </select>
</template>

<script>
export default {
    name: "InputField",
    emits: ['input-update'],
    props: ['type', 'class', 'required', 'value', 'selectValues'],
    methods: {
        handleInputUpdate(event) {
            this.$emit('input-update', event.target.value);
        },
        handleSelectInputUpdate(event) {
            this.$emit('input-update', event.target.value);
        }
    }
}
</script>

<style scoped>

</style>
