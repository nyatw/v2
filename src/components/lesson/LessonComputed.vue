<template>
    <div class="flex-component">
        <h1>Computed</h1>

        <div class="flex-row">
            <div class="flex-column">

                html
                <highlightjs
                    autodetect
                    code='<li v-for="(item, index) in list" :key="index.text">
    {{ item.value }} - {{ item.text }}
</li>'/>
                js
                <highlightjs
                    autodetect
                    code="list: [
    {
        text: 'Нужный',
        value: 1,
    },
    {
        text: 'Тоже нужный',
        value: 1,
    },
    {
        text: 'что то не то',
        value: 2,
    },
]"/>
                <div class="demo">
                    <li v-for="(item, index) in list" :key="index.text">
                        {{ item.value }} - {{ item.text }}
                    </li>
                </div>


                <h3>создаем фильтр</h3>
                js
                <highlightjs
                    autodetect
                    code="export default {
    computed: {
        getFilterList() {
            return this.list.filter((li) => li.value === 1);
        }
    }
}"/>
                html
                <highlightjs
                    autodetect
                    code='<li v-for="(item, index) in getFilterList" :key="index.text">
   {{ item.value }} - {{ item.text }}
</li>'/>
<div class="demo">
    <input type="number" v-model="num"><button @click="addLi(num)">Добавить LI</button>

    <li v-for="(item, index) in getFilterList" :key="index.text">
        {{ item.value }} - {{ item.text }}
    </li>
</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LessonComputed",
    data: () => ({
        num: 1,
        list: [
            {
                text: 'Нужный',
                value: 1,
            },
            {
                text: 'Тоже нужный',
                value: 1,
            },
            {
                text: 'что то не то',
                value: 2,
            },
        ],
        list2: [
            {
                text: 'Нужный',
                value: 1,
            },
            {
                text: 'Тоже нужный',
                value: 1,
            },
            {
                text: 'что то не то',
                value: 2,
            },
        ]
    }),
    methods: {
        addLi(e) {
            this.list2.push({ text: 'это еще от куда?', value: e })
        }
    },
    computed: {
        getFilterList() {
            return this.list2.filter((li) => li.value === 1);
        }
    }
}
</script>

<style scoped>

</style>