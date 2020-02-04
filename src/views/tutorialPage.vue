<template>
    <div class="page">
        <section class="section">
            <transition enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <page-alert msg="You are attending this tutorial" v-if="isSelected"/>
            </transition>
            <div class="profile">
                <div class="__left">
                    <div class="img">
                        <img src="../assets/logo.png" class="__img" />
                    </div>
                    <div class="details">
                        <h1 class="__name">{{tutorial.title}}</h1>
                        <div>
                            <router-link :to="`/u/${tutorial.tutor}`"><h4 class="__subname">{{tutorial.tutor}}</h4></router-link >
                        </div>
                        <div>
                            <i class="material-icons">location_on</i>
                            <router-link :to="`/locations/${tutorial.location}`">{{tutorial.location}}</router-link>,<small>{{tutorial.campus}}</small>
                        </div>
                        <br />
                        <div>
                            <i class="material-icons">today</i>
                            <span v-for="(days, index) in tutorial.date" :key="index">
                                <span v-if="index === 0"> {{days}}</span>
                                <span v-else-if="index == tutorial.date.length-2">{{days}}</span>
                                <span v-else> and {{days}}</span>
                            </span>, {{tutorial.time}}
                            <br />
                        </div>
                        <br/>
                        <div class="notif is-warning" v-if="tutorial.note">
                            {{tutorial.note ||"Hello guys, we won't be available this week."}}
                        </div>
                        <br />
                        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut faster">
                            <div class="links" v-if="!isSelected">
                                <button class="subtile-link is-default" @click.prevent="add_tutorial()" v-if="isSelected == false">
                                    <i class="material-icons">star</i>Attend
                                </button>
                                <button class="subtile-link is-disabled" v-if="!isSelected">
                                    <i class="material-icons">warning</i>
                                    Report Tutorial
                                </button>
                            </div>
                        </transition>
                        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut faster">
                            <div class="links" v-if="isSelected">
                                <button class="subtile-link is-dangerous" @click.prevent="remove_tutorial()">
                                    <i class="material-icons is-not">star</i>Cancel Attend
                                </button>
                                <router-link :to="`${tutorial.title}/quiz`" class="subtile-link is-successful">
                                    <i class="material-icons">question_answer</i>
                                    Take Quiz
                                </router-link>
                            </div>
                        </transition>
                    </div>
                </div>
                <div class="__right">
                    <div class="quote">
                        <h4 class="snub-header">
                            description
                        </h4>
                        <div class="text has-pseudo" style="padding: 0;">
                            {{tutorial.description}}
                        </div><br />
                        <hr />
                    </div>
                    <div class="tabs">
                        <div class="__header">
                            <a href="#" :class="tab=='about' ? '__link is-active' : '__link'" @click.prevent="tab='about'">
                                <i class="material-icons">account_box</i> about
                            </a>
                            <a href="#" :class="tab=='tutorials'?'__link is-active': '__link'" @click.prevent="tab='tutorials'">
                                <i class="material-icons">school</i> tutorials
                            </a>
                        </div>
                        <transition-group enter-active-class="animated fadeIn slower" leave-active-class="animated fadeOut faster">
                            <div class="__tab" v-if="tab=='tutorials'" key="tutorials">
                                <h4 class="snub">tutorials</h4>
                                <div class="v-flex">
                                </div>
                            </div>
                            <div class="__tab" v-if="tab=='about'" key="about">
                                <h4 class="snub">additional information</h4>
                                <div class="__item">
                                    <b>Level:</b>{{tutorial.level}}
                                </div>
                                <div class="__item">
                                    <b>Campus:</b>{{tutorial.campus}}
                                </div>
                            </div>
                        </transition-group>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
import Alert from '@/components/AppAlert.vue'
import Card from '@/components/AppCard.vue'

import { mapState, mapMutations, mapActions } from "vuex"

export default {
    name: 'Tutorialpage',
    components: {
        'page-alert': Alert,
       'page-card': Card
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
            tutor: {},
            tab: 'about'
        }
    },
    mounted() {
        this.fetchData();
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
            this.tutorial = this.tutorials.find(i => (i.title == this.$route.params.title && i.tutor == this.$route.params.tutor));
            this.tutor = this.tutors.find(i => (i.name ==this.tutorial.tutor));
            if (this.selected.some(select => (select.title==this.tutorial.title))) {
                this.isSelected = true;
            } else {
                this.isSelected = false
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
    },
    metaInfo() {
        let tutorial = this.tutorial;
        return {
            title: `Tutorial: ${tutorial.title} by ${tutorial.tutor}`,
            meta: [
                {   vmid:'description',
                    name: 'description',
                    content: `${tutorial.description}`
                },
                {
                    vmid: 'keyword',
                    name: 'keyword',
                    content: `${tutorial.title}, ${tutorial.tutor}, Tutorials, FUTMinna,FUTMinna tutorials, Tutorials in ${tutorial.location}, Tutorials in ${tutorial.campus}`
                }
            ]
        }
    }
}
</script>
<style scoped>
.is-dangerous {
    color: crimson;
    background-color: rgba(220, 20, 60, 0.3);
}
.is-dangerous:hover {
    background-color: rgba(220, 20, 60, 0.3);
    box-shadow: 0 0 2px 3px rgba(220, 20, 60, 0.2);
}
.is-default {
    color: var(--mainColor);
    background-color: var(--mainSubtile);
}
.is-successful {
    color: rgba(34, 139, 34, 0.6);
    background-color: rgba(34, 139, 34, 0.1);
}
.__subname {
    text-decoration: underline;
}
.__subname:hover {
    text-decoration: none;
}
div > .material-icons {
    opacity: .9;
}
</style>