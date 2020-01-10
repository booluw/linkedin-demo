<template>
    <div class="page">
        <section class="section">
            <h2 class="brief" style="padding: 2.5rem 1rem 0;">Users</h2>
            <div class="v-flex">
                <tutor-card v-for="(tutor, index) in tutors" :key="index" :detail="tutor"/>
                <tutor-card v-for="(tutor, index) in tutors" :key="index" :detail="tutor"/>
            </div>
        </section>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
import TutorCard from '@/components/TutorCard.vue'

import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Tutors',
    components: {
        'tutor-card': TutorCard
    },
    computed: {
        ...mapState([
            'tutors'
        ])
    }
}
</script>