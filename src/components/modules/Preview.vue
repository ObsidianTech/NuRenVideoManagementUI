<template>
    <div>
        <video class="preview" controls>
            <source :src="videoUrl" type="video/mp4">
        </video>        
        <div class="button-container">
            <button class="homeButton" @click="back()">Back</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Preview',
    props: {
        videoUrl: {
            type: String,
        },
    },
    methods: {
        back() {
            this.$router.push("/catalog");
        },
    },
}
</script>

<style scoped>
.preview{
    width: 60%;
    height: auto;
    margin: auto;
    padding-bottom: 35px;
    outline: none;
}

.homeButton{
    margin: 20px;
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