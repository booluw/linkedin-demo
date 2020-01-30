<template>
    <div class="page">
        <section class="section">
            <p class="text">
                Sign In to your <b>tutera</b> account and start attending the best tutorials that there is.    
            </p>
            <form ation="" class="form" @submit.prevent="submit()">
                <div class="input-block">
                    <label class="label" for="username">username</label>
                    <input type="text" v-model="user.email" name="username" class="input" />
                </div>
                <div class="input-block">
                    <label class="label" for="password">password</label>
                    <input type="password" v-model="user.password" name="password" class="input" />
                </div>
                <div class="v-flex" style="justify-content: flex-end; width: 100%; align-items: center;">
                    <p class="helperText">Don't have an account yet? <router-link to="/join" class="subtile-link">Join Tutera</router-link></p>
                    <button class="btn is-default" style="padding: 1.5rem 2rem;" @click="signin()">Sign In</button>
                </div>
            </form>
            <div class="slab"></div>
        </section>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>


<script>
export default {
    name: 'signin',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signin: function() {
            let check = this.$store.state.users.find(eachUser => eachUser.email == this.user.email);
            if(check) {
                this.$store.commit('setAuthentication', true);
                this.$router.replace('/explore');
            } else {
                alert('Are you sure you have an account?');
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
                    content: 'Tutera, Tutera SignIn, Tutorials, Tutorials in FUTMinna, FUTMinna tutorials'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>