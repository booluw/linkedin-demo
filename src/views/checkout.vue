<template>
    <div class="page">
        <section class="section">
            <h1>Tutorials you want to attend</h1>
            <table class="timetable">
                <tr class="__day">
                    <td>Sundays</td>
                </tr>
                <tr class="__class">
                    <router-link :to="`/explore/${tutorial.tutor}/${tutorial.title}`" v-for="tutorial in selected" :key="tutorial.title">
                        <td v-if="tutorial.date.includes('Sundays')">
                            <b>{{tutorial.title}}</b>, {{tutorial.time}}
                        </td>
                    </router-link>
                </tr>
                <tr class="__day">
                    <td>Mondays</td>
                </tr>
                <tr class="__class">
                    <router-link :to="`/explore/${tutorial.tutor}/${tutorial.title}`" v-for="tutorial in selected" :key="tutorial.title">
                        <td v-if="tutorial.date.includes('Mondays')">
                            <b>{{tutorial.title}}</b>, {{tutorial.time}}
                        </td>
                    </router-link>
                </tr>
                <tr class="__day">
                    <td>Tuesdays</td>
                </tr>
                <tr class="__class">
                    <router-link :to="`/explore/${tutorial.tutor}/${tutorial.title}`" v-for="tutorial in selected" :key="tutorial.title">
                        <td v-if="tutorial.date.includes('Tuesdays')">
                            <b>{{tutorial.title}}</b>, {{tutorial.time}}
                        </td>
                    </router-link>
                </tr>
                <tr class="__day">
                    <td>Wednesdays</td>
                </tr>
                <tr class="__class">
                    <router-link :to="`/explore/${tutorial.tutor}/${tutorial.title}`" v-for="tutorial in selected" :key="tutorial.title">
                        <td v-if="tutorial.date.includes('Wednesdays')">
                            <b>{{tutorial.title}}</b>, {{tutorial.time}}
                        </td>
                    </router-link>
                </tr>
                <tr class="__day">
                    <td>Thursdays</td>
                </tr>
                <tr class="__class">
                    <router-link :to="`/explore/${tutorial.tutor}/${tutorial.title}`" v-for="tutorial in selected" :key="tutorial.title">
                        <td v-if="tutorial.date.includes('Thursdays')">
                            <b>{{tutorial.title}}</b>, {{tutorial.time}}
                        </td>
                    </router-link>
                </tr>
                <tr class="__day">
                    <td>Fridays</td>
                </tr>
                <tr class="__class">
                    <router-link :to="`/explore/${tutorial.tutor}/${tutorial.title}`" v-for="tutorial in selected" :key="tutorial.title">
                        <td v-if="tutorial.date.includes('Fridays')">
                            <b>{{tutorial.title}}</b>, {{tutorial.time}}
                        </td>
                    </router-link>
                </tr>
                <tr class="__day">
                    <td>Saturdays</td>
                </tr>
                <tr class="__class">
                    <router-link :to="`/explore/${tutorial.tutor}/${tutorial.title}`" v-for="tutorial in selected" :key="tutorial.title">
                        <td v-if="tutorial.date.includes('Saturdays')">
                            <b>{{tutorial.title}}</b>, {{tutorial.time}}
                        </td>
                    </router-link>
                </tr>
            </table>
            <div class="h-flex" style="justify-content: flex-end;">
                <button class="btn btn-link is-primary" @click="saveTT()">Save</button>
                <button class="btn btn-small" @click="clearAll()">Clear all</button>
            </div>
        </section>
        <section></section>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';


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
        ...mapActions([
            'remove_all'
        ]),
        clearAll: function() {
            let action = confirm("Are you sure you want to 'CLEAR ALL', this would delete all your marked tutorials?");
            if (action) {
                this.remove_all();
                this.$router.push('/explore');
            }
        },
        saveTT: function() {
            alert('saved');
            this.$router.push('/tt');
        }

    }
}
</script>

<style>
.timetable {
    display: block;
    padding: 1rem .5rem;
}
.timetable tr:nth-child(odd) {
    background-color: var(--subColor);
    display: block;
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
.timetable .__class {
    display: flex;
    align-items: center;
    height: 2rem;
    background-color: lightgrey;
}
.timetable .__class td {
    display: block;
    margin: 0 .2rem;
    border-radius: .3rem;
    cursor: pointer;
    --bg: rgba(51, 50, 50, 0.2);
    padding: .25rem 1rem .25rem .25rem;
    border: 1.5px solid var(--bg);
    background-color: var(--bg);
    transition: .2s ease-out;
    color: var(--headerText);
}
.timetable .__class td:hover {
    box-shadow: 0 0 5px 2px grey;
}
</style>