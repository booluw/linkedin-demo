<template>
    <div>
        <h1>Hello World</h1>
        {{users}}
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'UserProfile',
    data() {
        return {

        }
    },
    computed: {
        ...mapState([
            'users'
        ])
    },
    methods: {

    }
}
</script>