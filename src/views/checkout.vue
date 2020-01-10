<template>
    <section class="section">
        <h1>Tutorials you want to attend</h1>
        <table class="timetable">
            <tr class="__time">
                <td>Day/Time</td>
                <td>12:30pm</td>
                <td>1:30pm</td>
                <td>2:30pm</td>
                <td>3:30pm</td>
                <td>4:30pm</td>
                <td>5:30pm</td>
                <td>6:30pm</td>
                <td>7:30pm</td>
                <td>8:30pm</td>
                <td>9:30pm</td>
            </tr>
            <tr>
                <td class="__day">Sundays</td>
                <td class="__class" v-for="(tutorial, index) in sundayTutorials" :key="index">
                    <template v-if="tutorial.time =='12:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in sundayTutorials" :key="index">
                    <template v-if="tutorial.time =='1:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in sundayTutorials" :key="index">
                    <template v-if="tutorial.time =='2:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in sundayTutorials" :key="index">
                    <template v-if="tutorial.time =='3:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in sundayTutorials" :key="index">
                    <template v-if="tutorial.time =='4:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in sundayTutorials" :key="index">
                    <template v-if="tutorial.time =='5:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in sundayTutorials" :key="index">
                    <template v-if="tutorial.time =='6:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in sundayTutorials" :key="index">
                    <template v-if="tutorial.time =='7:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in sundayTutorials" :key="index">
                    <template v-if="tutorial.time =='8:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in sundayTutorials" :key="index">
                    <template v-if="tutorial.time =='9:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
            </tr>
            <tr>
                <td class="__day">Mondays</td>
                <td class="__class" v-for="(tutorial, index) in mondayTutorials" :key="index">
                    <template v-if="tutorial.time =='12:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in mondayTutorials" :key="index">
                    <template v-if="tutorial.time =='1:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in mondayTutorials" :key="index">
                    <template v-if="tutorial.time =='2:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in mondayTutorials" :key="index">
                    <template v-if="tutorial.time =='3:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in mondayTutorials" :key="index">
                    <template v-if="tutorial.time =='4:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in mondayTutorials" :key="index">
                    <template v-if="tutorial.time =='5:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in mondayTutorials" :key="index">
                    <template v-if="tutorial.time =='6:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in mondayTutorials" :key="index">
                    <template v-if="tutorial.time =='7:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in mondayTutorials" :key="index">
                    <template v-if="tutorial.time =='8:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in mondayTutorials" :key="index">
                    <template v-if="tutorial.time =='9:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
            </tr>
            <tr>
                <td class="__day">Tuesdays</td>
                <td class="__class" v-for="(tutorial, index) in tuesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='12:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in tuesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='1:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in tuesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='2:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in tuesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='3:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in tuesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='4:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in tuesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='5:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in tuesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='6:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in tuesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='7:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in tuesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='8:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in tuesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='9:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
            </tr>
            <tr>
                <td class="__day">Wednesdays</td>
                <td class="__class" v-for="(tutorial, index) in wednesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='12:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in wednesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='1:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in wednesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='2:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in wednesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='3:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in wednesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='4:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in wednesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='5:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in wednesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='6:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in wednesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='7:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in wednesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='8:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in wednesdayTutorials" :key="index">
                    <template v-if="tutorial.time =='9:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
            </tr>
            <tr>
                <td class="__day">Thursdays</td>
                <td class="__class" v-for="(tutorial, index) in thursdayTutorials" :key="index">
                    <template v-if="tutorial.time =='12:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in thursdayTutorials" :key="index">
                    <template v-if="tutorial.time =='1:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in thursdayTutorials" :key="index">
                    <template v-if="tutorial.time =='2:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in thursdayTutorials" :key="index">
                    <template v-if="tutorial.time =='3:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in thursdayTutorials" :key="index">
                    <template v-if="tutorial.time =='4:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in thursdayTutorials" :key="index">
                    <template v-if="tutorial.time =='5:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in thursdayTutorials" :key="index">
                    <template v-if="tutorial.time =='6:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in thursdayTutorials" :key="index">
                    <template v-if="tutorial.time =='7:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in thursdayTutorials" :key="index">
                    <template v-if="tutorial.time =='8:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in thursdayTutorials" :key="index">
                    <template v-if="tutorial.time =='9:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
            </tr>
            <tr>
                <td class="__day">Fridays</td>
                <td class="__class" v-for="(tutorial, index) in fridayTutorials" :key="index">
                    <template v-if="tutorial.time =='12:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in fridayTutorials" :key="index">
                    <template v-if="tutorial.time =='1:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in fridayTutorials" :key="index">
                    <template v-if="tutorial.time =='2:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in fridayTutorials" :key="index">
                    <template v-if="tutorial.time =='3:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in fridayTutorials" :key="index">
                    <template v-if="tutorial.time =='4:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in fridayTutorials" :key="index">
                    <template v-if="tutorial.time =='5:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in fridayTutorials" :key="index">
                    <template v-if="tutorial.time =='6:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in fridayTutorials" :key="index">
                    <template v-if="tutorial.time =='7:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in fridayTutorials" :key="index">
                    <template v-if="tutorial.time =='8:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in fridayTutorials" :key="index">
                    <template v-if="tutorial.time =='9:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
            </tr>
            <tr>
                <td class="__day">Saturdays</td>
                <td class="__class" v-for="(tutorial, index) in saturdayTutorials" :key="index">
                    <template v-if="tutorial.time =='12:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in saturdayTutorials" :key="index">
                    <template v-if="tutorial.time =='1:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in saturdayTutorials" :key="index">
                    <template v-if="tutorial.time =='2:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in saturdayTutorials" :key="index">
                    <template v-if="tutorial.time =='3:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in saturdayTutorials" :key="index">
                    <template v-if="tutorial.time =='4:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in saturdayTutorials" :key="index">
                    <template v-if="tutorial.time =='5:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in saturdayTutorials" :key="index">
                    <template v-if="tutorial.time =='6:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in saturdayTutorials" :key="index">
                    <template v-if="tutorial.time =='7:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in saturdayTutorials" :key="index">
                    <template v-if="tutorial.time =='8:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
                <td class="__class" v-for="(tutorial, index) in saturdayTutorials" :key="index">
                    <template v-if="tutorial.time =='9:30pm'">
                        {{tutorial.title}}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </td>
            </tr>
        </table>
        <div class="h-flex" style="justify-content: flex-end;">
            <button class="btn btn-link is-primary" @click="saveTT()">Save</button>
            <button class="btn btn-small" @click="clearAll()">Clear all</button>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';


