<template>
    <div class="page">
        <section class="section">
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
    }
}
</script>