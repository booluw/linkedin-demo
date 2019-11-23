<template>
    <router-link :to="{path: `/u/${detail.name}`}" class="small card" :title="`Checkout ${detail.name}'s profile on Tutera`">
        <div class="__image" style="background-image: url('')"></div>
        <div class="__footer">
            <div class="__hall">{{detail.name}}</div>
            <div class="__campus">{{detail.dept}},{{detail.level}}</div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'tutorCard',
    props: {
        detail: {
            required: true
        }
    }
}
</script>

<style scoped>
.small.card {
    width: 45%!important;
    margin: .5rem .2rem;
    padding: 0;
    color: var(--text);
    background-color: var(--subSubtile);
    border-radius: var(--borderRadius);
    border: 1px solid rgba(100, 149, 237,.2);
    transition: .3s ease-in-out;
    cursor: pointer;
}
.small.card:hover {
    box-shadow: 0 0 5px 3px rgba(100, 149, 237,.3);
}
.small.card .__image {
    padding: 5rem 2rem;
    background-origin: border-box;
    background-position: center;
    background-color: rgba(0,0,0,.1);
    border-radius: var(--borderRadius) var(--borderRadius) 0 0;
}
.small.card .__footer {
    padding: 1rem .5rem;
    border-top: 1px solid rgba(100, 149, 237,.2);
}
.small.card .__hall {
    font-size: 1.2rem;
    font-weight: bold;
}
@media (min-width: 1200px) {
    .small.card {
        width: 30%!important;
    }
}
</style>