<template>
    <div>
        <img class="thumbnail" :src="thumbnail"/>
    </div>
</template>

<script>
export default {
    name: 'ThumbnailSelector',
    props: {
        thumbnail: {
            type: String,
            required: true,
        }
    },
}
</script>

<style scoped>
.thumbnail{
    width: 120px;
    height: auto;
}
</style>