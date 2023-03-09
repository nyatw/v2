<template>
    <div class="flex-component">
        <h1>Директивы: v-if</h1>

        <div class="flex-row">
            <div class="flex-column">
                <h3>vue.js</h3>

                html
                <highlightjs
                    autodetect
                    code='<div v-if="show">{{ message }}</div>
<button @click="show = !show">убрать/вставить</button>'
                />
                js
                <highlightjs
                    autodetect
                    code="export default {
  data: () => ({ {
    message: 'тут что то будет',
    show: true
  })
}"/>
                <div class="demo">
                    <div v-if="show">{{ message }}</div>
                    <button @click="show = !show">убрать/вставить</button>
                </div>
            </div>

            <div class="flex-column">
                <h3>jQuery</h3>
                html
                <highlightjs
                    autodetect
                    code='<div>message</div>
<button>убрать/вставить</button>'
                />
                js
                <highlightjs
                    autodetect
                    code="$('button').click(function() {
    if ($('div').find( $('p')).length > 0) {
        $('p').remove()
    } else {
        $('div').append(`<p>message</p>`)
    }
})"/>

            </div>
        </div>

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
        <div class="demo">
            <div v-if="show">{{ message1 }}</div>
            <div v-if="show1">{{ message2 }}</div>
            <div v-if="show2">{{ message3 }}</div>
            <button @click="show = !show">"show = !show"</button>
            <button @click="show1 = !show1">"show1 = !show1"</button>
            <button @click="show2 = !show2">"show2 = !show2"</button>
        </div>
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

        <h1>Директивы: v-else</h1>

        <div class="flex-row">
            <div class="flex-column">
                <h3>vue.js</h3>

                html
                <highlightjs
                    autodetect
                    code='<div v-if="model.length > 5">
    {{ messageIf }}
</div>
<div v-else-if="model.length == 5">
    {{ messageElseIf }}
</div>
<div v-else>
    {{ messageElse }}
</div>
<input v-model="model">'
                />
                js
                <highlightjs
                    autodetect
                    code="export default {
  data: {
    messageIf: 'много знаков',
    messageElseIf: 'то что нужно',
    messageElse: 'мало знаков',
    model: '123'
  }
}"/>
                <div class="demo">
                    <div v-if="model.length > 5">
                        {{ messageIf }}
                    </div>
                    <div v-else-if="model.length == 5">
                        {{ messageElseIf }}
                    </div>
                    <div v-else>
                        {{ messageElse }}
                    </div>
                    <input v-model="model">
                </div>
            </div>

            <div class="flex-column">
                <h3>jQuery</h3>

                js
                <highlightjs
                    autodetect
                    code="const text = 'какой то текст';

if (text.length > 5) {
  $('body').append(`<div>много знаков</div>`)
}
if (text.length == 5) {
  $('body').append(`<div>то что нужно</div>`)
}
else {
  $('body').append(`<div>мало знаков</div>`)
}"/>

            </div>


        </div>

        <h1>Директивы: v-show</h1>

        <div class="flex-row">
            <div class="flex-column">
                <h3>vue.js</h3>

                html
                <highlightjs
                    autodetect
                    code='<div v-show="show">{{ message }}</div>'
                />
                js
                <highlightjs
                    autodetect
                    code="export default {
  data: {
    message: 'тут что то будет',
    show: true
  }
}"/>
                <div style="display: flex" v-show="false">{{ message }}</div>

                <div class="demo">
                    <div v-show="show">{{ message }}</div>
                    <button @click="show = !show">убрать/вставить</button>
                    <br>
                    <br>
                    <br>
                    &lt;div<span style="color: #301dd3" v-if="show"> style="display: none"</span>&gt; тут что то будет&lt;/div&gt;

                </div>
            </div>
        </div>


    </div>


</template>

<script>
export default {
    name: "LessonIf",
    data: () => ({
        message: 'тут что то будет',
        message1: 'message1',
        message2: 'message2',
        message3: 'message3',
        messageIf: 'много знаков',
        messageElseIf: 'то что нужно',
        messageElse: 'мало знаков',
        show: true,
        show1: true,
        show2: true,
        model: '123'
    }),
}
</script>

<style scoped>

</style>