<template>
    <div class="page">
        <section class="section">
            <div class="profile">
                <div class="__left">
                    <div class="img">
                        <img src="../assets/logo.png" class="__img" />
                    </div>
                    <div class="details">
                        <h1 class="__name">{{location.hall}}</h1>
                        <h2 class="__size" title="Max capacity"><i class="material-icons">fullscreen</i>{{location.capacity}}</h2>
                        <div>
                            <h4 class="__subname">{{location.campus}}</h4>
                        </div>
                        <div class="alert">
                            {{location.decription||"Oops! This location currently doesn't have a description, why not add one."}}
                        </div>
                        <div class="section" style="box-shadow: none;padding: 0;margin: 3.5rem 0 0;">
                            <a href="#" class="__btn">Get directions</a>
                        </div>
                    </div>
                </div>
                <div class="__right" style="align-items: flex-start;">
                    <div class="quote"></div>
                    <div class="tabs">
                        <div class="__header">
                            <a href="#" :class="tab=='tutorials' ? '__link is-active': '__link'" @click.prevent="tab='tutorials'">
                                <i class="material-icons">school</i> tutorials
                            </a>
                            <a href="#" :class="tab=='nearby' ? '__link is-active': '__link'" @click.prevent="tab='nearby'">
                                <i class="material-icons">my_location</i> Nearby halls
                            </a>
                        </div>
                        <transition-group enter-active-class="animated fadeIn slower" leave-active-class="animated fadeOut faster">
                            <div class="__tab" v-if="tab == 'tutorials'" key="tutorials">
                                <h4 class="snub">tutorials hosted in {{location.hall}}</h4>
                                <div class="" v-if="tutorial!=[]">
                                    This location doesn't host any tutorial yet.
                                </div>
                                <div class="v-flex" v-else>
                                    Hello
                                </div>
                            </div>
                            <div class="__tab" v-if="tab == 'nearby'" key="nearby">
                                <h4 class="snub">other Locations in {{location.campus}}</h4>
                                <div class="v-flex">
                                    <location-card v-for="location in nearby" :detail="location" :key="location.hall"></location-card>
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
import LocationCard from '@/components/LocationCard.vue'

export default {
    name: 'locationPage',
    components: {
        'page-card': Card,
        'location-card': LocationCard
    },
    computed: {
        ...mapState([
            'locations',
            'tutorials'
        ])
    },
    data() {
        return {
            location: '',
            nearby: '',
            tutorial: '',
            tab: 'tutorials'
        }
    },
    watch: {
        '$route': 'fetchData'
    },
    mounted() {
        this.fetchData();
        /*'$route': {
            this.fetchData();
        } */
    },
    methods: {
        fetchData: function() {
            this.location = this.locations.find(i => (i.hall == this.$route.params.location));
            this.nearby = this.locations.filter(i => (i.campus == this.location.campus));
            this.tutorial = this.tutorials.filter(i => (i.location == this.$route.params.location));
        }
    }
}
</script>
<style scoped>
.__size {
    color: grey;
    font-size: 1rem;
    padding: 0;
    margin: 0;
    display: inline-block;
}
</style>