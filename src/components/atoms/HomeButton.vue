<template>
    <div class="button-container">
        <button class="homeButton" @click="home()">Back to Home</button>
    </div>
</template>

<script>
export default {
    name: "HomeButton",
    methods: {
        home() {
            this.$router.push("/");
        },
    },
}
</script>

<style scoped>
.button-container{
    margin: 40px;
}

.homeButton{
    padding: 20px 50px;
    color: lightgray;
    background-color: black;
    border: 1px solid black;
    box-shadow: none;
    transition: 300ms ease;
    outline: none;
}

.homeButton:hover{
    color: black;
    background-color: white;
}
</style>
