<template>
    <div class="page">
        <section class="section">
            <transition enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <page-alert msg="You are attending this tutorial" v-if="isSelected"/>
            </transition>
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
                    <button class="__btn" @click="add_tutorial()" v-if="!isSelected">Attend</button>
                    <button class="__btn danger" @click="remove_tutorial()" v-if="isSelected">Cancel Attend</button>
                </div>
            </div>
            <div class="tutorial" section>
                <div style="display:flex;">
                    <i class="material-icons">whatshot</i> <!-- Change this icon to a 'calender'like icon,material-icon's calender has issues --> 
                    <div style="padding: 0;">
                        &nbsp;<span v-for="(d, index) in day" :key="index" class="emp">
                            <span v-if="(index+1) == day.length">{{d}}</span>
                            <span v-else>{{d}} and </span>
                        </span>&nbsp;
                        <br />
                        <span class="emp">{{tutorial.time}}</span>
                        <a href="#" style="padding: 0 .5rem;font-size: .8rem;" prevent>Add to Calender</a>
                    </div>
                </div>
                <br />
                <i class="material-icons">location_on</i><router-link :to="{path: `/locations/${tutorial.location}`}" target="_blank" :title="`Click to view ${tutorial.location}`" class="emp">{{tutorial.location}}</router-link>
                <a href="//maps.google.com" style="padding: 0 .5rem;font-size: .8rem;" prevent>View on Maps</a>
            </div>
            <div class="tutorial" section>
                <b>Detail:</b><br />
                <p v-html="tutorial.description"></p>
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
        <section class="section">
            <div section>
                Lorem, ipsum dolor sit amet 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deleniti porro iure voluptatem molestiae culpa, sit dolor sequi doloremque tempora.
            </div>
            <div section>
                Lorem, ipsum dolor sit amet 
            </div>
            <div section>
                Lorem, ipsum dolor sit amet 
            </div>
            <div section>
                Lorem, ipsum dolor sit amet 
            </div>
            <div section>
                Lorem, ipsum dolor sit amet 
            </div>
            <div section>
                Lorem, ipsum dolor sit amet 
            </div>
            <div section>
                Lorem, ipsum dolor sit amet 
            </div>
            <div section>
                Lorem, ipsum dolor sit amet 
            </div>
            <div section>
                Lorem, ipsum dolor sit amet 
            </div>
            <div section>
                Lorem, ipsum dolor sit amet 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deleniti porro iure voluptatem molestiae culpa, sit dolor sequi doloremque tempora.
            </div>
        </section>
    </div>
</template>

<script>
import Alert from '@/components/helperComponents/theAlert.vue'
import Card from '@/components/helperComponents/theCard.vue'

import { mapState, mapMutations, mapActions } from "vuex"

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
        console.log(this.$route);
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        ...mapMutations ([
            'ADD_TUTORIAL',
            'REMOVE_TUTORIAL'
        ]),
        ...mapActions ([
            'removeTutorial'
        ]),
        fetchData: function() {
            this.tutorial = this.tutorials.find(i => (i.title == this.$route.params.title));
            this.tutor = this.tutors.find(i => (i.name ==this.tutorial.tutor));
            if (this.selected.some(select => (select.title==this.tutorial.title))) {
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
        },
        add_tutorial: function() {
            this.ADD_TUTORIAL(this.tutorial);
            this.isSelected = true;
            console.log(this.isSelected)
        },
        remove_tutorial: function() {
            this.removeTutorial(this.tutorial)
            this.isSelected = false
            console.log(this.isSelected)
        }
    }
}
</script>