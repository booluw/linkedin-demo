<template>
    <div>
         <input type="checkbox" name="menu-toggle" v-model="menuToggle"/>
         <header class="header">
             <div class="mobile">
                <i class="material-icons mobile" @click="menuToggle=!menuToggle">menu</i>
            </div>
            <router-link to="/" class="logo">
                <img class="logo" alt="image of an ink pen with 'tutera'" src="../assets/logo.png" title="Click to go home" />
            </router-link>
            <div style="display: flex;justify-content: flex-end;" class="mobile">
                <router-link to="/login" class="cta">Login</router-link>
            </div>
            <input type="search" class="desktop" />
            <nav class="nav desktop">
                <router-link to="/explore">Explore</router-link>
                <router-link to="/tutors">Tutors</router-link>
                <router-link to="/bnb">BnB</router-link>
                <router-link to="/login" class="cta">Login</router-link>
            </nav>
         </header>
         <nav class="nav mobile" v-if="menuToggle">
            <h2>
                tutera.tk
             </h2>
            <router-link to="/explore">Explore</router-link>
            <router-link to="/tutors">Tutors</router-link>
            <router-link to="/bnb">BnB</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            menuToggle : false
        }
    },
    methods: {

    }
}
</script>

<style>
.material-icons.mobile {
    text-align: left;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    width: 2.5rem;
    color: #0d51ce;
}
.header {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    display: flex;
    padding: 0 .5rem;
    background-color: white;
    box-shadow: var(--boxShadow);
}
.nav.mobile {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    margin: 4rem 0 0;
    padding: .5rem .2rem;
    width: 15rem;
    background-color: rgb(102, 51, 153);
    box-shadow: 0 5px 10px 1px grey;
    color: grey;
    border-radius: 0 0 .3rem .3rem;
}
.nav a, .nav a:visited {
    color: var(--subColor);
    background-color: rgba(100, 149, 237,0.5);
    font-weight: normal;
    margin: .15rem .1rem;
    padding: .5rem 1rem;
    border: 1.5px solid var(--subColor);
    border-radius: var(--borderRadius);
    transition: .3s ease-in-out;
}
.nav a:hover, .header .router-link-active:not(.logo) {
    background-color: var(--subColor);
    color: white!important;
}
.cta {
    border: 1.5px solid var(--cta)!important;
}
.mobile {
    display: block;
}
.desktop {
    display: none;
}
.cta {
    background-color: rgba(255, 165, 0,.1)!important;
    color: var(--cta)!important;
    padding: .5rem 1.5rem;
    border-radius: var(--borderRadius);
    border: 1.5px solid var(--cta);
}
.cta:hover {
    background-color: var(--cta)!important;
    color: white!important;
}
@supports (display: grid){
    .header {
        display: grid;
        grid-template-columns: .5fr auto .5fr;
        align-items: center;
    }
}
@media (min-width: 1200px) {
    .header {
        position: -webkit-sticky;
        position: sticky;
        top: 0px; 
        padding: .5rem 2rem;
        margin: 0;
        justify-content: space-between;
        align-content: space-between;
        z-index: 1;
    }
    .mobile {
        display: none!important;
    }
    .desktop {
        display: block;
    }
    .nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        align-content: space-between;
    }
    .nav a, .nav a:visited {
        color: var(--subColor);
        background-color: rgba(100, 149, 237,0.05);
        font-weight: normal;
        margin: 0 .1rem;
        padding: .5rem 1rem;
        border: 1.5px solid var(--subColor);
        border-radius: var(--borderRadius);
    }
    .nav a:hover {
        background-color: var(--subColor);
        color: white;
    }
    .cta {
        border: 1.5px solid var(--cta)!important;
    }
    input[type="search"] {
        padding: .5rem;
        width: 30vw;
        border-radius: var(--borderRadius);
        outline: none;
        border: 1.5px solid var(--subColor);
        transition: .3s ease-in;
        background-color: rgba(100, 149, 237,0.05);
    }
    input[type="search"]:focus {
        box-shadow: 0 0 10px 1px var(--subColor);
    }
}
input[name="menu-toggle"] {
    display: none;
}
</style>