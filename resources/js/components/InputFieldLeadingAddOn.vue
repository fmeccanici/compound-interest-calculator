<template>
<!--    <input v-if="type !== 'select'"-->
<!--        :type="type"-->
<!--        :name="name"-->
<!--        :id="name"-->
<!--        class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-primary focus:ring-primary sm:text-sm"-->
<!--        :class="class"-->
<!--        :placeholder="placeholder"-->
<!--        v-model="value"-->
<!--        @input="handleInputUpdate"-->
<!--    >-->

    <div class="mt-2">
        <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <div class="relative mt-1 rounded-md shadow-sm">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">{{ addOn }}</span>
            </div>
            <input
                :type="type"
                :name="name"
                :id="id"
                class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-primary focus:ring-primary sm:text-sm"
                :placeholder="placeholder"
                v-model="value"
                @input="handleInputUpdate"
            >
        </div>
    </div>

</template>

<script>
export default {
    name: "InputField",
    emits: ['input-update'],
    props: ['type', 'class', 'required', 'value', 'selectValues', 'placeholder', 'name', 'id', 'label', 'addOn'],
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
