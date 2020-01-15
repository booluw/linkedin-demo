<template>
    <section class="page">
        <main class="section is-centered">
            <div class="slab first"></div>
            <h1 class="brief">Joining us is free and simple as A, B, and C.</h1>
            <p class="helperText">
                Tutera catalogs all tutorials in FUT Minna.
                And we would be happy to have you onboard, 
                let's keep you attending all those tutorials that matter.
            </p>
            <form action="" class="form" @submit.prevent="submit()">
                <div class="input-block">
                    <label for="username" class="label">username</label>
                    <input type="text" name="username" v-model="user.name" class="input" />
                </div>
                <div class="input-block">
                    <label for="email" class="label">email</label>
                    <input type="email" name="email" v-model="user.email" class="input" />
                </div>
                <div class="input-block">
                    <label for="password" class="label">password</label>
                    <input type="password" name="password" v-model="user.password" class="input" />
                </div>
                <h3 class="snub" style="padding: 0;">Account type</h3>
                <small>You can change anytime, for free.</small><br />
                <div class="v-flex">
                    <div class="input-block radio">
                        <input type="radio" name="account-type" v-model="user.type" value="tuterite" id="tuterite"/>
                        <label class="block" for="tuterite">
                            <div class="__circle"></div>
                            <h4 class="__main-text">Tuterite</h4>
                            <p class="__supporting-text">
                                <b>Student account</b>
                                View and attend tutorials. Don't worry you can change at anytime.
                            </p>
                        </label>
                    </div>
                    <div class="input-block radio">
                        <input type="radio" name="account-type" v-model="user.type" value="tuteran" id="tuteran"/>
                        <label class="block" for="tuteran">
                            <div class="__circle"></div>
                            <h4 class="__main-text">Tuteran</h4>
                            <p class="__supporting-text">
                                <b>Tutor account</b>
                                Organise and create tutorial groups with this account, for free.
                            </p>
                        </label>
                    </div>
                    <div class="input-block radio">
                        <input type="radio" name="account-type" v-model="user.type" value="volunteer" id="full"/>
                        <label class="block" for="full">
                            <div class="__circle"></div>
                            <h4 class="__main-text">Volunteer</h4>
                            <p class="__supporting-text">
                                <b>Student + Tutor</b>
                                Help curating, organising and attending tutorials.
                            </p>
                        </label>
                    </div>
                </div>
                <small>
                    By clicking 'Join', you agree to comply with the community rules guilding this site.
                </small>
                <div class="v-flex" style="justify-content: flex-end;align-items: center; width: 100%;">
                    <p class="helperText" style="text-align: left;">Already have an account? <router-link to="/signin" class="subtile-link">Sign In</router-link></p>
                    <button class="btn is-default" style="padding: 1.5rem 2rem;">Join</button>
                </div>
            </form>
            <div class="slab"></div>
        </main>
        <aside>
            <router-view></router-view>
        </aside>
    </section>
</template>

<script>
export default {
    name: 'join',
    data() {
        return {
            user: {
                name: '',
                password: '',
                type: 'tuterite'
            }
        }
    },
    methods: {
        submit: function() {
            alert(this.user);
        }
    }
}
</script>
<style>
.is-centered {
    text-align: center;
    position: relative;
}
.form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    padding: 1rem 5rem;
}
.input-block {
    display: flex;
    flex-direction: column;
    margin: 0 0 1rem;
    width: 100%;
}
.input-block .label {
    display: inline;
    text-align: left;
    font-weight: bold;
    color: lightgrey;
    padding: .25rem .5rem;
    background-color: var(--mainColor);
    border-radius: var(--borderRadius) var(--borderRadius) 0 0;
}
.input-block .input {
    padding: .5rem .5rem;
    font-size: 1.1rem;
    font-family: 'Montserrat', sans-serif;
    outline: none;
    border: none;
    background-color: var(--mainSubtile);
    border-radius: 0 0 var(--borderRadius) var(--borderRadius);
    border: .2rem solid var(--mainColor);
}
.input-block.radio {
    justify-content: center;
}
.input-block.radio input[type="radio"] {
    display: none;
}
.input-block.radio .__circle {
    --bg: var(--mainSubtile);
    box-sizing: border-box;
    display: block;
    padding: .5rem;
    width: 1rem;
    background-color: var(--bg);
    border-radius: 2rem;
    border: .12rem solid var(--mainColor);
    box-shadow: 0 0 1px .2rem var(--bg);
    transition: .3s ease-in-out;
}
.input-block.radio .block {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--mainSubtile);
    padding: 1rem .5rem .5rem;
    margin: 0 .55rem;
    border-radius: var(--borderRadius);
    height: 100%;
    cursor: pointer;
    transition: .3s ease-in-out;
}
.input-block.radio input[type="radio"]:checked + .block,.input-block.radio .block:hover {
    background-color: rgb(180, 114, 250);
    color: var(--headerText);
    box-shadow: 0 0 10px 1px var(--mainColor);
}
.input-block.radio input[type="radio"]:checked + .block .__circle {
    --bg: var(--mainColor);
    border-color: rgb(180, 114, 250);
}
.input-block.radio .block .__main-text {
    padding: 0;
    margin: .7rem 0;
    font-size: 1.1rem;
    text-shadow: 0 0 2px grey;
}
.input-block.radio .block .__supporting-text {
    padding: 0;
    margin: 0 0 .75rem;
    color: var(--headerText);
    text-shadow: 0 0 .5px grey;
}
.slab {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--subColor);
    width: 100%;
    height: 20%;
    z-index: -1;
    -webkit-clip-path: polygon(100% 13%, 0% 100%, 100% 100%);
    clip-path: polygon(100% 13%, 0% 100%, 100% 100%);
    border-radius: inherit;
}
.slab.first {
    top: 0;
    -webkit-clip-path: polygon(0 87%, 0 0, 100% 0);
    clip-path: polygon(0 87%, 0 0, 100% 0);
}
@media (min-width: 1200px) {
}
</style>