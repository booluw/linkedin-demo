<template>
    <div class="page">
        <section class="section">
            <h1 class="main">What are you looking for?</h1>
            <p class="helperText">
                ... We can't find it and its not in the archive either.
                <br />
                <b>Why not try some options:</b>
                <ul>
                    <li><router-link to="/explore">Explore our tutorial archive</router-link>, and attend the coolest tutorials,</li>
                    <li><router-link to="/create">Create tutorials</router-link> and help fellow FUTMites do more, or</li>
                    <li><router-link to="/join">Join tutera</router-link> if you haven't yet.</li>
                </ul>
            </p>
        </section>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'error404'
}
</script>