<template>
    <div class="page">
        <section class="section">
            <div class="notif is-dangerous" v-if="currentQuiz.length == 0">
                <b>{{$route.params.title}}'s</b> quiz would be available shortly
            </div>
            <div class="notif" v-if="showAnswers">
                Answered <b>{{results}}</b> out of {{currentQuiz.questions.length}} correctly.
            </div>
            <div v-if="currentQuiz.length != 0">
                <div class="input-group" v-for="(quiz, index) in currentQuiz.questions" :key="index">
                    <div class="label">
                        ({{index+1}}) {{quiz.question}}
                    </div>
                    <div class="input">
                        <span v-for="(answer, option) in quiz.answers" :key="option">
                            <span :class="((answer == quiz.answer)  && (showAnswers)) ? 'is-correct': ''">
                                <input type="radio" :name="quiz.question" :value="option" @click="answering(`${quiz.question}`, `${answer}`)"/> {{answer}}
                            </span>
                        </span>
                    </div>
                </div>
                <div class="v-flex" style="justify-content: flex-end;">
                    <button class="btn btn-link is-primary" style="margin: 1rem 0" @click="submit()" v-if="!showAnswers">Submit</button>
                    <button class="__btn" style="border-radius: .3rem" @click="$router.go(-1)" v-if="showAnswers">Go back</button>
                </div>
            </div>
        </section>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
    name: 'quizPage',
    computed: {
        ...mapState([
            'quiz'
        ])
    },
    data() {
        return {
            currentQuiz: [],
            showAnswers: false,
            results: 0,
        }
    },
    mounted() {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function() {
            this.currentQuiz = this.quiz.find(i => (i.title == this.$route.params.title));
        },
        answering: function(question, option) {
            for (let quizIndex in this.currentQuiz.questions) {
                if (question == this.currentQuiz.questions[quizIndex].question) {
                    //Submitting answer
                    this.currentQuiz.questions[quizIndex].userAnswer = option;
                    /*if (option == this.currentQuiz.questions[quizIndex].answer) {
                        this.results++;
                    } */
                }
            }
        },
        submit: function() {
            for (let quizIndex in this.currentQuiz.questions) {
                if (this.currentQuiz.questions[quizIndex].userAnswer == this.currentQuiz.questions[quizIndex].answer) {
                    this.results++;
                }
            }
           this.showAnswers = !this.showAnswers;
        }
    }
}
</script>
<style>
.is-correct {
    color: white;
    background-color: forestgreen;
}
.is-wrong {
    color: white;
    background-color: crimson!important;
}
</style>