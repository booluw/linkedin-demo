<template>
    <div class="card">
        <div class="__header">
            <span v-for="(d, index) in day" :key="index">
                <span v-if="(index+1) == day.length">{{d}}</span>
                <span v-else>{{d}} and </span>
            </span>
            <br />{{detail.time}}</div>
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
            <div class="__attendees" v-if="showRating=='No'">
                <i class="material-icons" v-if='commentBtn=="Yes"'>account_box</i>
                <span v-else>Attending:</span>
                {{attenders}}
            </div>
            <div class="__attendees" v-else>
                <i class="material-icons">star</i>
                {{review}}
            </div>
            <div v-if='commentBtn=="Yes"'>
                <button class="__btn selected" @click="remove_tutorial()" v-if="isSelected">You're Attending</button>
                <button class="__btn" @click="add_tutorial()" v-if="!isSelected">Attend</button>
            </div>
            <router-link :to="'/'+this.detail.tutor+'/'+this.detail.title" v-else>
                <i class="material-icons">comment</i>
                22
            </router-link>
        </div>
        <!-- The below is just to call the function. I don't know what to do here, doh.-->
        {{checker()}}
        {{date}}
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";

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
        date: function() {
            for(let i = 0; i <= this.detail.date.length; i++) {
                switch (this.detail.date[i]) {
                    case 0:
                        this.day.push('Sundays');
                        break;
                    case 1:
                        this.day.push('Mondays');
                        break;
                    case 2:
                        this.day.push('Tuesdays');
                        break;
                    case 3:
                        this.day.push('Wednesdays');
                        break;
                    case 4:
                        this.day.push('Thursdays');
                        break;
                    case 5:
                        this.day.push('Fridays');
                        break;
                    case 6:
                        this.day.push('Saturdays');
                        break;
                }
            }
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
        ...mapMutations ([
            'ADD_TUTORIAL',
            'REMOVE_TUTORIAL'
        ]),
        ...mapActions ([
            'removeTutorial'
        ]),
        changePage: function() {
            console.log('ChangePage here');
            this.$router.push({name: 'tutorialPage',params: {tutor: `${this.detail.tutor}`, title: `${this.detail.title}`}});
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
            this.ADD_TUTORIAL(this.detail)
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
    border: 1px solid rgba(100, 149, 237,.2);
    border-radius: var(--borderRadius);
    margin: .3rem .2rem;
    padding: 0;
    width: 80%;
    background-color: rgba(100, 149, 237,.1);
    transition: .3s ease-in-out;
}
.card:hover {
    box-shadow: 0 0 3px 2px rgba(100, 149, 237,.3);
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
    outline: none;
}
.__btn:hover {
    border-color: var(--mainColor);
    background-color: var(--mainColor);
    color: white;
}
.__btn.selected {
    background-color: #06b406;
    color: white;
    border-color: #06b406;
    opacity: .6;
    transition: .3s ease-in-out;
}
.__btn.selected:hover {
    opacity: 1;
}
@media (min-width: 1200px) {
    .card {
        width: 25%;
    }
}
</style>