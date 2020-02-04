<template>
    <section class="section">
        <h1>Tutorials you want to attend</h1>
        <table class="timetable">
            <tr>
                <th>
                    <td class="__time">Sunday</td>
                </th>
                <th>
                    <td class="__time">Monday</td>
                </th>
                <th>
                    <td class="__time">Tuesday</td>
                </th>
                <th>
                    <td class="__time">Wednesday</td>
                </th>
                <th>
                    <td class="__time">Thursday</td>
                </th>
                <th>
                    <td class="__time">Friday</td>
                </th>
                <th>
                    <td class="__time">Saturday</td>
                </th>
            </tr>
            <tr style="vertical-align: top;">
                <td>
                    <template v-for="(tutorials, index) in sundayTutorials">
                        <div class="plate-container" :key="index">
                            <div class="plate">
                                <div @click="changePage(`/explore/${tutorials.tutor}/${tutorials.title}`)">
                                    <b>{{tutorials.title}}</b>
                                    <br />
                                    <small>
                                        <b>{{tutorials.time}}</b>,
                                        <b class="is-faint">{{tutorials.location}}</b></small>
                                </div>
                                <button class="remove-btn" @click="deleteTutorial(tutorials)">
                                    <i class="material-icons">close</i>
                                </button>
                            </div>
                        </div>
                    </template>
                </td>
                <td>
                    <template v-for="(tutorials, index) in mondayTutorials">
                        <div class="plate-container" :key="index">
                            <div class="plate">
                                <div @click="changePage(`/explore/${tutorials.tutor}/${tutorials.title}`)">
                                    <b>{{tutorials.title}}</b>
                                    <br />
                                    <small>
                                        <b>{{tutorials.time}}</b>,
                                        <b class="is-faint">{{tutorials.location}}</b></small>
                                </div>
                                <button class="remove-btn" @click="deleteTutorial(tutorials)">
                                    <i class="material-icons">close</i>
                                </button>
                            </div>
                        </div>
                    </template>
                </td>
                <td>
                    <template v-for="(tutorials, index) in tuesdayTutorials">
                        <div class="plate-container" :key="index">
                            <div class="plate">
                                <div @click="changePage(`/explore/${tutorials.tutor}/${tutorials.title}`)">
                                    <b>{{tutorials.title}}</b>
                                    <br />
                                    <small>
                                        <b>{{tutorials.time}}</b>,
                                        <b class="is-faint">{{tutorials.location}}</b></small>
                                </div>
                                <button class="remove-btn" @click="deleteTutorial(tutorials)">
                                    <i class="material-icons">close</i>
                                </button>
                            </div>
                        </div>
                    </template>
                </td>
                <td>
                    <template v-for="(tutorials, index) in wednesdayTutorials">
                        <div class="plate-container" :key="index">
                            <div class="plate">
                                <div @click="changePage(`/explore/${tutorials.tutor}/${tutorials.title}`)">
                                    <b>{{tutorials.title}}</b>
                                    <br />
                                    <small>
                                        <b>{{tutorials.time}}</b>,
                                        <b class="is-faint">{{tutorials.location}}</b></small>
                                </div>
                                <button class="remove-btn" @click="deleteTutorial(tutorials)">
                                    <i class="material-icons">close</i>
                                </button>
                            </div>
                        </div>
                    </template>
                </td>
                <td>
                    <template v-for="(tutorials, index) in thursdayTutorials">
                        <div class="plate-container" :key="index">
                            <div class="plate">
                                <div @click="changePage(`/explore/${tutorials.tutor}/${tutorials.title}`)">
                                    <b>{{tutorials.title}}</b>
                                    <br />
                                    <small>
                                        <b>{{tutorials.time}}</b>,
                                        <b class="is-faint">{{tutorials.location}}</b></small>
                                </div>
                                <button class="remove-btn" @click="deleteTutorial(tutorials)">
                                    <i class="material-icons">close</i>
                                </button>
                            </div>
                        </div>
                    </template>
                </td>
                <td>
                    <template v-for="(tutorials, index) in fridayTutorials">
                        <div class="plate-container" :key="index">
                            <div class="plate">
                                <div @click="changePage(`/explore/${tutorials.tutor}/${tutorials.title}`)">
                                    <b>{{tutorials.title}}</b>
                                    <br />
                                    <small>
                                        <b>{{tutorials.time}}</b>,
                                        <b class="is-faint">{{tutorials.location}}</b></small>
                                </div>
                                <div class="remove-btn" @click="deleteTutorial(tutorials)">
                                    <i class="material-icons">close</i>
                                </div>
                            </div>
                        </div>
                    </template>
                </td>
                <td>
                    <template v-for="(tutorials, index) in saturdayTutorials">
                        <div class="plate-container" :key="index">
                            <div class="plate">
                                <div @click="changePage(`/explore/${tutorials.tutor}/${tutorials.title}`)">
                                    <b>{{tutorials.title}}</b>
                                    <br />
                                    <small>
                                        <b>{{tutorials.time}}</b>,
                                        <b class="is-faint">{{tutorials.location}}</b></small>
                                </div>
                                <button class="remove-btn" @click="deleteTutorial(tutorials)">
                                    <i class="material-icons">close</i>
                                </button>
                            </div>
                        </div>
                    </template>
                </td>
            </tr>
        </table>
        <div class="h-flex" style="justify-content: flex-end;">
            <button class="btn btn-link is-default" @click="saveTT()" style="width: 20%">Save</button>
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
    methods: {
        ...mapActions([
            'remove_all',
            'removeTutorial'
        ]),
        clearAll: function() {
            let action = confirm("Are you sure you want to 'CLEAR ALL', this would delete all your marked tutorials?");
            if (action) {
                this.remove_all();
                //this.$router.push('/explore');
            }
        },
        saveTT: function() {
            alert('saved');
            this.$router.push('/tt');
        },
        changePage: function(url) {
            this.$router.push(url);
        },
        deleteTutorial: function(t) {
            this.removeTutorial(t);
        }

    }
}
</script>

<style>
.timetable {
    display: block;
    padding: 1rem 0;
    overflow: auto;
}
.__time {
    background-color: var(--mainColor);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    min-width: 13.5vw;
}
.plate {
    box-sizing: border-box;
    height: 4.2rem;
    width: 100%;
    display: flex;
    align-items: stretch;
    border-radius: var(--borderRadius);
    background-color: var(--subSubtile);
    margin: .5rem .2rem;
    border: .15rem solid var(--subSubtile);
    cursor: pointer;
    justify-content: space-between;
    transition: .3s ease-in;
}
.plate:hover {
    box-shadow: 0 0 5px 2px var(--subColor);
}
.plate div {
    padding: .2rem .5rem;
    width: 80%;
}
.plate div > b {
 text-shadow: 0 0 1px black;
}
.plate .is-faint {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.remove-btn {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    opacity: .8;
    background-color: crimson;
    color: white;
    border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
    cursor: pointer;
}
.plate:hover .remove-btn {
    display: flex;
    visibility: visible;
    outline: none;
    box-shadow: none;
}
.remove-btn:hover {
    opacity: 1;
}

.is-faint {
    color: rgba(0,0,0,0.5);
}
</style>