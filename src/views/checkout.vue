<template>
    <div>
        <h1>Tutorials you want to attend</h1>
        <table class="timetable">
            <tr class="__day">
                <td>Sundays</td>
            </tr>
            <tr class="__class">
                <td v-for="tutorial in selected" :key="tutorial.title" v-if="tutorial.date.includes(0)">
                    <b>{{tutorial.title}}</b>, {{tutorial.time}}
                </td>
            </tr>
            <tr class="__day">
                <td>Mondays</td>
            </tr>
            <tr class="__class">
                <td v-for="tutorial in selected" :key="tutorial.title" v-if="tutorial.date.includes(1)">
                    <b>{{tutorial.title}}</b>, {{tutorial.time}}
                </td>
            </tr>
            <tr class="__day">
                <td>Tuesdays</td>
            </tr>
            <tr class="__class">
                <td v-for="tutorial in selected" :key="tutorial.title" v-if="tutorial.date.includes(2)">
                    <b>{{tutorial.title}}</b>, {{tutorial.time}}
                </td>
            </tr>
            <tr class="__day">
                <td>Wednesdays</td>
            </tr>
            <tr class="__class">
                <td v-for="tutorial in selected" :key="tutorial.title" v-if="tutorial.date.includes(3)">
                    <b>{{tutorial.title}}</b>, {{tutorial.time}}
                </td>
            </tr>
            <tr class="__day">
                <td>Thursdays</td>
            </tr>
            <tr class="__class">
                <td v-for="tutorial in selected" :key="tutorial.title" v-if="tutorial.date.includes(4)">
                    <b>{{tutorial.title}}</b>, {{tutorial.time}}
                </td>
            </tr>
            <tr class="__day">
                <td>Fridays</td>
            </tr>
            <tr class="__class">
                <td v-for="tutorial in selected" :key="tutorial.title" v-if="tutorial.date.includes(5)">
                    <b>{{tutorial.title}}</b>, {{tutorial.time}}
                </td>
            </tr>
            <tr class="__day">
                <td>Saturdays</td>
            </tr>
            <tr class="__class">
                <td v-for="tutorial in selected" :key="tutorial.title" v-if="tutorial.date.includes(6)">
                    <b>{{tutorial.title}}</b>, {{tutorial.time}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
    name: 'checkout',
    computed: {
        ...mapState([
            'selected'
        ])
    },
    data() {
        return {
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style>
.timetable {
    display: block;
    padding: 1rem .5rem;
}
.timetable .__day {
    color: white;
    font-weight: bold;
}
.timetable .__day td {
    background-color: var(--subColor);
    border: 1.5px solid var(--subColor);
    padding: .25rem 1rem .25rem .25rem;
    border-radius: .5rem 0;
}
.timetable .__class td {
    border-radius: 2rem;
    cursor: pointer;
    --bg: rgba(51, 50, 50, 0.2);
    padding: .25rem 1rem .25rem .25rem;
    border: 1.5px solid var(--bg);
    background-color: var(--bg);
    transition: .2s ease-out;
}
.timetable .__class td:nth-child(odd) {
    --bg: rgba(77, 73, 74, 0.2);
}
.timetable .__class td:hover {
    box-shadow: 0 0 5px 2px grey;
}
</style>