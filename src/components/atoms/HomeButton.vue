<template>
    <div class="button-container">
        <button @click="home()">Back to Home</button>
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
    margin-bottom: 30px;
}
</style>
