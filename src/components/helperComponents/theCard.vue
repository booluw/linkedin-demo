<template>
    <div class="card">
        <div class="__header">{{detail.date}}</div>
        <div class="__body" @click="changePage()">
            <h2 class="__title">{{detail.title}}</h2>
            <div class="__author">@{{detail.tutor}}</div>
            <div class="__location">
                <i class="material-icons">location_on</i>
                {{detail.location}}
            </div>
        </div>
        <hr />
        <div class="__footer">
            <div class="__attendees">
                <i class="material-icons">account_box</i>
                {{detail.attenders}}
            </div>
            <button class="__btn">Attend</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Card',
    props: {
        detail : {
            type: Object,
            required: true
        }
    },
    methods: {
        changePage: function() {
            this.$router.push({path: `/${this.detail.tutor}/${this.detail.title}`});
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    text-align: left;
    flex-direction: column;
    border: 1px solid rgba(100, 149, 237,.2);
    border-radius: var(--borderRadius);
    margin: .15rem .2rem;
    padding: 0;
    width: 80%;
    background-color: rgba(100, 149, 237,.1);
}
.__header {
    padding: .5rem;
    color: var(--mainColor);
    font-weight: bold;
}
.__body {
    padding: .5rem .5rem 2.5rem;
    cursor: pointer;
}
.__body > * {
    padding: 0 0 .5rem;
}
.__title {
    font-size: 1.5rem;
    margin: 0;
    color: var(--headerText);
    font-weight: bolder;
    padding: .7rem 0;
}
.__author {
    font-size: 1.2rem;
}
.__location {
    color: rgba(0,0,0,.5);
}
.material-icons {
    color: rgb(151, 148, 148);
}
.__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem .5rem;
    border-top: 1px solid rgba(100, 149, 237,.2);
}
.__btn {
    background-color: transparent;
    padding: 1rem 1.8rem;
    color: var(--mainColor);
    font-weight: bold;
    border: 1.5px solid var(--mainColor);
    border-radius: 3rem;
    transition: .3s ease-in;
    cursor: pointer;
}
.__btn:hover {
    border-color: var(--mainColor);
    background-color: var(--mainColor);
    color: white;
}
@media (min-width: 1200px) {
    .card {
        width: 25%;
    }
}
</style>