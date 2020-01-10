<template>
    <div class="page">
        <section class="section">
            <div class="profile">
                <div class="__left">
                    <div class="img">
                        <img src="../assets/logo.png" class="__img" />
                    </div>
                    <div class="details">
                        <h1 class="__name">{{tutor.realName||tutor.name}}</h1>
                        <div>
                            <h4 class="__subname">@{{tutor.name}}</h4>,<small>{{tutor.level}}</small>
                        </div><!--
                        <h4 class="snub">ratings</h4>
                        <div class="rank">
                            <b>3.0</b>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                            <i class="material-icons is-not">star</i>
                            <i class="material-icons is-not">star</i>
                        </div>
                        <br /> --->
                        <h4 class="snub">actions</h4>
                        <div class="links">
                            <!-- 
                                The below "Call User" button allows the user to send
                                call this user directly. *Wink*
                            -->
                            <a href="" class="subtile-link is-active">
                                <i class="material-icons">phone</i>Call
                            </a>
                            <!-- 
                                The below "Send Message" button allows the user to send
                                message to this tutor via whatsapp. *Wink*
                            -->
                            <a :href="'https://wa.me/234'+tutor.phone" class="subtile-link">
                                <i class="material-icons">mail</i> Message
                            </a>
                            <a href="" class="subtile-link is-disabled">
                                <i class="material-icons">warning</i>
                                Report
                            </a>
                        </div>
                    </div>
                </div>
                <div class="__right">
                    <div class="quote">
                        <h4 class="snub-header">
                            Favourite quote
                        </h4>
                        <div class="text has-pseudo" style="padding: 0;">
                            {{tutor.quote}}
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
                            <a href="#" :class="tab=='rate'?'__link is-active': '__link'" @click.prevent="tab='rate'">
                                <i class="material-icons">star</i> rate
                            </a>
                        </div>
                        <transition-group enter-active-class="animated fadeIn slower" leave-active-class="animated fadeOut faster">
                            <div class="__tab" v-if="tab=='tutorials'" key="tutorials">
                                <h4 class="snub">tutorials</h4>
                                <div class="v-flex">
                                    <page-card v-for="tutorials in tutorTutorials" :key="tutorials.time" :detail="tutorials" />
                                </div>
                            </div>
                            <div class="__tab" v-if="tab=='about'" key="about">
                                <h4 class="snub">academic information</h4>
                                <div class="__item">
                                    <b>Level:</b> <span>{{tutor.level}}</span>
                                </div>
                                <div class="__item">
                                    <b>Department:</b> <span>{{tutor.dept}}</span>
                                </div>
                                <div class="__item">
                                    <b>Faculty:</b> <span>{{tutor.faculty}}</span>
                                </div>
                                <h4 class="snub">contact information</h4>
                                <div class="__item">
                                    <b>WhatsApp:</b> <span>{{tutor.phone || "User hasn't provided this information"}}</span>
                                </div>
                                <div class="__item">
                                    <b>E-mail:</b> <span>{{tutor.email || "User does not want his e-mail shared"}}</span>
                                </div>
                                <div class="__item">
                                    <b>Address:</b> <span>{{tutor.address || "User hasn't provided this information"}}</span>
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
import { mapState } from "vuex";

import Card from '@/components/AppCard.vue'

export default {
    name: 'tutorPage',
    components: {
        'page-card' : Card
    },
    computed: {
        ...mapState([
            'tutors',
            'tutorials'
        ])
    },
    data() {
        return {
            tutor: {},
            tab: 'about',
            tutorTutorials: []
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData: function() {
            this.tutor = this.tutors.find(i => (i.name == this.$route.params.tutor));
            this.tutorTutorials = this.tutorials.filter(i => (i.tutor == this.$route.params.tutor));
            //this.tutor = this.tutors.find(i => (i.name ==this.tutorial.tutor));           
        },
    }
}
</script>

<style>

</style>