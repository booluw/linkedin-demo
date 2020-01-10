<template>
    <router-link :to="{path: `/locations/${detail.hall}`}" class="small card" :title="`View all tutorials holding at ${detail.hall}`">
        <div class="__image" style="background-image: url('')"></div>
        <div class="__footer">
            <div class="__hall">{{detail.hall}}</div>
            <div class="__campus">{{detail.campus}}</div>
            <div class="__capacity"><i class="material-icons">fullscreen</i>{{detail.capacity||"Unknown"}}</div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'SmallCard',
    props: {
        detail: {
            type: Object,
            reqiured: true
        }
    }
}
</script>

<style>
.small.card {
    width: 35%;
    margin: .2rem;
    padding: 0;
    color: var(--headerText);
    background-color: rgba(100, 149, 237,.1);
    border-radius: var(--borderRadius);
    border: 1px solid rgba(100, 149, 237,.2);
    transition: .3s ease-in-out;
    cursor: pointer;
}
.small.card:hover  {
    box-shadow: 0 0px 5px 3px rgba(100, 149, 237,.3);
}
.small.card .__image {
    padding: 5rem 2rem;
    background-origin: border-box;
    background-position: center;
    background-color: rgba(0,0,0,.1);
    border-radius: var(--borderRadius) var(--borderRadius) 0 0;
}
.small.card .__footer {
    padding: 1rem .5rem .2rem;
    border-top: 1px solid rgba(100, 149, 237,.2);
}
.small.card .__hall {
    font-size: 1.2rem;
    font-weight: bold;
}
.small.card .__capacity {
    font-size: .9rem;
    margin-top: 1rem;
    color: grey;
}
@media (min-width: 1200px) {
    .small.card {
        width: 30%;
    }
}
</style>