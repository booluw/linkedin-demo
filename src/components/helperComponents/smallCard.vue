<template>
    <div class="card" @click="changePage()" :title="`View all tutorials holding at ${detail.hall}`">
        <div class="__image" style="background-image: url('')"></div>
        <div class="__footer">
            <div class="__hall">{{detail.hall}}</div>
            <div class="__campus">{{detail.campus}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SmallCard',
    props: {
        detail: {
            type: Object,
            reqiured: true
        }
    },
    methods: {
        changePage: function() {
            this.$router.push({path: `/${this.detail.campus}/${this.detail.hall}`});
        }
    }
}
</script>

<style scoped>
.card {
    width: 45%;
    margin: 0 .2rem;
    padding: 0;
    background-color: rgba(100, 149, 237,.1);
    border-radius: var(--borderRadius);
    border: 1px solid rgba(100, 149, 237,.2);
    transition: .3s ease-in-out;
    cursor: pointer;
}
.card:hover {
    box-shadow: 0 0 5px 3px rgba(100, 149, 237,.3);
}
.__image {
    padding: 5rem 2rem;
    background-origin: border-box;
    background-position: center;
    background-color: rgba(0,0,0,.1);
    border-radius: var(--borderRadius) var(--borderRadius) 0 0;
}
.__footer {
    padding: 1rem .5rem;
    border-top: 1px solid rgba(100, 149, 237,.2);
}
.__hall {
    font-size: 1.2rem;
    font-weight: bold;
}
@media (min-width: 1200px) {
    .card {
        width: 20%;
    }
}
</style>