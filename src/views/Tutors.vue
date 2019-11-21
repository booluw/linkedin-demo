<template>
    <div class="page">
        <section class="section">
            <h2 class="brief" style="padding: 2.5rem 1rem 0;">Users</h2>
            <div class="v-flex">
                <tutor-card v-for="(tutor, index) in tutors" :key="index" :detail="tutor"/>
                <tutor-card v-for="(tutor, index) in tutors" :key="index" :detail="tutor"/>
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
import tutorCard from '@/components/helperComponents/tutorCard.vue'

import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Tutors',
    components: {
        'tutor-card': tutorCard
    },
    computed: {
        ...mapState([
            'tutors'
        ])
    }
}
</script>