<template>
    <div class="flex-container">
        <main-navigation @current-view-event="currentViewEvent" :active="currentView"/>
        <component :is="currentView"/>
    </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'

import LessonStart from '@/components/lesson/LessonStart.vue'
import LessonBind from '@/components/lesson/LessonBind.vue'
import LessonIf from '@/components/lesson/LessonIf.vue'
import LessonVFor from '@/components/lesson/LessonVFor.vue'
import LessonVOn from '@/components/lesson/LessonVOn.vue'
import LessonModel from '@/components/lesson/LessonModel.vue'
import LessonComponents from '@/components/lesson/LessonComponents.vue'
import LessonProps from '@/components/lesson/LessonProps.vue'
import LessonEmit from '@/components/lesson/LessonEmit.vue'
import LessonComputed from '@/components/lesson/LessonComputed.vue'


import ExampleComponent from '@/components/lesson/ExampleComponent.vue'

export default {
    name: 'App',
    components: {
        MainNavigation,

        LessonStart,
        LessonBind,
        LessonIf,
        LessonVFor,
        LessonVOn,
        LessonModel,
        LessonComponents,
        LessonProps,
        LessonEmit,
        LessonComputed,

        ExampleComponent,
    },

    data: () => ({
        currentView: "LessonStart",
    }),
    methods: {
        currentViewEvent(x) {
            this.currentView = x
        }
    },
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
</style>
