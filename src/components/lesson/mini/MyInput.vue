<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
    name: "MyInput",
    props: ['modelValue'],
    emits: ['update:modelValue'],
    // methods: {
    //     updateValue(e) {
    //         console.log(e)
    //         this.$emit('input', e.target.value)
    //     }
    // }
}
</script>

<style scoped>

</style>