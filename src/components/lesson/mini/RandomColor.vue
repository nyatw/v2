<template>
    <button @click="randomColor">RandomColor</button>
</template>

<script>
export default {
    name: "RandomColor",
    methods: {
        randomColor() {
            this.$emit('new-color')
        }
    }
}
</script>

<style scoped>

</style>