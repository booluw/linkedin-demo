<template>
    <div class="page">
        <section class="section">
            <p class="text">
                Sign In to your <b>tutera</b> account and start attending the best tutorials that there is.    
            </p>
            <form ation="" class="form" @submit.prevent="submit()">
                <div class="input-block">
                    <label class="label" for="username">username</label>
                    <input type="text" name="username" id="username" class="input" />
                </div>
                <div class="input-block">
                    <label class="label" for="password">password</label>
                    <input type="password" name="password" id="password" class="input" />
                </div>
                <div class="v-flex" style="justify-content: flex-end; width: 100%; align-items: center;">
                    <p class="helperText">Don't have an account yet? <router-link to="/join" class="subtile-link">Join Tutera</router-link></p>
                    <button class="btn is-default" style="padding: 1.5rem 2rem;">Sign In</button>
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

        }
    }
}
</script>

<style scoped>

</style>