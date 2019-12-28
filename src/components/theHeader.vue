<template>
    <div>
         <input type="checkbox" name="menu-toggle" v-model="menuToggle"/>
         <header class="header">
             <transition-group tag="div" class="mobile" enter-active-class="animated fadeIn slower" leave-active-class="animated fadeOut faster">
                <i class="material-icons mobile" @click="menuToggle=true" v-if="!menuToggle" key="hamburger">menu</i>
                <i class="material-icons mobile" @click="menuToggle=false" v-if="menuToggle" key="cancel">clear</i>
             </transition-group>
            <router-link to="/" class="logo">
                <img class="logo" alt="image of an ink pen with 'tutera'" src="../assets/logo.png" title="Click to go home" />
            </router-link>
            <div style="display: flex;justify-content: flex-end;" class="mobile">
                <router-link to="/login" class="cta">Login</router-link>
            </div>
            <input type="search" class="desktop" />
            <nav class="nav desktop">
                <router-link to="/explore">Explore</router-link>
                <router-link to="/u">Tutors</router-link>
                <router-link to="/bnb">BnB</router-link>
                <router-link to="/login" class="cta">Login</router-link>
            </nav>
         </header>
         <transition class="mobile" enter-active-class="animated slideInLeft faster" leave-active-class="animated slideOutLeft faster">
            <nav class="nav mobile" v-if="menuToggle">
                <h2>
                    tutera.tk
                </h2>
                <router-link to="/explore">Explore</router-link>
                <router-link to="/u">Tutors</router-link>
                <router-link to="/bnb">BnB</router-link>
            </nav>
        </transition>
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
    watch: {
        '$route' : 'menutoggle',
    },
    methods: {
        menutoggle: function() {
            this.menuToggle = false;
        }
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
    position: relative;
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
    bottom: 0;
    left: 0;
    right: 0;
    margin: 4rem 0 0;
    padding: .5rem .2rem;
    background-color: rgb(102, 51, 153);
    box-shadow: 0 5px 10px 1px grey;
    color: grey;
    border-radius: 0 0 .3rem .3rem;
    z-index: 3;
}
.nav a, .nav a:visited {
    --bg: rgba(0, 0, 0, 0.322);
    --color: var(--cta);
    color: var(--color);
    background-color: var(--bg);
    font-weight: normal;
    margin: .15rem .1rem;
    padding: .5rem 1rem;
    border: 1.5px solid var(--bg);
    border-radius: var(--borderRadius);
    transition: .3s ease-in-out;
}
a.cta {
    --color: var(--cta);
    --bg: var(--ctaSubtile);
    color: var(--color);
    font-weight: bold;
    background-color: var(--bg);
    padding: .6rem 2rem;
    border: 1.5px solid var(--color);
    border-radius: var(--borderRadius);
    transition: .3s ease-in-out;
}
    a.cta:hover {
        --color: white;
        --bg: var(--cta);
    }
.nav a:hover, .header .router-link-active:not(.logo) {
    background-color: var(--subColor);
    color: white;
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
    .nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        align-content: space-between;
    }
    .nav a, .nav a:visited {
        --color: var(--subColor);
        --bg: var(--subSubtile);
        color: var(--color);
        background-color: var(--bg);
        font-weight: normal;
        margin: 0 .1rem;
        padding: .5rem 1rem;
        border: 1.5px solid var(--bg);
        border-radius: var(--borderRadius);
    }
    .nav a:hover {
        background-color: var(--color);
        color: white;
    }
    .nav a.cta {
        --color: var(--cta);
        --bg: var(--ctaSubtile);
    }
    .nav a.cta:hover {
        --color: var(--cta);
        
    }
    input[type="search"] {
        padding: .5rem;
        width: 47vw;
        margin: 0 1rem 0 0;
        border-radius: var(--borderRadius);
        outline: none;
        border: 1.5px solid var(--subSubtile);
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