export default {
    name: 'checkout',
    computed: {
        ...mapState([
            'selected'
        ]),
        sundayTutorials: function() {
            return this.selected.filter(tutorial => (tutorial.date.includes('Sundays')));
        },
        mondayTutorials: function() {
            return this.selected.filter(tutorial => (tutorial.date.includes('Mondays')));
        },
        tuesdayTutorials: function() {
            return this.selected.filter(tutorial => (tutorial.date.includes('Tuesdays')));
        },
        wednesdayTutorials: function() {
            return this.selected.filter(tutorial => (tutorial.date.includes('Wednesdays')));
        },
        thursdayTutorials: function() {
            return this.selected.filter(tutorial => (tutorial.date.includes('Thursdays')));
        },
        fridayTutorials: function() {
            return this.selected.filter(tutorial => (tutorial.date.includes('Fridays')));
        },
        saturdayTutorials: function() {
            return this.selected.filter(tutorial => (tutorial.date.includes('Saturdays')));
        },
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
.timetable tr:first-child, .timetable td:first-child {
    font-weight: bold;
    background-color: var(--mainColor);
    color: white;
}
.timetable tr:first-child td {
    padding: .2rem .1rem;
}
.timetable tr:not(:first-child) td:not(:first-child) {
    background-color: var(--mainSubtile);
}
</style>