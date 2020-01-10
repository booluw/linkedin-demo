<template>
    <router-link :to="{path: `/u/${detail.name}`}" class="small card" :title="`Checkout ${detail.name}'s profile on Tutera`">
        <div class="__image">
            <img src="@/assets/logo.png" class="img" />
        </div>
        <div class="__footer">
            <div class="__hall">{{detail.name}}</div>
            <div class="__campus">{{detail.dept}},{{detail.level}}</div>
            <div class="rank">
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons is-not">star</i>
                <i class="material-icons is-not">star</i>
            </div>
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
    position: relative;
    width: 45%!important;
    margin: .5rem .2rem;
    padding: 0;
    color: var(--text);
    background-color: var(--subSubtile);
    border-radius: var(--borderRadius);
    border: none;
    transition: .3s ease-in-out;
    cursor: pointer;
}
.small.card:hover {
    box-shadow: 0 0 5px 3px rgba(100, 149, 237,.3);
}
.small.card .__image {
    position: relative;
    padding: 3rem 1rem;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,.1);
    border-radius: var(--borderRadius) var(--borderRadius) 0 0;
}
.small.card .img {
    position: absolute;
    border-radius: 20rem;
    border: 5px solid #C9CED6;
    width: 55%;
    height: 6rem;
    bottom: -3.5rem;
    left: 19%;
}
.small.card .__footer {
    padding: 5rem .5rem 1rem;
    border-top: 1px solid rgba(100, 149, 237,.2);
}
.small.card .__hall {
    font-size: 1.2rem;
    font-weight: bold;
}
.rank .material-icons {
    color: var(--subColor);
    vertical-align: top;
    font-size: 1rem;
}
.rank .material-icons.is-not {
    color: rgba(100, 149, 237,0.3);
}
@media (min-width: 1200px) {
    .small.card {
        width: 30%!important;
    }
    .small.card .img {
        width: 42%;
        height: 6rem;
        bottom: -3.5rem;
        left: 25%;
    }
}
</style>