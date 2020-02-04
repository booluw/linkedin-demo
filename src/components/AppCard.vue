<template>
    <div class="card">
        <div class="__header">
            <span v-for="(days, index) in detail.date" :key="index">
                <span v-if="index === 0">{{days}}</span>
                <span v-else-if="index == detail.date.length-2">{{days}}</span>
                <span v-else>and {{days}}</span>
            </span>
            {{detail.time}}
        </div>
        <div class="__body" @click="changePage()">
            <h2 class="__title">{{detail.title}}</h2>
            <div class="__author">
                <i class="material-icons">account_circle</i>
                {{detail.tutor}}
            </div>
            <div class="__location">
                <i class="material-icons">location_on</i>
                {{detail.location}}
            </div>
        </div>
        <div class="__footer">
            <div class="__attendees" v-if="showRating=='No'">
                <i class="material-icons" v-if='commentBtn=="Yes"'>check_circle</i>
                <span v-else>Attending:</span>
                {{attenders}}
            </div>
            <div class="__attendees" v-else>
                <i class="material-icons">star</i>
                {{review}}
            </div>
            <div v-if='commentBtn=="Yes"'>
                <button class="__btn is-selected" @click="remove_tutorial()" v-if="isSelected">Attending</button>
                <button class="__btn" @click="add_tutorial()" v-if="!isSelected">Attend</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
    name: 'Card',
    props: {
        detail : {
            type: Object,
            required: true
        },
        showRating: {
            type: String,
            required: false,
            default: 'No'
        },
        commentBtn: {
            type: String,
            required: false,
            default: 'Yes'
        }
    },
    mounted() {
        this.checker()
    },
    data() {
        return {
            isSelected: false,
            day: []
        }
    },
    computed: {
        ...mapState([
            'selected'
        ]),
        attenders: function() {
            let sum = 0;
            for(let i = 0; i <= this.detail.attenders.length; i++) {
                sum =+ i;
            }
           return sum
        },
        review: function() {
            let avg, sum=0;
            for(let i = 0;i < this.detail.rating.length; i++) {
                sum += this.detail.rating[i];
            }
            avg = sum / this.detail.rating.length;
            return avg.toFixed(1)
        }
    },
    methods: {
        ...mapActions ([
            'removeTutorial'
        ]),
        changePage: function() {
            this.$router.push({name: 'tutorialPage',params: {title: `${this.detail.title}`, tutor: `${this.detail.tutor}`}});
        },
        checker: function() {
            //Checks if this tutorial is selected
            if (this.selected.some(select => (select.title==this.detail.title && select.tutor==this.detail.tutor))) {
                this.isSelected = true;
            } else {
                this.isSelected = false
            }
        },
        add_tutorial: function() {
            this.$store.commit('ADD_TUTORIAL', this.detail)
            //this.ADD_TUTORIAL(this.detail)
            this.isSelected = true
        },
        remove_tutorial: function() {
            this.removeTutorial(this.detail)
            this.isSelected = false
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    text-align: left;
    flex-direction: column;
    border-radius: var(--borderRadius);
    margin: .3rem .2rem;
    padding: 0;
    width: 45%;
    background-color: var(--subSubtile);
    transition: .3s ease-in-out;
    font-size: .8rem;
}
.card:hover {
    box-shadow: 0 0 3px 2px rgba(100, 149, 237,.3);
}
.card .__header {
    padding: .5rem;
    color: var(--mainColor);
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.__body {
    padding: .5rem .5rem 2.5rem;
    cursor: pointer;
}
.__body > * {
    padding: 0 0 .5rem;
}
.__title {
    font-size: 2rem;
    margin: 0;
    color: var(--headerText);
    font-weight: bolder;
    padding: .5rem 0;
}
.__author {
    font-size: 1rem;
    text-shadow: 0 0 1px black;
}
.__location {
    color: var(--subColor);
    text-shadow: 0 0 1px grey;
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
@media (min-width: 1200px) {
    .card {
        width: 20%;
    }
}
</style>