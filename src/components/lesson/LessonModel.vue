<template>
    <div class="flex-component">
        <h1>Директивы: v-model</h1>

        <div class="flex-row">
            <div class="flex-column">
                <h3>input</h3>

                html
                <highlightjs
                    autodetect
                    code='<input v-model="model">
<p>текст из input: <b>{{model}}</b></p>'
                />
                js
                <highlightjs
                    autodetect
                    code="data: () => ({
    model: ''
}),"/>
                <div class="demo">
                    <input v-model="model">
                    <p>текст из input: <b>{{model}}</b></p>
                </div>
                
            </div>
        </div>
        <div class="flex-row">
            <div class="flex-column">
                <h3>checkbox</h3>

                html
                <highlightjs
                    autodetect
                    code='<input type="checkbox" id="jack" value="Джек" v-model="checkedNames">
<label for="jack">Джек</label>
<input type="checkbox" id="john" value="Джон" v-model="checkedNames">
<label for="john">Джон</label>
<input type="checkbox" id="mike" value="Майк" v-model="checkedNames">
<label for="mike">Майк</label>
<span>Отмеченные имена: {{ checkedNames }}</span>'
                />
                <highlightjs
                    autodetect
                    code="data: () => ({
    checkedNames: [],
}),"/>
                <div class="demo">
                    <input type="checkbox" id="jack" value="Джек" v-model="checkedNames">
                    <label for="jack">Джек</label>
                    <input type="checkbox" id="john" value="Джон" v-model="checkedNames">
                    <label for="john">Джон</label>
                    <input type="checkbox" id="mike" value="Майк" v-model="checkedNames">
                    <label for="mike">Майк</label><br>
                    <span>Отмеченные имена: {{ checkedNames }}</span>
                </div>
            </div>
        </div>

        <div class="flex-row">
            <div class="flex-column">
                <h3>radiobutton</h3>
                html
                <highlightjs
                    autodetect
                    code='<input type="radio" id="one" value="Один" v-model="picked">
<label for="one">Один</label>
<input type="radio" id="two" value="Два" v-model="picked">
<label for="two">Два</label>
<span>Выбрано: {{ picked }}</span>'
                />
                <highlightjs
                    autodetect
                    code="data: () => ({
    picked: '',
}),"/>
                <div class="demo">
                    <input type="radio" id="one" value="Один" v-model="picked">
                    <label for="one">Один</label>
                    <input type="radio" id="two" value="Два" v-model="picked">
                    <label for="two">Два</label><br>
                    <span>Выбрано: {{ picked }}</span>
                </div>

            </div>
        </div>
        <div class="flex-row">
            <div class="flex-column">
                <h3>select</h3>
                html
                <highlightjs
                    autodetect
                    code='<select v-model="selected">
    <option disabled value="">Выберите один из вариантов</option>
    <option value="А">А</option>
    <option value="Б">Б</option>
    <option value="В">В</option>
</select>
<span>Выбрано: {{ selected }}</span>'
                />
                <highlightjs
                    autodetect
                    code="data: () => ({
    selected: ''
}),"/>
                <div class="demo">
                    <select v-model="selected">
                        <option disabled value="">Выберите один из вариантов</option>
                        <option value="А">А</option>
                        <option value="Б">Б</option>
                        <option value="В">В</option>
                    </select><br>
                    <span>Выбрано: {{ selected }}</span>
                </div>
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
        <br>
        <br>
        <highlightjs
            autodetect
            code='<select v-model="selected">
    <option
        v-for="it in selectList"
        :key="it.value"
        :value="it.value"
    >
        {{ it.text }}
    </option>
</select>'/>
        <highlightjs
            autodetect
            code="data: () => ({
    selected: '',
    selectList: [
        {text: 'A', value: 'A'},
        {text: 'B', value: 'B'},
        {text: 'C', value: 'C'},
    ]
}),"/>

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
</template>

<script>
export default {
    name: "LessonModel",
    data: () => ({
        model: '',
        checkedNames: [],
        picked: '',
        selected: ''
    }),
}
</script>

<style scoped>

</style>