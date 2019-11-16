<template>
    <div class="page page-2">
        <section class="section">
            <div class="config mobile">
                <router-link to="/" class="config-nav">
                    <i class="material-icons">home</i>
                    Home
                </router-link>
            </div>
            <h2 class="brief" style="padding-top: 2.5rem;">Learn, anywhere in FUTMinna</h2>
            <div class="h-flex">
                <small-card v-for="(location, index) in locations" :key="index" :detail="location" />
            </div>
            <a name="recommended" id="recommended"></a>
            <h2 class="brief" style="padding: 4rem 0 1rem;">Recomended tutorials</h2>
            <div class="h-flex">
                <page-card v-for="(tutorial, index) in tutorials" :key="index" :detail="tutorial" showRating="Yes"></page-card>
            </div>
            <h2 class="brief" style="padding: 4rem 0 1rem;">Top rated tutorials to attend</h2>  
            <div class="v-flex">
                <page-card v-for="(tutorial, index) in tutorials" :key="index" :detail="tutorial"></page-card>
            </div>
        </section>
        <aside>
            <div class="config desktop">
                <router-link to="/" class="config-nav">
                    <i class="material-icons">home</i>
                    Home
                </router-link>
                <b>Explore</b>
            </div>
            <div class="desktop" style="padding: 2rem 0 0;">
                <Dashboard />
            </div>
            <transition class="mobile" enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
                <div class="h-flex mobile stag-nav" v-if="selectedTotal">
                    <router-link to="/profile?dashboard" class="aside big-btn">
                        <i class="material-icons">star_outline</i>
                        <div class="badge danger">{{selectedTotal}}</div>
                    </router-link>
                </div>
            </transition>
        </aside>
    </div>
</template>

<script>
import Card from '@/components/helperComponents/theCard.vue'
import SmallCard from '@/components/helperComponents/smallCard.vue'
import Dashboard from '@/components/helperComponents/theDashboard.vue'

import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Explore',
    components: {
        'small-card' : SmallCard,
        'page-card' :Card,
        Dashboard
    },
    computed: {
        ...mapState ([
            'tutorials',
            'locations'
        ]),
        ...mapGetters ([
            'selectedTotal'
        ])
    },
    data() {
        return {

        }
    }    
}
</script>