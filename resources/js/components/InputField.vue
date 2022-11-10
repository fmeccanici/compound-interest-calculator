<template>
    <div v-if="type !== 'select'">
        <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <div class="mt-1">
            <input
                :type="type"
                :name="name"
                :id="id"
                v-model="value"
                @input="handleInputUpdate"
                class="
                    form-control
                    block
                    w-full
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

    <div v-if="type === 'select'" class="mt-2">
        <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <select
            :name="name"
            @input="handleSelectInputUpdate"
            class="form-select appearance-none
                          block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding bg-no-repeat
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none focus:ring-primary" aria-label="Default select example">
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
