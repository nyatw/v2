<template>
    <div class="flex-component">
        <h1>Директивы: v-on</h1>

        <div class="flex-row">
            <div class="flex-column">
                <h3>vue.js</h3>

                html
                <highlightjs
                    autodetect
                    code='<button @click="counter += 1">+1</button>
<p>Кнопка нажата {{ counter }} раз</p>'
                />
                js
                <highlightjs
                    autodetect
                    code="data: () => ({
    counter: 0
})"/>
                <div class="demo">
                    <button @click="counter += 1">+1</button>
                    <p>Кнопка нажата {{ counter }} раз</p>
                </div>

            </div>


            <div class="flex-column">
                <h3>jQuery</h3>

                html
                <highlightjs
                    autodetect
                    code='<button>+1</button>
<p>Кнопка нажата <span>0</span> раз</p>
'
                />
                js
                <highlightjs
                    autodetect
                    code="let counter = 1;
$('button').click(function () {
  $('span').html(counter++)
})"/>

            </div>
        </div>

        <h1>Оброботчик Methods</h1>

        <div class="flex-row">
            <div class="flex-column">
                <h3>vue.js</h3>


                html
                <highlightjs
                    autodetect
                    code='<h1 :style="{ color: message }">{{message}}</h1>
<button @click="randomColor">RandomColor</button>'
                />
                js
                <highlightjs
                    autodetect
                    code="export default {
    data: () => ({
        message: 'rgb(0,0,0)'
    }),
    methods: {
        randomColor() {
            const r = (min, max) => {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            this.message = `rgb(${r(0,255)}, ${r(0,255)}, ${r(0,255)})`
        }
    }
}"/>
                <div class="demo">
                    <h1 :style="{ color: message }">{{message}}</h1>
                    <button @click="randomColor">RandomColor</button>
                </div>
            </div>


            <div class="flex-column">
                <h3>jQuery</h3>
                    html
                <highlightjs
                    autodetect
                    code='<h1 style="color: rgb(0,0,0)">rgb(0,0,0)</h1>
<button>RandomColor</button>'/>
                js
                <highlightjs
                    autodetect
                    code="const h =  $('h1');

$('button').click(function () {
  const r = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const color = `rgb(${r(0,255)}, ${r(0,255)}, ${r(0,255)})`
  h.css('color', color)
  h.html(color)
})"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LessonVOn",
    data: () => ({
        counter: 0,
        message: 'rgb(0,0,0)'
    }),
    methods: {
        randomColor() {
            const r = (min, max) => {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            this.message = `rgb(${r(0,255)}, ${r(0,255)}, ${r(0,255)})`
        }
    }
}
</script>

<style scoped>

</style>