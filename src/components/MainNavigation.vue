<template>
    <nav>
        <ul>
            <li
                v-for="el in li"
                :key="el"
                @click.prevent="$emit('current-view-event', el.value)"
                :class="active === el.value ? 'active' : ''"
            >
                {{ el.text }}
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Main-Navigation",
    props: {
        active: String
    },
    data: () => ({
        li: [
            {
                text: 'START',
                value: 'LessonStart',
            },
            {
                text: 'v-bind',
                value: 'LessonBind',
            },
            {
                text: 'v-if / v-show',
                value: 'LessonIf',
            },
            {
                text: 'v-for',
                value: 'LessonVFor',
            },

            {
                text: 'v-model',
                value: 'LessonModel',
            },
            {
                text: 'v-on / methods',
                value: 'LessonVOn',
            },
            {
                text: 'Computed',
                value: 'LessonComputed',
            },
            {
                text: 'Components',
                value: 'LessonComponents',
            },
            {
                text: ':props',
                value: 'LessonProps',
            },
            {
                text: '$emit',
                value: 'LessonEmit',
            },


            {
                text: 'ExampleComponent',
                value: 'ExampleComponent',
            },
        ],
    }),

}
</script>

<style scoped>
nav {
    display: inline-block;
    width: 100%;
}

nav ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: #d3d3d3;
}

nav li {
    list-style: none;
    float: left;
    padding: 12px 24px;
    cursor: pointer;
    display: block;
}

nav li.active {
    background-color: #7580ef;
}

nav li:hover {
    background-color: #c4c9f8;
}
</style>