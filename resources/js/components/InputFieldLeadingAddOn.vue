<template>
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
                :class="class"
                :placeholder="placeholder"
                v-model="value"
                @input="handleInputUpdate"
                class="
                    form-control
                    block
                    w-full
                    pl-7
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none focus:ring-primary
                  "
            />
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
