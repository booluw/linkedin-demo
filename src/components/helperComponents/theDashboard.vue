<template>
    <div class="dasboard">
        <div class="desktop stag">
            <div class="__text">Selected tutorials:</div>
            <div class="__circle">{{selectedTotal}}</div>
        </div>
        <h3 class="emp">Next tutorial</h3>
        <div class="c">
            <page-card :detail="tutorials[0]" commentBtn="1"></page-card>
        </div>
        <h3 class="emp">Notifications</h3>
        <div class="notify" section>
            <img src="" class="__image"/>
            <div class="__body">
                <div class="header">CPT 311</div>
                <div class="text">
                    An image was just added to this tutorial.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/helperComponents/theCard.vue'

import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Dashboard',
    computed: {
        ...mapGetters([
            'selectedTotal'
        ]),
        ...mapState([
            'tutorials'
        ])
    },
    components: {
        'page-card': Card
    }
}
</script>

<style scoped>
h3 {
    padding: .5rem 0;
    margin: 0;
}
.stag {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 2rem 0;
}
.__text {
    font-size: 1rem;
    background-color: var(--subColor);
    padding: 1rem 1.5rem;
    width: 70%;
    border-radius: var(--borderRadius) 0 0 var(--borderRadius);
    border: 2px solid var(--mainColor);
    box-shadow: 0 0 1px 5px var(--subColor);
}
.__circle {
    width: 25%;
    background-color: var(--mainColor);
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    position: absolute;
    right: 0;
    border: 2px solid var(--subColor);
    box-shadow: 0 0 1px 5px var(--mainColor);
    color: white;
}
.notification {
    padding: .7rem 1rem;
}
.notify {
    display: flex;
}
.__body {
    display: flex;
    flex-direction: column;
}
.header {
    background-color: transparent;
    box-shadow: none;
    font-weight: bold;
    text-shadow: 0 0 3px 1px grey;
    padding: 0 0 .5rem;
}
.__image {
    width: 50%;
    height: auto;
    background-color: rgba(0,0,0,.5);
    margin: 0 1rem 0 0;
}
.c > * {
    width: 100%!important;
    background-color: rgb(212, 209, 209);
}
</style>