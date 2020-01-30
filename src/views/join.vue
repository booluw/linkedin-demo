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
            <div class="notif is-dangerous" v-html="warning" v-if="warning.length != 0"></div>
            <form action="" class="form" @submit.prevent="submit()">
                <div class="input-block">
                    <label for="username" class="label">username</label>
                    <input type="text" name="username" v-model.lazy="user.name" class="input"  required/>
                </div>
                <div class="input-block">
                    <label for="email" class="label">email</label>
                    <input type="email" name="email" v-model="user.email" class="input"  required/>
                </div>
                <div class="input-block">
                    <label for="password" class="label">password</label>
                    <input type="password" name="password" v-model="user.password" class="input" required/>
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
                    <button class="btn is-default" style="padding: 1.5rem 2rem;" :disabled="nameLength">Join</button>
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
    computed: {
        nameLength: function() {
            if (this.user.name.length < 6) {
                return 'Please length is less than 6 letters.'
            } else {
                return
            }
        }
    },
    data() {
        return {
            user: {
                name: '',
                password: '',
                type: 'tuterite'
            },
            warning: ''
        }
    },
    methods: {
        submit: function() {
            let check = this.$store.state.users.find(eachUser => eachUser.name == this.user.name);
            if(check) {
                //User.name already in database, notify user to try another.
                this.warning = `Please an account is already registered with <b>${this.user.name}</b>, choose another.`;
            } else {
                //New user, set auth and send to next page.
                this.$store.commit('setAuthentication', true);
                this.$router.replace('/checkout');
            }
        }
    },
    metaInfo() {
        return {
            title: 'SignIn to your Tutera account.',
            meta: [
                {   vmid:'description',
                    name: 'description',
                    content: 'Sign In to your tutera account and start attending the best tutorials that there is.'
                },
                {
                    vmid: 'keyword',
                    name: 'keyword',
                    content: 'Tutera, Join Tutera, Tutorials, Tutorials in FUTMinna, FUTMinna tutorials'
                }
            ]
        }
    }
}
</script>