<template>
    <div class="page">
        <section class="section">
            <h1>Create the next big tutorial</h1>
            <form action="" method="" name="">
                <div class="notif is-dangerous" v-if="details.title.length >= 30">
                    <b>Stop</b>, maximum length of text reached.<br />
                    Tutorial's title should not exceed 30 letters, including spaces.
                </div>
                <div class="input-group">
                    <label for="title" class="label with-btn">
                        Tutorial's Title
                        <button class="btn is-dangerous" @click.prevent="details.title = ''">Revert</button>
                    </label>
                    <input type="text" id="title" v-model="details.title" placeholder="What would your amazing tutorial be called?" :disabled="details.title.length >= 30" class="input"/>
                </div>
                <div class="notif is-warning" v-if="(details.description.length >= 1)&&(details.description.length <= 100)">
                    Its advised that your <b>Tutorial's description</b> should be above 100 words. Be free to explain in details.
                    <br />
                    <small>{{100 - details.description.length}} more</small>
                </div>
                <div class="input-group">
                    <div class="label">Tutorial's Description</div>
                    <textarea v-model.lazy="details.description" class="input"></textarea>
                </div>
                <div class="notif is-warning" v-if="details.date.length >= 3">
                    Please note that, <b>Its adviced</b> to organise a single tutorial at most 3-times a week.
                </div>
                <div class="input-group">
                    <div class="label">Tutorial's Days</div>
                    <div class="input">
                        <input type="checkbox" v-model="details.date" value="Sundays" />Sunday
                        <input type="checkbox" v-model="details.date" value="Mondays" />Monday
                        <input type="checkbox" v-model="details.date" value="Tuesdays" />Tuesday
                        <input type="checkbox" v-model="details.date" value="Wednesdays" />Wednesday
                        <input type="checkbox" v-model="details.date" value="Thursdays" />Thursday
                        <input type="checkbox" v-model="details.date" value="Fridays" />Friday
                        <input type="checkbox" v-model="details.date" value="Saturdays" />Saturday
                    </div>
                </div>
                <div class="notif is-dangerous" v-if="hall.length != 0">
                    <b>{{details.location}}</b> is being used by {{hall[0].tutor}} on {{hall[0].date[0]}} by {{hall[0].time}}. It is therefore not available
                </div>
                <div class="v-flex" style="justify-content: space-between; padding: 0 0;">
                    <div class="input-group">
                        <div class="label">Tutorial's Level</div>
                        <select v-model="details.level" class="input">
                            <template v-for="level in levels">
                                <option :value="level" :key="level">{{level}}</option>
                            </template>
                        </select>
                    </div>
                    <div class="input-group">
                        <label for="time" class="label">Tutorial's Time</label>
                        <select v-model="details.time" class="input">
                            <option value="8:00hrs">8:00hrs</option>
                            <template v-for="(i, index) in time">
                                <option :value="`${i+8}:00hrs`" :key="`${i}+8`">{{i+8}}:00hrs</option>
                            </template>
                            <template v-for="(i, index) in time">
                                <option :value="`${i+14}:00hrs`" :key="`${i}+14`">{{i+14}}:00hrs</option>
                            </template>
                            <option value="21:00hrs">21:00hrs</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <div class="label">Tutorial's Campus</div>
                        <select v-model="details.campus" class="input">
                            <option value="Bosso">Bosso</option>
                            <option value="Gidan Kwano">Gidan Kwano</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <div class="label with-btn">
                            Tutorial's Hall in {{details.campus||'FUT Minna'}}
                            <i :class="available=='close' ? 'material-icons is-dangerous': 'material-icons is-sucessful'">{{available}}</i>
                        </div>
                        <select v-model="details.location" class="input">
                            <option v-for="location in filtered" :key="location.hall" :value="location.hall">
                                {{location.hall}}
                            </option>
                        </select>
                    </div>
                </div>
                <br />
                <small>
                    By clicking 'Launch', you agree to comply with the rules and regulations guilding contents and information on this site.
                </small>
                <div class="v-flex" style="justify-content: flex-end;width: 100%;padding: 2rem 0 0;">
                    <button class="btn is-default" @click.prevent="saveTutorial()">Launch</button>
                    <button type="reset" class="btn btn-small">Revert</button>
                </div>
            </form>
        </section>
        <section class="preview">
            <h3 class="snub">card preview</h3>
            <page-card v-bind:detail="details" commentBtn="no"/>
            <h3 class="snub">tutorial description</h3>
            {{details.description}}
            <h3 class="snub">tutorial level</h3>
            {{details.level}}
            <h3 class="snub">tutorial campus</h3>
            {{details.campus}}
        </section>
    </div>
</template>

<script>
import Card from "@/components/AppCard.vue";
import { mapState } from 'vuex';

export default {
    name: 'Create',
    components: {
        'page-card': Card
    },
    computed: {
        ...mapState([
            'locations',
            'tutorials',
            'time',
            'levels'
        ])
    },
    watch: {
        'details.location': 'checkAvailability',
        'details.time': 'checkAvailability',
        'details.campus': 'filterLocations'
    },
    data() {
        return {
            details: {
            'date': [],
            'time':'',
            'title':'',
            'tutor':'Jack',
            'location':'',
            'attenders': [],
            'rating': [0],
            'description': "",
            'campus': '',
            'level': ''},
            filtered: [],
            available: 'check',
            hall: []
        }
    },
    methods: {
        filterLocations: function() {
            let campus = this.details.campus;
            this.filtered = this.locations.filter(i => (i.campus == campus)); 
            this.details.location = ""
        },
        checkAvailability: function() {
            let availability = false;
            let isIt = this.tutorials.filter(i => (i.location == this.details.location && i.time == this.details.time));
            this.hall = isIt;
            if(isIt.length !== 0) {
                this.available = 'close';
            } else {
                this.available = 'check';
            }
        },
        saveTutorial: function() {
            let details = this.details;
            if((details.title.length !=0)&&(details.description.length != 0)&&(details.time.length != 0)&&(details.date.length !=0)&&(details.location.length !=0)&&(details.level.length !=0)) {
                alert('Submitted');
            } else {
                alert('Something is wrong');
            }
        }
    }
}
</script>

<style scoped>
.preview {
    margin: 0 2rem 0 0;
    padding: 0 0;
}
section .card {
    width: 100%;
    height: auto;
}
.input-group .material-icons {
    background-color: rgb(158, 158, 158);
    border-radius: 2rem;
    margin: .5rem 0;
}
.material-icons.is-sucessful {
    color: forestgreen;
}
.material-icons.is-dangerous {
    color: crimson;
}
</style>