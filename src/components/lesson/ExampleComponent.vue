<template>
    <div class="container">
        <div class="filter column">
            <h3>Фильтр</h3>

            <label for="city">Выбор города</label>
            <select id="city" v-model="filters.city">
                <option
                    v-for="i in selectedCity"
                    :key="i"
                    :value="i.value"
                >
                    {{ i.text }}
                </option>
            </select>

            <label for="skill">Выбор скила</label>
            <select id="skill" v-model="filters.skills">
                <option
                    :value="null"
                >
                </option>
                <option
                    v-for="i in selectedSkill"
                    :key="i"
                    :value="i.value"
                >
                    {{ i.text }}
                </option>
            </select>

            {{ filters }}

            <div class="filter-btn">
                <button @click="cancel">сброс</button>
            </div>

        </div>
        <div class="main">
            <table>
                <thead>
                <tr>
                    <th
                        v-for="(th, index) in thead"
                        :key="index"
                    >
                        {{ th.text }}
                        <button v-if="th.sort" @click="sortButton = !sortButton" class="sort-button">
                            <i v-if="sortButton">↑</i>
                            <i v-else>↓</i>
                        </button>
                    </th>
                </tr>
                </thead>
                <tbody>
                <template v-if="dataTable">
                    <tr v-for="people in dataTable" :key="people">
                        <td>
                            {{ people.fio }}
                        </td>
                        <td>{{ selectedCity[people.city].text }}</td>
                        <td>
                            <ul v-for="(skill, key) in people.skills" :key="key">
                                <li
                                    :style="skill.toLowerCase() === filters.skills ? 'color: green' : ''"
                                >
                                    {{ skill }}
                                </li>
                            </ul>
                        </td>
                    </tr>
                </template>
                <template v-if="dataTable.length === 0">
                    <tr>
                        <td colspan="3"><h1 style="text-align: center">нет никто</h1></td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExampleComponent",
    methods: {
        cancel() {
            this.filters.city = null
            this.filters.skills = null
        }
    },
    computed: {
        dataTable() {
            const peoples = this.peoples;
            let filterPeople;
            if (!this.filters) {
                return peoples
            }
            let filterValue = this.filters;

            const filterCity = event =>
                event.city === filterValue.city
            const filterSkills = event =>
                event.skills.some(skill => skill.toLowerCase().includes(filterValue.skills))

            filterPeople = peoples.filter(filterCity)
            if (filterValue.skills != null) {
                filterPeople = filterPeople.filter(filterSkills)
            }

            filterPeople = filterPeople.sort((a, b) => {
                    let fa = a.fio.toLowerCase(), fb = b.fio.toLowerCase()

                    if (fa < fb) {
                        return -1
                    }
                    if (fa > fb) {
                        return 1
                    }
                    return 0
            })
            if (!this.sortButton) { filterPeople.reverse() }

            return filterPeople
        }
    },
    data: () => ({
        sortButton: true,
        filters: {
            city: null,
            skills: null
        },
        selectedCity: [
            {text: 'Пермь', value: 0},
            {text: 'Екатеринбург', value: 1},
            {text: 'Омск', value: 2},
            {text: 'Ижевск', value: 3},
        ],
        selectedSkill: [
            {text: 'HTML', value: 'html'},
            {text: 'CSS', value: 'css'},
            {text: 'JavaScript', value: 'javascript'},
            {text: 'PHP', value: 'php'},
            {text: 'C++', value: 'c++'},
        ],

        thead: [
            {text: 'ФИО', value: 'fio', sort: true},
            {text: 'Город', value: 'city', sort: false},
            {text: 'Скилы', value: 'skill', sort: false},
        ],

        peoples: [
            {
                fio: 'Иванов',
                city: 0,
                skills: ['HTML', 'CSS', 'JavaScript']
            },
            {
                fio: 'Петров',
                city: 0,
                skills: ['HTML', 'CSS', 'JavaScript']
            },
            {
                fio: 'Сидоров',
                city: 0,
                skills: ['PHP']
            },
            {
                fio: 'Штольц',
                city: 0,
                skills: ['C++']
            },

            {
                fio: 'Смирнов',
                city: 1,
                skills: ['PHP', 'JavaScript']
            },
            {
                fio: 'Куклачев',
                city: 1,
                skills: ['PHP', 'JavaScript']
            },
            {
                fio: 'Казадулин',
                city: 1,
                skills: ['PHP', 'C++']
            },
            {
                fio: 'Атомов',
                city: 1,
                skills: ['PHP', 'C++']
            },

            {
                fio: 'Мельников',
                city: 2,
                skills: ['PHP', 'JavaScript', 'C++']
            },
            {
                fio: 'Черный',
                city: 2,
                skills: ['PHP', 'JavaScript', 'C++']
            },

            {
                fio: 'Гоголь',
                city: 3,
                skills: ['CSS']
            },
            {
                fio: 'Белых',
                city: 3,
                skills: ['JavaScript']
            },
        ],
    })
}
</script>

<style scoped>

div {
    display: flex;
}

table {
    width: 100%;
}

table, th, td {
    border: 1px solid #808080;
    border-collapse: collapse;
}

ul {
    margin: 0;
}

.column {
    flex-direction: column;
}

.container {
    margin: 12px 12px;
}

.container > div {
    margin: 8px;
}

.filter {
    flex: 0 1 300px;
    height: 100%;
    background-color: lightgrey;
    padding: 16px;
}

.filter-btn {
    margin: 16px 0 0;
    width: 100%;
    justify-content: flex-end;
}

.filter-btn button {
    margin: 0 4px;
}

.main {
    flex: 1 1 auto;
    background-color: lightgrey;
}

.sort-button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
}

</style>