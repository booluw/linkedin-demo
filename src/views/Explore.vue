<template>
    <div class="page">
        <section>
            <section class="section">
                <h2 class="brief" style="padding-top: 2.5rem;">Learn, anywhere in FUTMinna</h2>
                <div class="h-flex">
                    <location-card v-for="(location, index) in locations" :key="index" :detail="location"></location-card>
                </div>
            </section>
            <section class="section">
                <a name="recommended" id="recommended"></a>
                <h2 class="brief" style="padding: 4rem 0 1rem;">Recomended tutorials</h2>
                <div class="h-flex">
                    <page-card v-for="(tutorial, index) in tutorials" :key="index" :detail="tutorial" showRating="Yes"></page-card>
                </div>
            </section>
            <section class="section">
                <h2 class="brief" style="padding: 4rem 0 1rem;">Top rated tutorials to attend</h2>  
                <div class="v-flex">
                    <page-card v-for="(tutorial, index) in tutorials" :key="index" :detail="tutorial"></page-card>
                </div>
            </section>
        </section>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
import Card from '@/components/AppCard.vue'
import LocationCard from '@/components/LocationCard.vue'

import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Explore',
    components: {
        'location-card' : LocationCard,
        'page-card' :Card
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
    metaInfo() {
        return {
            title: 'Explore tutorials',
            meta: [
                {   vmid:'description',
                    name: 'description',
                    content: 'Organise and attend tutorials. Every course, every department and in every location in FUT Minna.'
                },
                {
                    vmid: 'keyword',
                    name: 'keyword',
                    content: 'Tutera, Join Tutera, Tutorials, Tutorials in FUTMinna, FUTMinna tutorials'
                }
            ]
        }
    }
}
</script>