<template>
    <div class="flex-component">
        <h1>:props</h1>
        <div class="flex-row">
            <div class="flex-column">
                <h4>родительский компонент</h4>
                html
                <highlightjs
                    autodetect
                    code='<template>
    <my-component :messageProps="message"/>
</template>'/>

                js
                <highlightjs
                    autodetect
                    code="export default {
    data: () => ({
        message: 'сообщение'
    }),
}"/>

                <h4>дочерний компонент</h4>
                js
                <highlightjs
                    autodetect
                    code="export default {
    props: {
        messageProps: String
    },
}"/>
                html
                <highlightjs
                    autodetect
                    code='<template>
    <p>{{ messageProps }}</p>
</template>'/>


                <h4>простая запись</h4>
                js
                <highlightjs
                    autodetect
                    code="export default {
    props: ['size', 'myMessage']
}"/>
                <h4>с указанием валидации</h4>
                js
                <highlightjs
                    autodetect
                    code="export default {
    props: {
        height: Number,
        List: Array,
        Name: String,
        ...
    }
}"/>


                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>

                <highlightjs
                    autodetect
                    code='<template>
    <my-component v-bind:messageProps="42"/>
    <my-component v-bind:messagePropsShow="false"/>
</template>'/>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LessonProps"
}
</script>

<style scoped>

</style>