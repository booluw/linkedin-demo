<template>
    <div :class="`alert ${type}`">
        <b v-if="type=='info'">Yay!&nbsp;&nbsp;</b>
        <b v-else-if="type=='warning'">Awww!&nbsp;&nbsp;</b>
        <b v-else>Oops!&nbsp;&nbsp;</b>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'Alert',
    props: {
        msg: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: false,
            default: 'info'
        }
    }
}
</script>

<style scoped>
.alert {
    padding: 1rem .5rem;
    border: 1.5px solid transparent;
    border-radius: var(--borderRadius);
    margin: .5rem;
    text-shadow: 0 0 4px white;
}
.info {
    background-color: rgba(100, 148, 237, 0.103);
    color: cornflowerblue;
    border-color: cornflowerblue;
}
.danger {
    background-color: rgba(220, 20, 60, 0.103);
    color: crimson;
    border-color: crimson;
}
.warning {
    background-color: rgba(255, 166, 0, 0.103);
    color: orange;
    border-color: orange;
}
</style>