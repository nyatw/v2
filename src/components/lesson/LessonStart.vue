<template>
    <div class="flex-component">
        <h1>Начало</h1>

        <div class="flex-row">
            <div class="flex-column">

            <h3>Инициализация в ОКЦ</h3>

                php - assets
                <highlightjs
                    autodetect
                    code="public $js = [
    [
        'js/project/app.js',
        'type' => 'module'
    ],
];
public $depends = [
    'app\assets\libs\vue\VueAppAsset',
];"/>
                <br>
                php - view
                <highlightjs
                    autodetect
                    code="<?php
    use app\assets\MyAsset;
    MyAsset::register($this);
?>"/>
                <highlightjs
                    autodetect
                    code="<div id='app'></div>"/>

                <br>
                js - app
                <highlightjs
                    autodetect
                    code="const template = `
    // наш HTML
`"/>
                <highlightjs
                    autodetect
                    code="const app = new Vue({
    el: '#app',

    // наш JS
    data: {

    }
})"/>

                <br>
                <br>
                <br>
                <br><br>
                <br>
                <br>
                <br><br>
                <br>
                <br>
                <br>
            <h3>Инициализация в main.js</h3>
                js
                <highlightjs
                    autodetect
                    code='import Vue from "vue";
import App from "./App.vue";

new Vue({
    render: h => h(App)
}).$mount("#app")'/>

<br>
<br>
<br>
<br>
                <h3>App.vue</h3>

                <img src="data:image/png;base64,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">
<br>
                html
                <highlightjs
                    autodetect
                    code="<template>

</template>"/>
                js
                <highlightjs
                    autodetect
                    code="<script>
export default {
    data: () => ({
    }),
}
</script>"/>
                css
                <highlightjs
                    autodetect
                    code="<style scoped>

</style>"/>

                <br>
                <br>
                <br>
                <br>

                <h3>Размещение данных</h3>
                js
                <highlightjs
                    autodetect
                    code="<script>
export default {
    data: () => ({
        message: 'Привет!',
    }),
}
</script>"/>
                html
                <highlightjs
                    autodetect
                    code="<template>
    <div>{{ message }}</div>
    <div v-html='message'></div>
</template>"/>

                <div class="demo">
                    <div>{{ message }}</div>
                    <div v-html="message"></div>
                </div>

                <br>
                <br>


                <h3>Различные конструкции</h3>
                js
                <highlightjs
                    autodetect
                    code="{{ message + '?' }}
{{ firstName + ' ' + lastName }}
{{ message.split('').reverse().join('') }}"/>
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
    data: () => ({
        message: 'Привет!',
    }),
}
</script>

<style scoped>

</style>