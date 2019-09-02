<template>
    <div>
        <video class="preview" controls>
            <source :src="videoUrl" type="video/mp4">
        </video>
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
</style>