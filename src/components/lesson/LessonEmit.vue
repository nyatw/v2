<template>
    <div class="flex-component">
        <h1>$emit</h1>
        <div class="flex-row">
            <div class="flex-column">
                <h4>дочерний компонент</h4>
                html
                <highlightjs
                    autodetect
                    code='<template>
    <button @click="$emit("new-color")">RandomColor</button>
    <button @click="randomColor">RandomColor</button>
</template>'/>
                js
                <highlightjs
                    autodetect
                    code="export default {
    methods: {
        randomColor() {
            this.$emit('new-color')
        }
    }
}"/>
                <h4>родительский компонент</h4>
                html
                <highlightjs
                    autodetect
                    code='<template>
    <p>Какой цвет: {{ color }}</p>
    <random-color-button @new-color="setNewColor" />
</template>'/>
                js
                <highlightjs
                    autodetect
                    code="export default {
    data: () => ({
        color: '',
    }),
    methods: {
        setNewColor() {
            const r = (min, max) => {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            this.color = `rgb(${r(0,255)}, ${r(0,255)}, ${r(0,255)})`
        }
    },
}"/>
<div class="demo">
    <p>Какой цвет: {{ color }}</p>
    <random-color @new-color="setNewColor"></random-color>
</div>

            </div>
        </div>
    </div>
</template>

<script>

import RandomColor from "@/components/lesson/mini/RandomColor.vue";

export default {
    name: "LessonEmit",
    components: {RandomColor},
    data: () => ({
        color: '',
    }),
    methods: {
        setNewColor() {
            const r = (min, max) => {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            this.color = `rgb(${r(0,255)}, ${r(0,255)}, ${r(0,255)})`
        }
    }
}
</script>

<style scoped>

</style>