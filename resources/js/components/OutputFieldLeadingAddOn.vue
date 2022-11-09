<template>
    <div :class="class">
        <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <div
            class="relative mt-1 rounded-md"
            :class="{ 'invisible' : ! showOutput, 'visible' : showOutput }"
        >
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">{{ addOn }}</span>
            </div>
            <p
                :id="id"
                class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-primary focus:ring-primary sm:text-sm mt-1"
                v-text="value"
                @input="handleInputUpdate"
            ></p>
        </div>
    </div>

</template>

<script>
export default {
    name: "OutputFieldLeadingAddOn",
    emits: ['input-update'],
    props: ['type', 'class', 'required', 'value', 'selectValues', 'placeholder', 'name', 'id', 'label', 'addOn', 'showOutput'],
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
