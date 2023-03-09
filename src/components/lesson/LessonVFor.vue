<template>
    <div class="flex-component">
        <h1>Директивы: v-for</h1>

        <div class="flex-row">
            <div class="flex-column">
                <h3>vue.js</h3>

                html
                <highlightjs
                    autodetect
                    code='<ul>
    <li v-for="(item, index) in items2" :key="item.id">
        {{index}} - {{ item.text }}
    </li>
</ul>'
                />
                js
                <highlightjs
                    autodetect
                    code="export default {
    data: () => ({
        items2: [
            {text: 'что то'},
            {text: 'и еще'},
            {text: 'просто так'}
        ],
    })
}"/>
                <div class="demo">
<!--                    <ul>-->
<!--                        <li v-for="item in items1" :key="item">-->
<!--                            {{ item }}-->
<!--                        </li>-->
<!--                    </ul>-->

                    <ul>
                        <li v-for="(item, index) in items2" :key="item.text">
                            {{index}} - {{ item.text }}
                        </li>
                    </ul>

<!--                    <ul>-->
<!--                        <li v-for="(value, name, index) in items3" :key="value.value">-->
<!--                            {{index}} - {{ name }}: {{ value }}-->
<!--                        </li>-->
<!--                    </ul>-->
                </div>

            </div>

            <div class="flex-column">
                <h3>jQuery</h3>

                html
                <highlightjs
                    autodetect
                    code='<ul></ul>'
                />
                js
                <highlightjs
                    autodetect
                    code="const items2 = [
            {text: 'что то'},
            {text: 'и еще'},
            {text: 'просто так'}
        ];
$.each(items2, ( i, el ) => {
  const li = `<li>${i} - ${el.text}</li>`
  $('ul').append(li)
});"/>

            </div>

        </div>


        html
        <highlightjs
            autodetect
            code='<ul>
    <li v-for="(value, name, index) in items3" :key="value.id">
        {{index}} - {{ name }}: {{ value }}
    </li>
</ul>'
        />
        js
        <highlightjs
            autodetect
            code="export default {
    data: () => ({
        items3: {
            text: 'это текст',
            value: 'это значение'
        }
    })
}"/>
        <div class="demo">
                                <ul>
                                    <li v-for="(value, name, index) in items3" :key="value.value">
                                        {{index}} - {{ name }}: {{ value }}
                                    </li>
                                </ul>
        </div>

    </div>
</template>

<script>


export default {
    name: "LessonVFor",
    data: () => ({
        items1: [1, 2, 3, 4, 5],
        items2: [
            {text: 'что то'},
            {text: 'и еще'},
            {text: 'просто так'}
        ],
        items3: {
            text: 'это текст',
            value: 'это значение'
        }
    })
}
</script>

<style scoped>

</style>