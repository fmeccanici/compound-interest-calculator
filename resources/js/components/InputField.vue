<template>
    <div v-if="type !== 'select'">
        <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <div class="mt-1">
            <input
                :type="type"
                :name="name"
                :id="id"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                :placeholder="placeholder"
                v-model="value"
                @input="handleInputUpdate"
            >
        </div>
    </div>

    <div v-if="type === 'select'" class="mt-2">
        <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <select
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm mt-1"
            @input="handleSelectInputUpdate"
        >

            <option v-for="selectValue in selectValues" :value="selectValue.toLowerCase()"> {{ selectValue }}</option>
        </select>
    </div>

</template>

<script>
export default {
    name: "InputField",
    emits: ['input-update'],
    props: ['type', 'class', 'required', 'value', 'selectValues', 'placeholder', 'name', 'id', 'label'],
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
