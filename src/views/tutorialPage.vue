<template>
    <div class="page page-2">
        <section class="section">
            <page-alert msg="You are attending this tutorial" v-if="isSelected"/>
            <div class="b-top tutorial" section>
                <span class="__header">
                    <span v-for="(d, index) in day" :key="index">
                        <span v-if="(index+1) == day.length">{{d}}</span>
                        <span v-else>{{d}} and </span>
                    </span>
                </span>
                <h1 class="__title">
                    {{tutorial.title}}
                </h1>
                <div class="__tutor">
                    <img src="" :alt="`${tutor.name}`"/>
                    <div>
                        <b class="emp"><router-link :to="`/u/${tutor.name}`" :title="`View ${tutor.name}'s profile.`">{{tutor.name}}</router-link></b>
                        {{tutor.dept}},{{tutor.level}}
                    </div>
                </div>
            </div>
            <div class="tutorial" section>
                <b>Detail:</b><br />
                <p v-html="tutorial.description"></p>
            </div>
            <div class="tutorial" section>
                <i class="material-icons">whatshot</i> <!-- Change this icon to a 'calender'like icon,material-icon's calender has issues --> 
                [&nbsp;<span v-for="(d, index) in day" :key="index" class="emp">
                    <span v-if="(index+1) == day.length">{{d}}</span>
                    <span v-else>{{d}} and </span>
                </span>&nbsp;]
                <span class="emp">{{tutorial.time}}</span>
                <a href="#" style="padding: 0 .5rem;font-size: .8rem;" prevent>Add to Calender</a>
                <br /><br />
                <i class="material-icons">location_on</i><router-link :to="{path: `/locations/${tutorial.location}`}" target="_blank" :title="`Click to view ${tutorial.location}`" class="emp">{{tutorial.location}}</router-link>
                <a href="//maps.google.com" style="padding: 0 .5rem;font-size: .8rem;" prevent>View on Maps</a>
            </div>
            <img src="//" :alt="`Image of ${tutorial.location}`" class="tutorial" section />
            <div class="tutorial b-bottom" section>
                <b>Attendees</b>&nbsp;&nbsp;&nbsp;[{{tutorial.attenders.length}}]
                <div class="h-flex">
                    <router-link :to="{path: `/u/${persons}`}" class="small card" v-for="(persons, index) in tutorial.attenders" :key="index">
                        <div class="__image" style="background-image: url('')"></div>
                        <div class="__footer">
                            <div class="__hall">{{persons}}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>
        <aside>
            <div class="mobile stag-nav">
                <div v-if="!isSelected">
                    <button class="btn danger">Attend</button>
                </div>
            </div>
            <div class="desktop">
                Hello World
            </div>
        </aside>
    </div>
</template>

<script>
import Alert from '@/components/helperComponents/theAlert.vue'
import Card from '@/components/helperComponents/theCard.vue'

import { mapState } from 'vuex'

export default {
    name: 'Tutorialpage',
    components: {
        'page-alert' : Alert,
        Card
    },
    computed: {
        ...mapState([
            'selected',
            'tutorials',
            'tutors'
        ])
    },
    mounted() {
        this.date;
    },
    data() {
        return {
            /*tutorial(Object): content of this tutorial, based on the router.params
              isSelected(Bool): flag to show the NOTICE
              currentTutorial(Object)
            */
            tutorial: {},
            isSelected: false,
            day : [],
            tutor: {}
        }
    },
    created() {
        this.fetchData();
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function() {
            this.tutorial = this.tutorials.find(i => (i.title == this.$route.params.title && i.tutor==this.$route.params.tutor));
            if (this.selected.some(select => (select.title==this.tutorial.title && select.tutor==this.tutorial.tutor))) {
                this.isSelected = true;
            } else {
                this.isSelected = false
            }
            for(let i = 0; i <= this.tutorial.date.length; i++) {
            switch (this.tutorial.date[i]) {
                case 0:
                    this.day.push('Sundays');
                    break;
                case 1:
                    this.day.push('Mondays');
                    break;
                case 2:
                    this.day.push('Tuesdays');
                    break;
                case 3:
                    this.day.push('Wednesdays');
                    break;
                case 4:
                    this.day.push('Thursdays');
                    break;
                case 5:
                    this.day.push('Fridays');
                    break;
                case 6:
                    this.day.push('Saturdays');
                    break;
                }
            }
            this.tutor = this.tutors.find(i => (i.name == this.$route.params.tutor));            
        }
    }
}
</script>

<style>
</style>